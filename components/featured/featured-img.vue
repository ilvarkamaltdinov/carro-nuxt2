<template>
	<picture>
		<source type="image/webp"
		        media="(min-width: 768px)"
		        :srcset="'~/assets/img/featured/featured-'+img+'@1x.webp 1x, ~/assets/img/featured/featured-'+img+'@2x.webp 2x'" />
		<source media="(min-width: 768px)"
		        :srcset="'~/assets/img/featured/featured-'+img+'@1x.png 1x, ~/assets/img/featured/featured-'+img+'@2x.png 2x'" />
		<img class="featured__img"
		     :src="'~/assets/img/featured/featured-'+img+'@1x.png'"
		     :srcset="'~/assets/img/featured/featured-'+img+'@2x.png 2x'"
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