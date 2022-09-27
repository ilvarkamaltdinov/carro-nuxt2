<template>
	<picture-component
			classes="featured__img lazyload"
			:small="`${require(`~/assets/img/featured/featured-${img}@1x.png`)}`"
			:small-webp="`${require(`~/assets/img/featured/featured-${img}@1x.webp`)}`"
			:big="`${require(`~/assets/img/featured/featured-${img}@2x.png`)}`"
			:big-webp="`${require(`~/assets/img/featured/featured-${img}@2x.webp`)}`" />
</template>
<script>
const pictureComponent = () => import('@/components/picture/picture-component')
export default {
	components: {pictureComponent},
	props: {
		img: {
			type: String,
			default: ''
		}
	}
}
</script>