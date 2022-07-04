<template>
	<section class="page-main__catalog catalog grid__col-12">
		<heading-h2>Автомобили в наличии</heading-h2>
		<tabs-list :tabs="tabs" />
		<div class="catalog__list grid">
			<catalog-item-large-mobile v-for="offer in offers_list"
			                           :offer="offer"
			                           :key="offer.id" />
		</div>
		<button-typical text="Все автомобили" class="button--link button--more"/>
	</section>
</template>
<script>
import {mapGetters} from "vuex";

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
			]
		}
	},
	computed: {
		...mapGetters({
			offers: 'catalog/catalog-cars/offers',
		}),
		offers_list() {
			return this.offers.data
		}
	}
}
</script>