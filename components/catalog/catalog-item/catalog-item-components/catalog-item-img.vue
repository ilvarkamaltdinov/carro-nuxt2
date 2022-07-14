<template>
	<nuxt-link :to="`/${currentCategory}/${currentMark}/${currentFolder}/${currentId}`" class="catalog__img-link">
		<img class="lazyload" :data-src="offer.images[0].thumb" alt="image">
	</nuxt-link>
</template>
<script>
export default {
	props: {
		offer: Object,
	},
	computed: {
		currentCategory() {
			return this.offer.category_enum
		},
		currentMark() {
			return this.offer.mark.slug
		},
		currentFolder() {
			return this.offer.folder.slug
		},
		currentId() {
			return this.offer.external_id
		},
	},
}
</script>