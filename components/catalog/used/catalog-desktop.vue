<template>
	<section class="page-main__catalog catalog grid">
		<div class="heading-group heading-group--h1 grid__col-12">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">{{ currentHeading }}</h1>
				<span class="heading-group__label">121212 автомобиля в наличии</span>
			</div>
		</div>
		<div class="grid__col-4" v-if="desktop">
			<filter-desktop />
		</div>
		<div class="grid__col-8">
			<filter-sort />
			<div class="catalog__list grid grid--catalog"
			     v-if="loading">
				<skeleton-item v-for="i in 8"
				               :key="i" />
			</div>
			<div class="catalog__list grid grid--catalog"
			     v-else>
				<catalog-item grid-four
				              :info="item"
				              v-for="item in offersList"
				              :key="item.id">
					<template v-slot:buttons>
						<catalog-item-buttons :active-like="likesArray.some(id => id === String(item.id))"
						                      @creditClick="creditClick(item)"
						                      @favoriteClick="favoriteClick(item)"
						                      @callClick="callClick(item)" />
					</template>
				</catalog-item>
			</div>
			<button-more>Показать больше</button-more>
			<pagination />
		</div>
	</section>
</template>
<script>
import {mapActions, mapGetters} from "vuex"
import capitalizeFirstLetter from "@/mixins/capitalizeFirstLetter";
import catalogButtonEvents from "~/mixins/catalog/catalog-button-events";

export default {
	mixins: [capitalizeFirstLetter, catalogButtonEvents],
	data() {
		return {
			desktop: false,
			sort: 'price|asc'
		}
	},
	async mounted() {
		await this.clearFilters()
		await this.getFilters()
		window.innerWidth < 1200 ?
				this.desktop = false
				:this.desktop = true
	},
	methods: {
		...mapActions({
			getFilters: 'filters/filters/getFilters',
			clearFilters: 'filters/filters/clearFilters'
		})
	},
	computed: {
		...mapGetters({
			offers: 'filters/filters/offers',
			loading: 'filters/filters/loading',
			likesArray: 'favorite/favorite/likesArray'
		}),
		offersList() {
			return this.offers ? this.offers.data : []
		},
		currentHeading() {
			if (this.$route.params.mark) {
				return this.capitalizeFirstLetter(this.$route.params.mark) + ' с пробегом'
			}
			return 'Автомобили с пробегом'
		},
	}
}
</script>