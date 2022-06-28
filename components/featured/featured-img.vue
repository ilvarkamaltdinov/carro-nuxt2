<template>
	<nuxt-picture quality="100" :imgAttrs="{class:'featured__img'}" :src="`img/featured/featured-${img}@2x.png`"/>
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