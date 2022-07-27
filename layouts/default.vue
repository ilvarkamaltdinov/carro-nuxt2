<template>
	<div class="default__wrapper"
	     @keyup.esc="closeModals"
	     tabindex="0">
		<Header />
		<client-only>
			<modal-wrap />
			<modal-stories />
			<modal-benefits />
		</client-only>
		<Nuxt />
		<Footer />
	</div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
// import capitalizeFirstLetter from "~/mixins/capitalizeFirstLetter";
import offerFilters from "@/apollo/queries/offer/offerFilters";
import offerUrl from "@/apollo/queries/offer/offerUrl";
import _ from "lodash";
import utm from "@/mixins/utm";
import metrika from "@/mixins/metrika";

export default {
	mixins: [utm, metrika],
	watch: {
		'$route'() {
			this.closeModals()
			if (this.urlValidate) {
				this.checkUrl()
			}
		}
	},
	async fetch() {
		if (this.urlValidate) {
			await this.checkUrl()
		}
	},
	computed: {
		...mapGetters({
			isFilterClick: 'filters/filters/isFilterClick',
			isOfferClick: 'filters/filters/isOfferClick',
			sort: 'filters/filters/sort'
		}),
		urlValidate() {
			return this.$route.params.category === 'used'
					|| this.$route.params.category === 'commercial'
					|| this.$route.name === 'Best-moscow-autosalon'
		}
	},
	methods: {
		...mapMutations({
			setComponentCatalog: 'filters/filters/SET_COMPONENT_CATALOG',
			setIsFilterClick: 'filters/filters/SET_IS_FILTER_CLICK',
			setIsOfferClick: 'filters/filters/SET_IS_OFFER_CLICK',
			setLoadingRange: 'filters/filters/SET_LOADING_RANGE',
			setModalMenu: 'modal/modal-menu/setModalMenu',
			setModalMarks: 'modal/modal-marks/setModalMarks',
		}),
		...mapActions({
			request: 'filters/filters/request',
			closeStories: 'stories/stories/closeStories',
			closeModal: 'modal/modal-main/closeModal',
		}),
		closeModals() {
			this.closeStories()
			this.closeModal()
			this.setModalMenu(false)
			this.setModalMarks(false)
		},
		async filterRequest(assignVariables) {
			try {
				let response = await this.request({query: offerFilters, variables: assignVariables})
				await this.changingFilters(response.data.offerFilters)
				await this.changingOffers(response.data.offers)
				this.setIsFilterClick(false)
			} catch (error) {
				return this.$nuxt.error({statusCode: 404, message: '404'})
			}
		},
		async changingFilters(payload) {
			await this.$store.commit('filters/filters/SET_FILTERS', payload)
			await this.$store.commit('filters/filters/SET_ALL_CHOSEN', payload.chosen)
		},
		async changingOffers(payload) {
			await this.$store.commit('filters/filters/SET_OFFERS', payload)
			await this.$store.commit('filters/filters/SET_FILTERED_TOTAL', payload.total)
			await this.$store.commit('filters/filters/SET_LOADING', false)
		},
		async checkUrl() {
			if (!this.isFilterClick) {
				await this.setLoadingRange(true)
			}
			// Если клик по объявлению, сразу показываем компонент объявления
			if (this.isOfferClick) {
				this.setComponentCatalog('car')
				this.setIsOfferClick(false)
				return
			}
			await this.$store.commit('filters/filters/SET_LOADING', true)
			// всегда компонент каталога
			await this.setComponentCatalog('catalog-used')
			//Запрос на определение что это, когда 4 элемента в урл и нет клика по фильтру
			if (this.$route.params.car && !this.isFilterClick) {
				try {
					let response = await this.request({query: offerUrl, variables: {url: this.$route.path}})
					let typeName = response.data.offerUrl.__typename
					let assignVariables = response.data.offerUrl
					delete assignVariables.__typename;
					if (typeName === 'OfferUrlFilterPaginationType') {
						// Если это результат для фильтра, отправляем запрос
						await this.filterRequest(this._.pickBy(assignVariables))
					} else if (typeName === 'OfferUrlType') {
						// Если это авто, просто показываем компонент, запрос отправится в компоненте
						this.setComponentCatalog('car')
					}
				} catch (e) {
					this.$nuxt.error({statusCode: 404})
				}
			} else {
				await this.filterRequest(this._.pickBy({ // TODO очищаю от пустых значений
					url: this.$route.path === '/best-moscow-autosalon' ? '/used' : this.$route.path,
					page: Number(this.$route.query.page) || 1,
					mark_slug_array: this.$stringToArray(this.$route.query.mark_slug_array),
					folder_slug_array: this.$stringToArray(this.$route.query.folder_slug_array),
					generation_slug_array: this.$stringToArray(this.$route.query.generation_slug_array),
					engine_type_id_array: this.$numberToArray(this.$route.query.engine_type_id_array),
					gearbox_id_array: this.$numberToArray(this.$route.query.gearbox_id_array),
					drive_type_id_array: this.$numberToArray(this.$route.query.drive_type_id_array),
					body_type_id_array: this.$numberToArray(this.$route.query.body_type_id_array),
					price_from: Number(this.$route.query.price_from),
					price_to: Number(this.$route.query.price_to),
					year_from: Number(this.$route.query.year_from),
					year_to: Number(this.$route.query.year_to),
					sort: this.$route.query.sort || this.sort,
					limit: 8
				}))
			}
			if (!this.isFilterClick) {
				await this.setLoadingRange(false)
			}
		},
	}
}
</script>
