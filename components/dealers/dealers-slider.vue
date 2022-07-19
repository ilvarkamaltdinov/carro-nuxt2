<template>
	<div class="dealer">
		<div class="swiper swiper--dealer dealer__slider"
		     v-if="images">
			<div class="swiper-wrapper">
				<div class="dealer__item swiper-slide"
				     v-for="(item, index) in images"
				     :key="index">
					<div class="dealer__link">
						<picture>
							<source type="image/webp"
							        media="(min-width: 768px)"
							        :data-srcset="`${item.small_webp} 1x, ${item.medium_webp} 2x`" />
							<img class="dealer__img lazyload"
							     :data-src="item.small"
							     :data-srcset="`${item.medium} 2x`"
							     loading="lazy"
							     alt="" />
						</picture>
					</div>
				</div>
			</div>
		</div>
		<button class="swiper-button swiper-button-prev">
			<svg-icon class="icon swiper-button__icon"
			          name="icon-arrow" />
		</button>
		<button class="swiper-button swiper-button-next">
			<svg-icon class="icon swiper-button__icon"
			          name="icon-arrow" />
		</button>
	</div>
</template>
<script>
import {mapActions} from "vuex";
import dealers from "@/apollo/queries/dealer/dealers";
import dealer from "@/apollo/queries/dealer/dealer";

export default {
	props: {
		images: Array
	},
	mounted() {
		const sliderStories = new swiper.default('.dealer .swiper', {
			modules: [swiper.Navigation, swiper.Pagination, swiper.Autoplay],
			loop: true,
			autoplayDisableOnInteraction: false,
			autoplay: true,
			slidesPerView: 1.1,
			centeredSlides: true,
			spaceBetween: 8,
			navigation: {
				nextEl: '.dealer .swiper-button-next',
				prevEl: '.dealer .swiper-button-prev',
			},
			breakpoints: {
				768: {
					spaceBetween: 24,
				}
			}
		});
	},
}
</script>