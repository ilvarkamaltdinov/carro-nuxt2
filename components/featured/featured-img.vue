<template>
	<img :data-src="require(`~/assets/img/featured/featured-${img}@2x.png`)" v-lazy-load>
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