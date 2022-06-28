<template>
	<a class="catalog__img-link">
		<img :src="img" alt="image">
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