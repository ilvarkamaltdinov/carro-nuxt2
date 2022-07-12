<template>
	<div v-if="$device.isMobile" class="skeleton__item skeleton__item--s">
		<div class="skeleton__content skeleton__content--img"></div>
		<div class="skeleton__content skeleton__content--buttons"></div>
		<div class="skeleton__content skeleton__content--buttons"></div>
	</div>
	<div v-else class="skeleton__item"
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