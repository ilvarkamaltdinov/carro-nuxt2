<template>
	<div @click="$emit('click')" class="catalog__img-link">
		<img class="lazyload" :data-src="img" alt="image">
	</div>
</template>
<script>
export default {
	props: {
		img: String,
	}
}
</script>