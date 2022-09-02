<template>
	<div class="swiper-slide">
		<a v-if="slide.telegram"
		   :href="settings['soc_telegram']"
		   :target="slide.target"
		   class="slider-index__item">
			<div class="slider-index__media-wrap">
				<div class="slider-index__media">
					<picture-slide classes="slider-index__media slider-index__media--element lazyload"
					               aos="fade-up"
					               :small="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@1x.png`)}`"
					               :small-webp="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@1x.webp`)}`"
					               :big="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@2x.png`)}`"
					               :big-webp="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@2x.webp`)}`" />
					
					<picture-slide classes="slider-index__media slider-index__media--car lazyload"
					               aos="fade-right"
					               :small="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@1x.png`)}`"
					               :small-webp="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@1x.webp`)}`"
					               :big="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@2x.png`)}`"
					               :big-webp="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@2x.webp`)}`" />
				</div>
			</div>
			<div class="slider-index__text-wrap">
				<div class="slider-index__circle"
				     data-aos="fade-up-left"
				     data-aos-duration="750"
				     data-aos-easing="ease-in-out"
				     data-aos-mirror="true"></div>
				<div class="slider-index__text">
					<div class="slider-index__heading">{{ slide.heading }}</div>
					<div class="slider-index__content">{{ slide.content }}</div>
				</div>
			</div>
		</a>
		<nuxt-link v-else
		           :to="slide.link"
		           class="slider-index__item">
			<div class="slider-index__media-wrap">
				<div class="slider-index__media">
					<picture-slide classes="slider-index__media slider-index__media--element lazyload"
					               aos="fade-up"
					               :small="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@1x.png`)}`"
					               :small-webp="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@1x.webp`)}`"
					               :big="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@2x.png`)}`"
					               :big-webp="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@2x.webp`)}`" />
					
					<picture-slide classes="slider-index__media slider-index__media--car lazyload"
					               aos="fade-right"
					               :small="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@1x.png`)}`"
					               :small-webp="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@1x.webp`)}`"
					               :big="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@2x.png`)}`"
					               :big-webp="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@2x.webp`)}`" />
				</div>
			</div>
			<div class="slider-index__text-wrap">
				<div class="slider-index__circle"
				     data-aos="fade-up-left"
				     data-aos-duration="750"
				     data-aos-easing="ease-in-out"
				     data-aos-mirror="true"></div>
				<div class="slider-index__text">
					<div class="slider-index__heading">{{ slide.heading }}</div>
					<div class="slider-index__content">{{ slide.content }}</div>
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
	computed: {
		...mapGetters({
			settings: 'settings/settings/settings'
		})
	}
}
</script>