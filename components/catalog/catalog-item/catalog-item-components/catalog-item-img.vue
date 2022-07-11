<template>
	<a class="catalog__img-link">
		<img class="lazyload" :data-src="img" alt="image">
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