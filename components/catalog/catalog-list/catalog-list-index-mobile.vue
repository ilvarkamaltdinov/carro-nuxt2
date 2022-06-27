<template>
	<section class="page-main__catalog catalog grid__col-12">
		<heading-h2>Автомобили в наличии</heading-h2>
		<tabs-list />
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