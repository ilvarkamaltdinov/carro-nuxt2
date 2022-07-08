<template>
	<li class="stories__item swiper-slide"
	    @click="$emit('click')">
		<div class="stories__figure">
			<img v-lazy-load :data-src="require(`~/assets/img/stories/stories-${stories.id}@2x.png`)"
			     alt="stories-image">
		</div>
		<div class="stories__text">
			{{stories.title}}
		</div>
	</li>
</template>
<script>
export default {
	props: {
		stories: Object
	}
}
</script>