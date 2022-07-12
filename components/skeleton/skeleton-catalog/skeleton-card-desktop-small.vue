<template>
	<div class="skeleton__item"
	     :class="{'grid__col-4':!slide, 'swiper-slide':slide}">
		<div class="skeleton__content"></div>
		<div class="skeleton__content"></div>
		<div class="skeleton__content skeleton__content--img"></div>
		<div class="skeleton__content"></div>
		<div class="skeleton__content skeleton__content--buttons"></div>
	</div>
</template>
<script>
export default {
	props: {
		slide: {
			type: Boolean,
			default: false
		}
	}
}
</script>