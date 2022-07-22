<template>
	<div class="slider-car__item swiper-slide">
		<div class="slider-car__link"
		   data-fancybox="gallery"
		   :data-src="src"
		   tabindex="0">
			<picture>
				<source type="image/webp"
				        media="(min-width: 768px)"
				        :data-srcset="src" />
				<source media="(min-width: 768px)"
				        :data-srcset="src" />
				<img class="slider__car-img lazyload"
				     :data-src="src"
				     :data-srcset="src"
				     alt="" />
			</picture>
		</div>
	</div>
</template>
<script>
 export default {
	 props: {
		 src: {
			 type: String,
			 default: ''
		 }
	 }
 }
</script>