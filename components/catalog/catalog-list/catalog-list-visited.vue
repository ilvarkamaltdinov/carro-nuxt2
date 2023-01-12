<template>
	<section class="catalog__list catalog__list--visited"
	         v-if="offers.length">
		<div class="grid grid--container">
			<heading-h2 class="grid__col-12">Просмотренные</heading-h2>
		</div>
		<div class="catalog__list grid grid__col-12">
			<component :is="component"
			           v-for="offer in offers"
			           :offer="offer"
			           :key="offer.id" />
		</div>
	</section>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import offers from "@/apollo/queries/offer/offers";

export default {
	data() {
		return {
			offers: []
		}
	},
	props: {
		offer: Object
	},
	computed: {
		...mapGetters({
			visited: 'visited/visited/visited',
			site_id: 'site_id'
		}),
		visitedOffers() {
			let visitedArray = this.visited.split(',')
			return [...new Set(visitedArray)]
		},
		component() {
			if (this.$device.isTablet) {
				return 'catalog-item-large-mobile'
			} else {
				return this.$device.isMobile ? 'catalog-item-large-mobile' : 'catalog-item-small-desktop'
			}
		},
	},
	methods: {
		...mapActions({
			request: 'request'
		}),
		async getVisited() {
			let filtered_array = this.visitedOffers.filter(id => id !== this.offer.external_id + '')
			let external_id_array = filtered_array.map(item => Number(item)).reverse()
			let client = this.$apolloProvider.defaultClient
			try {
				let response = await client.query(
						{
							query: offers,
							variables: {
								site_id: this.site_id,
								limit: 6,
								page: 1,
								external_id_array
							},
							fetchPolicy: 'network-only'
						})
				this.offers = response.data.offers.data
			} catch (error) {
				console.log(error)
			}
		}
	},
	async mounted() {
		try {
			await this.getVisited()
		} catch (error) {
			console.log(error)
		}
	}
}
</script>