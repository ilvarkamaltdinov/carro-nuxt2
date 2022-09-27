<template>
	<li class="stories__item"
	    :class="{'swiper-slide': !$device.isMobile}"
	    @click="$emit('click')">
		<div class="stories__figure">
			<picture-component classes="stories__img lazyload"
			                   lazy
			                   :small="story.image.xs"
			                   :small-webp="story.image.xs_webp"
			                   :big="story.image.tiny"
			                   :big-webp="story.image.tiny_webp" />
		</div>
		<div class="stories__text">
			{{ story.title }}
		</div>
	</li>
</template>
<script>
const PictureComponent = () => import('@/components/picture/picture-component')
export default {
	components: {PictureComponent},
	props: {
		story: Object
	}
}
</script>