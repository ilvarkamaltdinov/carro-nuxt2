<template>
	<section class="page-main__catalog catalog grid__col-12">
		<h1 class="heading heading--h1">
			{{pageTitle}}
		</h1>
		<div v-if="loading" class="catalog__list grid grid__col-12">
			<skeleton-card-small  v-for="i in 3" :key="i"/>
		</div>
		<div v-else class="catalog__list grid grid__col-12">
			<component :is="component"
			           v-for="offer in liked_offers"
			           :offer="offer"
			           :key="offer.id" />
		</div>
		<div class="not-found__block" v-if="liked_offers.length === 0 && !loading">
			<p>Нет избранных автомобилей</p>
			<picture>
				<source type="image/webp"
				        media="(min-width: 768px)"
				        :data-srcset="`${require('~/assets/img/favorites@1x.webp')} 1x, ${require('~/assets/img/favorites@2x.webp')} 2x`" />
				<source media="(min-width: 768px)"
				        :data-srcset="`${require('~/assets/img/favorites@1x.png')} 1x, ${require('~/assets/img/favorites@2x.png')} 2x`" />
				<img class="not-found__img lazyload"
				     src="~/assets/img/favorites@1x.png"
				     :data-srcset="`${require('~/assets/img/favorites@2x.png')} 2x`"
				     alt="404" />
			</picture>
		</div>
		<!--<button-more />-->
	</section>
</template>
<script>
import offers from "@/apollo/queries/offer/offers";
import {mapGetters} from "vuex";

export default {
	props:{
		pageTitle:String
	},
	data() {
		return {
			loading: true,
			liked_offers: []
		}
	},
	computed: {
		component() {
			return this.$device.isMobile ? 'catalog-item-large-mobile' : 'catalog-item-small-desktop'
		}
	},
	async mounted() {
		if (process.client) {
			if(localStorage.getItem('likes')){
				this.loading = true
				let external_id_array = localStorage.getItem('likes').split(',').map(i => Number(i))
				let client = this.$apolloProvider.defaultClient
				try {
					let response = await client.query(
							{
								query: offers,
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
				}
				catch (e) {
					this.$nuxt.error({statusCode: 404})
				}
			} else{
				this.loading = false
			}
		}
	}
}
</script>