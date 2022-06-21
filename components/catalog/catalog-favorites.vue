<template>
	<section class="page-main__catalog catalog grid__col-12">
		<heading-h2>Понравившиеся автомобили</heading-h2>
		<skeleton-catalog-desktop-small v-if="loading" />
		<div v-else class="catalog__list grid grid__col-12">
			<component :is="component"
			           v-for="offer in liked_offers"
			           :offer="offer"
			           :key="offer.id" />
		</div>
		<div v-if="liked_offers.length === 0">
			Нет выбранных автомобилей
		</div>
		
		<!--<button-more />-->
	</section>
</template>
<script>
import usedOffers from "~/apollo/queries/usedOffers";
import {mapGetters} from "vuex";

export default {
	data() {
		return {
			loading: true,
			liked_offers: []
		}
	},
	computed: {
		...mapGetters({
			isMobile: 'isMobile'
		}),
		component() {
			return this.isMobile ? 'catalog-item-large-mobile' : 'catalog-item-small-desktop'
		}
	},
	async mounted() {
		if (process.client) {
			this.loading = true
			let external_id_array = localStorage.getItem('likes').split(',').map(i => Number(i))
			let client = this.$apolloProvider.defaultClient
			try {
				let response = await client.query(
						{
							query: usedOffers,
							variables: {
								site_id: this.$config.site_id,
								limit: 0,
								page: 1,
								external_id_array
							},
							fetchPolicy: 'network-only'
						})
				this.liked_offers = response.data.offers.data
				this.loading = false
			} catch (e) {
				this.$nuxt.error({statusCode: 404})
			}
		}
	}
}
</script>