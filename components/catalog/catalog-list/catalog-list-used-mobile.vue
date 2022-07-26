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
		<button-typical @click="moreOffers" text="Показать больше" class="button--link button--more"/>
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
			return this.view === 's' ?'skeleton-card-large' : 'skeleton-card-small'
		},
		catalog() {
			return this.view === 's' ? 'catalog-item-large-mobile' : 'catalog-item-small-mobile'
		},
		offers_list() {
			return this.offers ? this.offers.data : []
		}
	},
	methods:{
		moreOffers(){
			this.$apollo.queries.offers.fetchMore({
				variables: {
					page: this.currentPagination + 1
				},
				updateQuery: (previousResult, {fetchMoreResult}) => {
					if (!fetchMoreResult) {
						return previousResult
					}
					const newOffers = fetchMoreResult.offers.data;
					const current_page = fetchMoreResult.offers.current_page;
					//this.currentPagination += 1;
					const last_page = fetchMoreResult.offers.last_page;
					return {
						offers: {
							__typename: previousResult.offers.__typename,
							data: [...previousResult.offers.data, ...newOffers],
							current_page,
							last_page
						}
					}
				}
			})
		}
	}
}
</script>