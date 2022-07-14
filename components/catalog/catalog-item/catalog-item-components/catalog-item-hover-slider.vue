<template>
	<nuxt-link :to="`/${currentCategory}/${currentMark}/${currentFolder}/${currentId}`"
	           @click.native="$emit('linkClick')"
	           class="catalog__img brazzers-daddy">
		<img :src="coverSrc"
		     @load="onImgLoad"
		     :class="class_name"
		     alt="" />
		<div class="tmb-wrap">
			<div class="tmb-wrap-table"
			     @mouseleave="mouseLeave">
				<div v-if="photos && photos.length > 0 && index <= limit"
				     v-for="(photo, index) in photos"
				     :class="{'active':index === activeTmb}"
				     :key="index"
				     @mouseover="mouseOver(index, photo.thumb)">
				</div>
			</div>
		</div>
	</nuxt-link>
</template>
<script>
export default {
	data() {
		return {
			activeTmb: 0,
			class_name: 'load',
			isLoaded: false,
			limit: 7,
			photos: this.offer.images,
			forceCoverPhoto: null,
			placeholderUrl: this.offer.images[0].thumb
		}
	},
	props: {
		offer: Object,
	},
	computed: {
		coverSrc() {
			return this.forceCoverPhoto
					? this.forceCoverPhoto
					: this.photos.length > 0
							? this.photos[0].thumb
							: this.placeholderUrl;
		},
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
		}
	},
	methods: {
		onImgLoad() {
			this.class_name = 'loaded';
		},
		mouseOver(index, photo) {
			this.activeTmb = index
			if (this.forceCoverPhoto !== null) {
				this.class_name = 'load';
			}
			
			this.forceCoverPhoto = photo;
		},
		mouseLeave() {
			this.activeTmb = 0
			this.forceCoverPhoto = null;
			this.class_name = 'loaded';
		}
	}
}
</script>
<style scoped
       lang="scss">
img.load {
	filter: blur(5px);
	transition: filter .5s;
	will-change: filter;
}

img.loaded {
	filter: blur(0);
}
</style>