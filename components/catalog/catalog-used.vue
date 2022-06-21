<template>
	<div class="grid grid--container">
		<section class="page-main__catalog catalog grid">
			<div class="heading-group heading-group--h1 grid__col-12">
				<div class="heading-group__wrap">
					<h1 class="heading heading--h1">Автомобили с пробегом</h1>
					<!--<span class="heading-group__label">121212 автомобиля в наличии</span>-->
				</div>
			</div>
			<div class="grid__col-4">
				<filter-desktop />
			</div>
			<div class="grid__col-8">
				<filter-sort />
				<component :is="isMobile ? 'catalog-list-used-mobile' : 'catalog-list-used-desktop'" />
				<!--<button-more>Показать больше</button-more>-->
				<!--<pagination />-->
			</div>
		</section>
	</div>
</template>
<script>
import {mapGetters} from "vuex"
import capitalizeFirstLetter from "~/mixins/capitalizeFirstLetter";

export default {
	mixins: [capitalizeFirstLetter],
	computed: {
		...mapGetters({
			isMobile: 'isMobile',
		}),
		// currentHeading() {
		// 	if (this.$route.params.mark) {
		// 		return this.capitalizeFirstLetter(this.$route.params.mark) + ' с пробегом'
		// 	}
		// 	return 'Автомобили с пробегом'
		// },
	}
}
</script>
