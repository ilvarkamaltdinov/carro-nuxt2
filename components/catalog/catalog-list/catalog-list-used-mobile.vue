<template>
	<div>
		<component :is="skeleton"
		           v-if="loading" />
		<div v-else
		     class="catalog__list">
			<component :is="catalog"
			           :offer="offer"
			           :key="offer.id"
			           v-for="offer in offers_list" />
		</div>
	</div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			view: 'catalog/catalog-cars/view',
			offers: 'filters/filters/offers',
			loading: 'filters/filters/loading',
		}),
		skeleton() {
			return this.view === 's' ? 'skeleton-catalog-small' : 'skeleton-catalog-large'
		},
		catalog() {
			return this.view === 's' ? 'catalog-item-small-mobile' : 'catalog-item-large-mobile'
		},
		offers_list() {
			return this.offers ? this.offers.data : []
		}
	}
}
</script>