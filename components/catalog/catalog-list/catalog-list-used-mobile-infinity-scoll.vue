<template>
	<RecycleScroller
			class="scroller"
			:items="moreOffersData.data"
			:item-size="32"
			key-field="id"
			@scroll-end="scrollEnd"
			v-slot="{ item }"
	>
		<component :is="catalog" :offer="item"/>
	</RecycleScroller>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import offers from "@/apollo/queries/offer/offers";

export default {
	data() {
		return {
			limit: 8,
			infiniteId: +new Date(),
		}
	},
	watch: {
		sort() {
			this.infiniteId += 1
		}
	},
	computed: {
		...mapGetters({
			view: 'filters/filters/view',
			offers: 'filters/filters/offers',
			loading: 'filters/filters/loading',
			sort: 'filters/filters/sort'
		}),
		moreOffersData() {
			return this.offers
		},
		skeleton() {
			if (this.$device.isTablet) {
				return this.view === 's' ? 'skeleton-card-small' : 'skeleton-card-large'
			} else {
				return this.view === 's' ? 'skeleton-card-large' : 'skeleton-card-small'
			}
		},
		catalog() {
			if (this.$device.isTablet) {
				return this.view === 's' ? 'catalog-item-large-mobile' : 'catalog-item-large-desktop'
			} else {
				return this.view === 's' ? 'catalog-item-large-mobile' : 'catalog-item-small-mobile'
			}
		}
	},
	methods: {
		...mapActions({
			request: 'filters/filters/request',
		}),
		scrollEnd(){
			console.log(1)
		},
		async getOffers() {
			let response = await this.filterRequest({
				url: this.$route.path === '/best-moscow-autosalon' ? '/used' : this.$route.path,
				page: Number(this.offers.current_page + 1),
				dateFormat: 'j F Y года.',
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
				limit: this.limit
			})
			if (response.data.offers.data.length) {
				this.offers.current_page = response.data.offers.current_page
				this.offers.data = [...this.offers.data, ...response.data.offers.data]
				await this.$store.commit('filters/filters/SET_OFFERS', this.offers)
			}
		},
		async filterRequest(assignVariables) {
			try {
				return await this.request({query: offers, variables: assignVariables})
				// this.offers.data = [...this.offers.data, ...response.data.offers.data]
				// this.offers.current_page = response.data.offers.current_page
				// await this.$store.commit('filters/filters/SET_OFFERS', this.offers)
			} catch (error) {
				return this.$nuxt.error({statusCode: 404, message: '404'})
			}
		},
	}
}
</script>
