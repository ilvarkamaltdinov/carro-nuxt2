<template>
	<div class="car__slider slider-car grid__col-12">
		<div class="swiper swiper--car">
			<div class="swiper-wrapper">
				<car-slider-item :src="img.medium" v-for="img in offer.images" :key="img.medium"/>
			</div>
		</div>
		<button class="swiper-button swiper-button-prev">
			<svg-icon class="swiper-button__icon" name="icon-arrow"/>
		</button>
		<button class="swiper-button swiper-button-next">
			<svg-icon class="swiper-button__icon" name="icon-arrow"/>
		</button>
	</div>
</template>
<script>

import {mapGetters} from "vuex";
import AOS from "aos";
let sliderCarSwiper
export default {
	computed:{
		...mapGetters({
			offer: 'catalog/catalog-cars/offer'
		})
	},
	destroyed() {
		console.log(swiper)
	},
	mounted() {
		new swiper.default('.car__slider .swiper', {
			modules: [swiper.Navigation, swiper.Pagination, swiper.Autoplay],
			loop: true,
			autoplayDisableOnInteraction: false,
			autoplay: false,
			slidesPerView: 2.1,
			centeredSlides: true,
			watchSlidesProgress: true,
			spaceBetween: 8,
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 24,
					centeredSlides: false,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				}
			}
		})
		//console.log(555555, 'aos is initing')
		AOS.init({
			once: true
		})
	}
}
</script>