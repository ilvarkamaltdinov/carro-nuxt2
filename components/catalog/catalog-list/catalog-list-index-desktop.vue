<template>
	<section class="page-main__catalog catalog catalog--slider grid__col-12">
		<heading-h2>Автомобили в наличии</heading-h2>
		<tabs-list />
		<div class="catalog__list">
			<div class="swiper swiper--catalog">
				<div class="swiper-wrapper">
					<catalog-item-small-desktop
							slide
							:key="offer.id"
							v-for="offer in offers_list"
							:offer="offer" />
				</div>
			</div>
			<button class="swiper-button swiper-button-prev">
				<svg-icon class="swiper-button__icon"
				          name="icon-arrow"></svg-icon>
			</button>
			<button class="swiper-button swiper-button-next">
				<svg-icon class="swiper-button__icon"
				          name="icon-arrow"></svg-icon>
			</button>
		</div>
		<!--<button-more @click.native="toCatalog">Все автомобили</button-more>-->
	</section>

</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			offers: 'filters/filters/offers',
		}),
		offers_list() {
			return this.offers.data
		}
	},
	async mounted() {
		let sliderCatalog = await new swiper.default('.catalog--slider .swiper', {
			modules: [swiper.Navigation, swiper.Autoplay],
			loop: false,
			autoplayDisableOnInteraction: true,
			autoplay: false,
			slidesPerView: 3,
			initialSlide: 1,
			centeredSlides: true,
			watchSlidesProgress: true,
			spaceBetween: 24,
			navigation: {
				nextEl: '.catalog--slider .swiper-button-next',
				prevEl: '.catalog--slider .swiper-button-prev',
			},
		});
	},
}
</script>