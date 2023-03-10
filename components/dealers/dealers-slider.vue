<template>
	<div class="dealer">
		<div class="swiper swiper--dealer dealer__slider"
		     v-if="images">
			<div class="swiper-wrapper">
				<div class="dealer__item swiper-slide"
				     v-for="(item, index) in images"
				     :key="index">
					<div class="dealer__link">
						<picture-component
								classes="dealer__img lazyload"
								:small="item.small | replaceApiUrl(api)"
								:small-webp="item.small_webp | replaceApiUrl(api)"
								:big="item.medium | replaceApiUrl(api)"
								:big-webp="item.medium_webp | replaceApiUrl(api)" />
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
import {mapActions, mapGetters} from "vuex";
import dealers from "@/apollo/queries/dealer/dealers";
import dealer from "@/apollo/queries/dealer/dealer";
import filters from "~/mixins/filters";

export default {
	mixins: [
		filters
	],
	props: {
		images: Array
	},
	computed: {
		...mapGetters({
			siteId: 'site_id',
			api: 'api'
		}),
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