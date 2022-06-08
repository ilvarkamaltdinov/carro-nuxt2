<template>
	
	<div class="slider-car__item swiper-slide">
		<a class="slider-car__link"
		   data-fancybox="gallery"
		   :href="src"
		   tabindex="0">
			<picture>
				<source type="image/webp"
				        media="(min-width: 768px)"
				       
				        :srcset="src" />
				<source media="(min-width: 768px)"
				        :srcset="src" />
				<img class="slider__car-img"
				     :src="src"
				     :srcset="src"
				     loading="lazy"
				     alt="" />
			</picture>
		</a>
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