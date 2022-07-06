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
					<button @click="tabClick(tab)" class="tabs__link" role="tab"
					        data-toggle="tab">
						{{ tab.title }}
					</button>
				</li>
			</ul>
		</div>
		<div class="catalog__list grid">
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
					slug: 'test'
				},
				{
					title: "Свежие",
					slug: 'test'
				},
				{
					title: "До 500 000 ₽",
					slug: 'test'
				},
				{
					title: "Топ-выгода",
					slug: 'test'
				},
				{
					title: "7-местные",
					slug: 'test'
				},
				{
					title: "До 2 владельцев",
					slug: 'test'
				},
				{
					title: "До 5 лет",
					slug: 'test'
				},
				{
					title: "Седаны",
					slug: 'test'
				}
			],
			set:'fresh'
		}
	},
	computed: {
		...mapGetters({
			offers: 'catalog/catalog-cars/offers',
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
		tabClick(tab){
			this.set = tab.set
		}
	}
}
</script>