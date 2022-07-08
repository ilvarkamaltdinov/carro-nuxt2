<template>
	<picture>
		<source type="image/webp"
		        media="(min-width: 768px)"
		        :data-srcset="`${require(`~/assets/img/featured/featured-${img}@1x.webp`)} 1x, ${require(`~/assets/img/featured/featured-${img}@2x.webp`)} 2x`" />
		<source media="(min-width: 768px)"
		        :data-srcset="`${require(`~/assets/img/featured/featured-${img}@1x.png`)} 1x, ${require(`~/assets/img/featured/featured-${img}@2x.png`)} 2x`" />
		<img class="featured__img lazyload"
		     :data-src="require(`~/assets/img/featured/featured-${img}@1x.png`)"
		     :data-srcset="`${require(`~/assets/img/featured/featured-${img}@2x.png`)} 2x`"
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