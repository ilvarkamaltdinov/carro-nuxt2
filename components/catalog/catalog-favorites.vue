<template>
	<section class="page-main__not-found not-found"
	         v-if="liked_offers.length === 0 && !loading">
		<h1 class="heading heading--h1">
			{{ pageTitle }}
		</h1>
		<div class="not-found__block">
			<picture-component
					classes="not-found__img lazyload"
					:small="`${require(`~/assets/img/favorites@1x.png`)}`"
					:small-webp="`${require(`~/assets/img/favorites@1x.webp`)}`"
					:big="`${require(`~/assets/img/favorites@2x.png`)}`"
					:big-webp="`${require(`~/assets/img/favorites@2x.webp`)}`" />
		</div>
	</section>
	<section v-else
	         class="page-main__catalog catalog grid__col-12">
		<h1 class="heading heading--h1">
			{{ pageTitle }}
		</h1>
		<div v-if="loading"
		     class="catalog__list grid grid__col-12">
			<component v-for="i in 3"
			           :key="i"
			           :is="$device.isMobile ? 'skeleton-card-large': 'skeleton-card-small'" />
		</div>
		<div v-else
		     class="catalog__list grid grid__col-12">
			<component :is="component"
			           v-for="offer in liked_offers"
			           :offer="offer"
			           :key="offer.id" />
		</div>
	</section>
</template>
<script>
import offers from "@/apollo/queries/offer/offers";
import {mapGetters} from "vuex";

export default {
	props: {
		pageTitle: String
	},
	data() {
		return {
			loading: true,
			liked_offers: []
		}
	},
	computed: {
		...mapGetters({
			site_id: 'site_id'
		}),
		component() {
			if (this.$device.isTablet) {
				return 'catalog-item-large-mobile'
			} else{
				return this.$device.isMobile ? 'catalog-item-large-mobile' : 'catalog-item-small-desktop'
			}
			
		}
	},
	async mounted() {
		if (process.client) {
			if (localStorage.getItem('likes')) {
				this.loading = true
				let external_id_array = localStorage.getItem('likes').split(',').map(i => Number(i))
				let client = this.$apolloProvider.defaultClient
				try {
					let response = await client.query(
							{
								query: offers,
								variables: {
									site_id: this.site_id,
									limit: 0,
									page: 1,
									external_id_array
								},
								fetchPolicy: 'network-only'
							})
					this.liked_offers = response.data.offers.data
					this.loading = false
				} catch (error) {
					console.log(error)
					this.$nuxt.error({statusCode: 404})
				}
			} else {
				this.loading = false
			}
		}
	}
}
</script>