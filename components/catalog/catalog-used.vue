<template>
	<section class="page-main__catalog catalog grid">
		<div class="heading-group heading-group--h1 grid__col-12">
			<div class="heading-group__wrap">
				<!--<h3 style="position: fixed; padding: 8px; top: 160px; left: 24px; z-index: 1000; background: #fff; border:2px solid black">-->
				<!--	{{ path }}-->
				<!--</h3>-->
				<!--<br />-->
				<h1 class="heading heading--h1">{{ currentHeading }}</h1>
				<span class="heading-group__label">121212 автомобиля в наличии</span>
			</div>
		</div>
		<div class="grid__col-4">
			<filter-desktop />
		</div>
		<div class="grid__col-8">
			<filter-sort />
			<component :is="isMobile ? 'catalog-list-used-mobile' : 'catalog-list-used-desktop'" />
			<button-more>Показать больше</button-more>
			<pagination />
		</div>
	</section>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
import capitalizeFirstLetter from "@/mixins/capitalizeFirstLetter";
import catalogButtonEvents from "~/mixins/catalog/catalog-button-events";

export default {
	mixins: [capitalizeFirstLetter, catalogButtonEvents],
	data() {
		return {
			sort: 'price|asc'
		}
	},
	mounted() {
		if (!this.isClick) {
			this.setAllChosen({})
			this.getFilters('changeUrl')
		}
	},
	methods: {
		...mapActions({
			getFilters: 'filters/filters/getFilters',
		}),
		...mapMutations({
			setAllChosen: 'filters/filters/SET_ALL_CHOSEN'
		})
	},
	computed: {
		...mapGetters({
			isMobile: 'isMobile',
			isClick: 'filters/filters/isClick'
		}),
		// path() {
		// 	return this.$route.fullPath
		// },
		currentHeading() {
			if (this.$route.params.mark) {
				return this.capitalizeFirstLetter(this.$route.params.mark) + ' с пробегом'
			}
			return 'Автомобили с пробегом'
		},
	}
}
</script>