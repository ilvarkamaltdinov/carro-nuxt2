<template>
	<picture>
		<source type="image/webp"
		        media="(min-width: 768px)"
		        :srcset="'./img/featured/featured-'+img+'@1x.webp 1x, ./img/featured/featured-'+img+'@2x.webp 2x'" />
		<source media="(min-width: 768px)"
		        :srcset="'./img/featured/featured-'+img+'@1x.png 1x, ./img/featured/featured-'+img+'@2x.png 2x'" />
		<img class="featured__img"
		     :src="'./img/featured/featured-'+img+'@1x.png'"
		     :srcset="'./img/featured/featured-'+img+'@2x.png 2x'"
		     loading="lazy"
		     alt="" />
	</picture>
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