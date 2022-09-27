<template>
	<div class="catalog__list">
		<div class="swiper swiper--catalog">
			<div class="swiper-wrapper">
				<catalog-item-small-desktop
						slide
						:key="offer.id"
						v-for="offer in offers"
						:offer="offer" />
			</div>
		</div>
		<button class="swiper-button swiper-button-prev">
			<svg-icon class="swiper-button__icon"
			          name="icon-arrow" />
		</button>
		<button class="swiper-button swiper-button-next">
			<svg-icon class="swiper-button__icon"
			          name="icon-arrow" />
		</button>
	</div>
</template>

<script>
export default {
	props: {
		offers: Array
	},
	mounted() {
		new swiper.default('.swiper--catalog.swiper', {
			modules: [swiper.Navigation, swiper.Autoplay],
			loop: false,
			// autoplayDisableOnInteraction: true,
			autoplay: false,
			slidesPerView: 3,
			initialSlide: 0,
			// centeredSlides: true,
			watchSlidesProgress: true,
			spaceBetween: 24,
			navigation: {
				nextEl: '.catalog__list .swiper-button-next',
				prevEl: '.catalog__list .swiper-button-prev',
			},
		});
	},
}
</script>