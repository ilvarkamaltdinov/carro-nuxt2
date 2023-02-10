<template>
	<div class="swiper swiper--article">
		<div class="swiper-wrapper">
			<div class="swiper-slide"
			     v-for="(img, index) in images"
			     :key="index">
				<img :data-src="`${img.src}`" data-fancybox="gallery" class="lazyload"
				     alt="slider-image">
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
import AOS from "aos";

export default {
	props: {
		images: Array
	},
	mounted() {
		const sliderIndexSwiper = new swiper.default(".swiper--article", {
			modules: [swiper.Navigation, swiper.Pagination, swiper.Autoplay],
			loop: false,
			autoplayDisableOnInteraction: false,
			autoplay: true,
			slidesPerView: 1,
			autoHeight: true,
			watchSlidesProgress: true,
			scrollbar: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: "true",
				type: "bullets"
			},
		});
	},
}
</script>