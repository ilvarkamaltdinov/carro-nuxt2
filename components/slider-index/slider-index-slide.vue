<template>
	
	<div class="swiper-slide">
		<a class="slider-index__item"
		   href="">
			<div class="slider-index__media-wrap">
				<div class="slider-index__media">
					<nuxt-picture quality="100" :imgAttrs="{class:'slider-index__media slider-index__media--element'}" :src="`img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@2x.png`"/>
					<nuxt-picture quality="100" :imgAttrs="{class:'slider-index__media slider-index__media--car'}" :src="`img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@2x.png`"/>
				</div>
			</div>
			<div class="slider-index__text-wrap">
				<div class="slider-index__circle"
				     data-aos="fade-up-left"
				     data-aos-duration="750"
				     data-aos-easing="ease-in-out"
				     data-aos-mirror="true"></div>
				<div class="slider-index__text">
					<div class="slider-index__heading"
					     v-html="slide.heading"></div>
					<div class="slider-index__content"
					     v-html="slide.content"></div>
				</div>
			</div>
		</a>
	</div>
</template>
<script>
export default {
	props: {
		slide: Object
	}
}
</script>