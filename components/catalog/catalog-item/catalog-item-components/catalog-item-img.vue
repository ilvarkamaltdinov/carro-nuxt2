<template>
	<a class="catalog__img-link">
		<!--<picture>-->
		<!--	<source type="image/webp"-->
		<!--	        media="(min-width: 768px)"-->
		<!--	        :srcset="img" />-->
		<!--	<source media="(min-width: 768px)"-->
		<!--	        :srcset="img" />-->
		<!--	<img class="lazyload"-->
		<!--	     :src="img"-->
		<!--	     :srcset="img"-->
		<!--	     alt="" />-->
		<!--</picture>-->
		<nuxt-picture :src="img"/>
	</a>
</template>
<script>
export default {
	props: {
		img: {
			type: String,
			default: ''
		}
	}
}
</script>