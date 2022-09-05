<template>
	<div class="slider-car__item swiper-slide">
		<div class="slider-car__link"
		     data-fancybox="gallery"
		     :data-src="original"
		     tabindex="0">
			<img class="slider__car-img lazyload" :data-src="medium"/>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		src: String,
		original: String,
		medium: String
	}
}
</script>