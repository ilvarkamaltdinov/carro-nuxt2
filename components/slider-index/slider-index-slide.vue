<template lang="pug">
	.swiper-slide
		a.slider-index__item(href="")
			.slider-index__media-wrap
				.slider-index__media
					picture
						source(type="image/webp" media="(min-width: 768px)" :srcset="'img/slider-index/slider-index-'+ slide.id +'/slider-index-element-'+ slide.id +'@1x.webp 1x, img/slider-index/slider-index-'+ slide.id +'/slider-index-element-'+ slide.id +'@2x.webp 2x'")
						source(media="(min-width: 768px)" :srcset="'img/slider-index/slider-index-'+ slide.id +'/slider-index-element-'+ slide.id +'@1x.jpg 1x, img/slider-index/slider-index-'+ slide.id +'/slider-index-element-'+ slide.id +'@2x.jpg 2x'")
						source(type="image/webp" :srcset="'img/slider-index/slider-index-'+ slide.id +'/slider-index-element-'+ slide.id +'@1x.webp 1x, img/slider-index/slider-index-'+ slide.id +'/slider-index-element-'+ slide.id +'@2x.webp 2x'")
						img.slider-index__media.slider-index__media--element(:src="'img/slider-index/slider-index-'+ slide.id +'/slider-index-element-'+ slide.id +'.png' " loading="lazy" alt='' data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-mirror="true")
					
					picture
						source(type="image/webp" media="(min-width: 768px)" :srcset="'img/slider-index/slider-index-'+ slide.id +'/slider-index-car-'+ slide.id +'@1x.webp 1x, img/slider-index/slider-index-'+ slide.id +'/slider-index-car-'+ slide.id +'@2x.webp 2x'")
						source(media="(min-width: 768px)" :srcset="'img/slider-index/slider-index-'+ slide.id +'/slider-index-car-'+ slide.id +'@1x.jpg 1x, img/slider-index/slider-index-'+ slide.id +'/slider-index-car-'+ slide.id +'@2x.jpg 2x'")
						source(type="image/webp" :srcset="'img/slider-index/slider-index-'+ slide.id +'/slider-index-car-'+ slide.id +'@1x.webp 1x, img/slider-index/slider-index-'+ slide.id +'/slider-index-car-'+ slide.id +'@2x.webp 2x'")
						img.slider-index__media.slider-index__media--car(:src="'img/slider-index/slider-index-'+ slide.id +'/slider-index-car-'+ slide.id +'.png'" loading="lazy" alt='' data-aos="fade-right" data-aos-duration="750" data-aos-easing="ease-in-out" data-aos-mirror="true")
			
			.slider-index__text-wrap
				.slider-index__circle(
					data-aos="fade-up-left"
					data-aos-duration="750"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
				)
				.slider-index__text
					.slider-index__heading(v-html="slide.heading")
					.slider-index__content(v-html="slide.content")
</template>
<script>
export default {
	props: {
		slide: Object
	}
}
</script>