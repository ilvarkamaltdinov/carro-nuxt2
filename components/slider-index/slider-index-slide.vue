<template>
	<div class="swiper-slide">
		<a v-if="slide.telegram"
		   :href="settings['soc_telegram']"
		   :target="slide.target"
		   class="slider-index__item">
			<div class="slider-index__media-wrap">
				<div class="slider-index__media">
					<picture-slide
							:small="slide.image_element.thumb"
							:smallWebp="slide.image_element.thumb_webp"
							:big="slide.image_element.small"
							:bigWebp="slide.image_element.small_webp"
							:classses="'slider-index__media slider-index__media--element lazyload'"
					/>
					<picture-slide
							:small="slide.image.slide_1x"
							:smallWebp="slide.image.slide_1x_webp"
							:big="slide.image.slide_2x"
							:bigWebp="slide.image.slide_2x_webp"
							:classses="'slider-index__media slider-index__media--car lazyload'"
					/>
				</div>
			</div>
			<div class="slider-index__text-wrap">
				<div class="slider-index__circle"
				     data-aos="fade-up-left"
				     data-aos-duration="750"
				     data-aos-easing="ease-in-out"
				     data-aos-mirror="true"></div>
				<div class="slider-index__text">
					<div class="slider-index__heading">{{ slide.title }}</div>
					<div class="slider-index__content">{{ slide.body }}</div>
				</div>
			</div>
		</a>
		<nuxt-link v-else
		           :to="slide.link"
		           class="slider-index__item">
			<div class="slider-index__media-wrap">
				<div class="slider-index__media">
					<picture-slide
							:small="slide.image_element.thumb"
							:smallWebp="slide.image_element.thumb_webp"
							:big="slide.image_element.small"
							:bigWebp="slide.image_element.small_webp"
							:classes="'slider-index__media slider-index__media--element lazyload'"
					/>
					<picture-slide
							:small="slide.image.slide_1x"
							:smallWebp="slide.image.slide_1x_webp"
							:big="slide.image.slide_2x"
							:bigWebp="slide.image.slide_2x_webp"
							:classes="'slider-index__media slider-index__media--car lazyload'"
					/>
				</div>
			</div>
			<div class="slider-index__text-wrap">
				<div class="slider-index__circle"
				     data-aos="fade-up-left"
				     data-aos-duration="750"
				     data-aos-easing="ease-in-out"
				     data-aos-mirror="true"></div>
				<div class="slider-index__text">
					<div class="slider-index__heading">{{ slide.title }}</div>
					<div class="slider-index__content">{{ slide.body }}</div>
				</div>
			</div>
		</nuxt-link>
	</div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	props: {
		slide: Object
	},
	mounted() {
		console.log(this.slide)
	},
	computed: {
		...mapGetters({
			settings: 'settings/settings/settings'
		})
	}
}
</script>