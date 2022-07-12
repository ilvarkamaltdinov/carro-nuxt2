<template>
	<section class="page-main__catalog catalog grid__col-12">
		<heading-h2>Автомобили в наличии</heading-h2>
		<div class="tabs">
			<ul class="tabs__list">
				<li role="presentation"
				    v-for="(tab, index) in tabs"
				    :key="index"
				    :class="{'tabs__item--active':tab.slug === set}"
				    class="tabs__item">
					<button @click="tabClick(tab)"
					        class="tabs__link"
					        role="tab"
					        data-toggle="tab">
						{{ tab.title }}
					</button>
				</li>
			</ul>
		</div>
		<div v-if="loading" class="catalog__list grid">
			<skeleton-card-desktop-small v-for="i in 3" :key="i"/>
		</div>
		<div class="catalog__list grid" v-else>
			<catalog-item-large-mobile v-for="offer in offers_list"
			                           :offer="offer"
			                           :key="offer.id" />
		</div>
		<button-typical @click="toCatalog" text="Все автомобили"
		                class="button--link button--more" />
	</section>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import offers from "@/apollo/queries/offer/offers";

export default {
	data() {
		return {
			tabs: [
				{
					title: "Топ-предложения",
					slug: 'best'
				},
				{
					title: "Свежие",
					slug: 'fresh'
				},
				{
					title: "До 500 000 ₽",
					slug: 'before-500'
				},
				// {
				// 	title: "Топ-выгода",
				// 	slug: 'test',
				// },
				{
					title: "7-местные",
					slug: 'seats-7'
				},
				{
					title: "До 2 владельцев",
					slug: 'owners-2'
				},
				{
					title: "До 5 лет",
					slug: 'young'
				},
				{
					title: "Седаны",
					slug: 'sedan'
				},
				{
					title: "Премиум",
					slug: 'premium'
				}
				// {
				// 	title: "Внедорожники",
				// 	slug: 'allroad'
				// }
			],
			set: 'best'
		}
	},
	computed: {
		...mapGetters({
			offers: 'catalog/catalog-cars/offers',
			loading: 'catalog/catalog-cars/loading'
		}),
		offers_list() {
			return this.offers.data
		}
	},
	async fetch() {
		let response = await this.request({query: offers, variables: {page: 0, limit: 10}})
		this.setOffers(response.data.offers)
	},
	methods:{
		...mapActions({
			request: 'filters/filters/request'
		}),
		...mapMutations({
			setOffers:'catalog/catalog-cars/SET_OFFERS'
		}),
		toCatalog() {
			this.$router.push('/used')
		},
		async tabClick(tab) {
			this.set = tab.slug
			let response = await this.request({query: offers, variables: {page: 0, limit: 10, set: this.set}})
			this.setOffers(response.data.offers)
		},
	}
}
</script>