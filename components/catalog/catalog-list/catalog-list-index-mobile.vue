<template>
	<section class="page-main__catalog catalog grid__col-12">
		<heading-h2>Автомобили в наличии</heading-h2>
		<tabs-list />
		<div class="catalog__list grid">
			<catalog-item-large-mobile v-for="offer in offers_list"
			                           :offer="offer"
			                           :key="offer.id" />
		</div>
		<button-more>Все автомобили</button-more>
	</section>
</template>
<script>
import catalog from "~/mixins/catalog/catalog-index";
import catalogButtonEvents from "~/mixins/catalog/catalog-button-events";
import {mapGetters} from "vuex";

export default {
	components: {},
	
	computed: {
		...mapGetters({
			offers: 'filters/filters/offers',
		}),
		offers_list() {
			return this.offers.data
		}
	}
}
</script>