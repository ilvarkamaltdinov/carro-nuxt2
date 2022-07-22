<template>
	<a :href="url" @click.prevent="$emit('click')" class="catalog__img-link">
		<img class="lazyload" :data-src="img" alt="image">
	</a>
</template>
<script>
export default {
	props: {
		url: String,
		img: String,
	}
}
</script>