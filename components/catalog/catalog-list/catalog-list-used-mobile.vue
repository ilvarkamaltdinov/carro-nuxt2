<template>
	<div ref="catalog">
		<div v-if="loading"
		     class="catalog__list"
		     :class="{'grid grid--catalog': !$device.isMobile}">
			<component :is="skeleton"
			           v-for="i in 16"
			           :key="i" />
		</div>
		<div class="catalog__list grid grid--catalog"
		     v-else>
			<component :is="catalog"
			           :offer="offer"
			           :key="offer.id"
			           v-for="offer in moreOffersData.data" />
			<div class="grid--container">
				<button v-if="$device.isMobile && offers.has_more_pages"
				        @click="paginationClick('button')"
				        class="button button--link button--more">Далее
				</button>
			</div>
			<client-only>
				<pagination @click="paginationClick('pagination')"
				            :active-button="Number(offers.current_page)"
				            v-if="$device.isMobile"
				            :offers="offers" />
			</client-only>
		</div>
	</div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import offers from "@/apollo/queries/offer/offers";

export default {
	data() {
		return {
			limit: 8,
			infiniteId: +new Date(),
		}
	},
	watch: {
		sort() {
			this.infiniteId += 1
		}
	},
	computed: {
		...mapGetters({
			view: 'filters/filters/view',
			offers: 'filters/filters/offers',
			loading: 'filters/filters/loading',
			sort: 'filters/filters/sort',
			generationClick: 'click/generationClick'
		}),
		moreOffersData() {
			return this.offers
		},
		skeleton() {
			if (this.$device.isTablet) {
				return this.view === 's' ? 'skeleton-card-small' : 'skeleton-card-large'
			} else {
				return this.view === 's' ? 'skeleton-card-large' : 'skeleton-card-small'
			}
		},
		catalog() {
			if (this.$device.isTablet) {
				return this.view === 's' ? 'catalog-item-large-mobile' : 'catalog-item-large-desktop'
			} else {
				return this.view === 's' ? 'catalog-item-large-mobile' : 'catalog-item-small-mobile'
			}
		}
	},
	async mounted() {
		if (this.generationClick) {
			await this.scrollToCatalog()
			await this.setGenerationClick(false)
		}
	},
	methods: {
		...mapMutations({
			setGenerationClick: 'click/SET_GENERATION_CLICK'
		}),
		scrollToCatalog() {
			setTimeout(() => {
				let catalog = this.$refs.catalog;
				catalog.scrollIntoView(true);
				const yourHeight = 105 + 81; // header + filter
				const scrolledY = window.scrollY;
				window.scroll(0, scrolledY - yourHeight);
			},100)
		},
		async paginationClick(type) {
			let page = this.offers.current_page + 1
			if (type === 'button') {
				await this.$router.push({path: this.$route.fullPath, query: {page}});
			}
			this.scrollToCatalog()
		}
	}
}
</script>
