<template>
	<div>
		<div v-if="loading" class="catalog__list" :class="{'grid grid--catalog': !$device.isMobile}">
			<component :is="skeleton" v-for="i in 4" :key="i"/>
		</div>
		<div v-else class="catalog__list">
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
			view: 'filters/filters/view',
			offers: 'filters/filters/offers',
			loading: 'filters/filters/loading',
		}),
		skeleton() {
			return this.view === 's' ? 'skeleton-card-small' : 'skeleton-card-large'
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