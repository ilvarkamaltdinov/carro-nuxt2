<template>
	<a :href="isForm ? '' : url" @click.prevent="$emit('click')" class="catalog__img brazzers-daddy">
		<img :data-src="coverSrc"
		     @load="onImgLoad"
		     class="lazyload"
		     :class="class_name"
		     alt=""/>
		<div class="tmb-wrap">
			<div class="tmb-wrap-table"
			     @mouseleave="mouseLeave">
				<div v-if="photos && photos.length > 0 && index <= limit"
				     v-for="(photo, index) in photos"
				     :class="{'active':index === activeTmb}"
				     :key="index"
				     @mouseover="mouseOver(index, photo.small_webp)">
				</div>
			</div>
		</div>
	</a>
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
			placeholderUrl: this.offer.images[0].small_webp
		}
	},
	props: {
		isForm: {
			type: Boolean,
			default: false
		},
		url: String,
		offer: Object,
	},
	computed: {
		coverSrc() {
			return this.forceCoverPhoto
					? this.forceCoverPhoto
					: this.photos.length > 0
							? this.photos[0].small_webp
							: this.placeholderUrl;
		},
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
