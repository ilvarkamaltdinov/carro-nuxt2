<template>
	<div class="catalog__img brazzers-daddy">
		<img :src="coverSrc"
		     @load="onImgLoad"
		     :class="class_name"
		     alt="" />
		<div class="tmb-wrap">
			<div class="tmb-wrap-table"
			     @mouseleave="mouseLeave">
				<div v-if="photos && photos.length > 0 && index <= limit"
				     v-for="(photo, index) in photos"
				     :key="index"
				     @mouseover="mouseOver(photo.thumb)">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			class_name: 'load',
			isLoaded: false,
			limit: 7,
			photos: this.images,
			forceCoverPhoto: null,
			placeholderUrl: this.images[0].thumb
		}
	},
	props: {
		images: {
			type: Array,
			default: () => []
		},
	},
	computed: {
		coverSrc() {
			return this.forceCoverPhoto
					? this.forceCoverPhoto
					: this.photos.length > 0
							? this.photos[0].thumb
							: this.placeholderUrl;
		}
	},
	methods: {
		onImgLoad() {
			this.class_name = 'loaded';
		},
		mouseOver(photo) {
			if (this.forceCoverPhoto !== null) {
				this.class_name = 'load';
			}
			
			this.forceCoverPhoto = photo;
		},
		mouseLeave() {
			this.forceCoverPhoto = null;
			this.class_name = 'loaded';
		}
	}
}
</script>
<style scoped lang="scss">
img.load {
	filter: blur(5px);
	transition: filter .5s;
	will-change: filter;
}
 img.loaded {
	filter: blur(0);
}
</style>