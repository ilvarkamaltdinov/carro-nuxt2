<template>
	<section class="page-main__catalog catalog grid">
		<div class="heading-group heading-group--h1 grid__col-12">
			<div class="heading-group__wrap">
				<!--<h3 style="position: fixed; padding: 8px; top: 160px; left: 24px; z-index: 1000; background: #fff; border:2px solid black">-->
				<!--	{{ typeName }}-->
				<!--</h3>-->
				<!--<br />-->
				<h1 class="heading heading--h1">{{ currentHeading }}</h1>
				<span class="heading-group__label">121212 автомобиля в наличии</span>
			</div>
		</div>
		<div class="grid__col-4">
			<filter-desktop />
		</div>
		<div class="grid__col-8">
			<filter-sort />
			<component :is="isMobile ? 'catalog-list-used-mobile' : 'catalog-list-used-desktop'" />
			<button-more>Показать больше</button-more>
			<pagination />
		</div>
	</section>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
import capitalizeFirstLetter from "@/mixins/capitalizeFirstLetter";
import catalogButtonEvents from "~/mixins/catalog/catalog-button-events";
import offerFilters from "~/apollo/queries/offerFilters";
import offerUrl from "~/apollo/queries/offerUrl";

export default {
	mixins: [capitalizeFirstLetter, catalogButtonEvents],
	data() {
		return {
			sort: 'price|asc',
		}
	},
	
	async fetch() {
		this.setLoading(true)
		if (!this.isClick) {
			this.setAllChosen({})
			let variables = {
				site_id: this.$config.site_id,
			}
			if (this.$route.name === 'used-mark-model-car') {
				try {
					let response = await this.defineOfferUrl()
					let typeName = response.data.offerUrl.__typename
					let assignVariables = response.data.offerUrl
					delete assignVariables.__typename;
					if(typeName === 'OfferUrlFilterPaginationType'){
						console.log('Фильтр')
						// this.setCarPage(false)
						let response = await this.filterRequest({...variables, ...assignVariables})
						this.setFilters(response.data.offerFilters)
						this.setAllChosen(response.data.offerFilters.chosen)
						this.setOffers(response.data.offers)
						this.setLoading(false)
					}
					else if(typeName === 'OfferUrlType'){
						console.log('тачка')
						// this.setCarPage(true)
					}
				}
				catch (e) {
					this.$nuxt.error({statusCode: 404})
				}
			}
			else{
				try{
					let assignVariables = {
						url: this.$route.path,
						mark_slug_array: this.$stringToArray(this.$route.query.mark_slug_array),
						folder_slug_array: this.$stringToArray(this.$route.query.folder_slug_array),
						generation_slug_array: this.$stringToArray(this.$route.query.generation_slug_array),
						engine_type_id_array: this.$numberToArray(this.$route.query.engine_type_id_array),
						gearbox_id_array: this.$numberToArray(this.$route.query.gearbox_id_array),
						drive_type_id_array: this.$numberToArray(this.$route.query.drive_type_id_array),
						body_type_id_array: this.$numberToArray(this.$route.query.body_type_id_array),
					}
					let response = await this.filterRequest({...variables, ...assignVariables})
					this.setFilters(response.data.offerFilters)
					this.setAllChosen(response.data.offerFilters.chosen)
					this.setOffers(response.data.offers)
					this.setLoading(false)
				}
				catch(e) {
					this.$nuxt.error({statusCode: 404})
				}
			}
		}
	},
	methods: {
		...mapActions({
			getFilters: 'filters/filters/getFilters'
		}),
		...mapMutations({
			setAllChosen: 'filters/filters/SET_ALL_CHOSEN',
			setFilters: 'filters/filters/SET_FILTERS',
			setOffers: 'filters/filters/SET_OFFERS',
			setLoading: 'filters/filters/SET_LOADING',
			setCarPage: 'filters/filters/SET_CAR_PAGE',
		}),
		filterRequest(variables){
			let client = this.$apolloProvider.defaultClient
			return client.query(
					{
						query: offerFilters,
						variables: this.$removeEmptyObjects(variables),
						fetchPolicy: 'network-only'
					})
		},
		defineOfferUrl() {
			let variables = {
				site_id: this.$config.site_id,
				url: this.$route.path,
			}
			let client = this.$apolloProvider.defaultClient
			
			return client.query(
					{
						query: offerUrl,
						variables: this.$removeEmptyObjects(variables),
						fetchPolicy: 'no-cache' // TODO используется потому что иначе будет пипец
					})
		}
	},
	computed: {
		...mapGetters({
			isMobile: 'isMobile',
			isClick: 'filters/filters/isClick'
		}),
		// path() {
		// 	return this.$route.fullPath
		// },
		currentHeading() {
			if (this.$route.params.mark) {
				return this.capitalizeFirstLetter(this.$route.params.mark) + ' с пробегом'
			}
			return 'Автомобили с пробегом'
		},
	}
}
</script>
