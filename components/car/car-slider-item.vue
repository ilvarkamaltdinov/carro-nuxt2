<template>
	<div class="slider-car__item swiper-slide">
		<div class="slider-car__link"
		     data-fancybox="gallery"
		     :data-src="original"
		     tabindex="0">
			<picture>
				<source type="image/webp"
				        media="(min-width: 768px)"
				        :data-srcset="src" />
				<source media="(min-width: 768px)"
				        :data-srcset="src" />
				<img class="slider__car-img lazyload"
				     :data-src="medium"
				     :data-srcset="medium"
				     alt="" />
			</picture>
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