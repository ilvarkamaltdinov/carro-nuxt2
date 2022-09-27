<template>
	<a v-if="hasFancy"
	   data-fancybox="gallery"
	   :data-src="original"
	   class="catalog__img-link">
		<img class="lazyload"
		     :data-src="img"
		     loading="lazy"
		     alt="image">
	</a>
	<a v-else
	   :href="url"
	   @click.prevent="$emit('click')"
	   class="catalog__img-link">
		<img class="lazyload"
		     :data-src="img"
		     loading="lazy"
		     alt="image">
	</a>
</template>
<script>
export default {
	props: {
		hasFancy: {
			type: Boolean,
			default: false
		},
		isForm: {
			type: Boolean,
			default: false
		},
		url: String,
		original: String,
		img: String,
	}
}
</script>