<template>
	<li class="stories__item"
	    :class="{'swiper-slide': !$device.isMobile}"
	    @click="$emit('click')">
		<div class="stories__figure">
			<picture>
				<source media="(min-width: 768px)"
				        type="image/webp"
				        :data-srcset="story.image.thumb_webp" />
				<source media="(min-width: 768px)"
				        :data-srcset="`${story.image.tiny} 1x, ${story.image.thumb} 2x`" />
				<img class="stories__img lazyload"
				     :data-src="`${story.image.tiny}`"
				     :data-srcset="`${story.image.thumb_webp} 2x`"
				     alt="stories-image" />
			</picture>
		</div>
		<div class="stories__text">
			{{story.title}}
		</div>
	</li>
</template>
<script>

export default {
	props: {
		story: Object
	}
}
</script>