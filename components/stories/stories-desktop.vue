<template>
	<section class="page-main__stories stories stories--desktop grid__col-8">
		<h2 class="visually-hidden">Акции и спецпредложения</h2>
		<div class="swiper swiper--stories">
			<ul class="stories__list swiper-wrapper">
				<stories-item-desktop :stories="item"
				                      @click="openStories(item.stories)"
				                      v-for="item in stories"
				                      :key="item.id" />
			</ul>
		</div>
		<button ref="prev"
		        class="swiper-button swiper-button-prev">
			<svg-icon class="swiper-button__icon"
			          name="icon-arrow" />
		</button>
		<button ref="next"
		        class="swiper-button swiper-button-next">
			<svg-icon class="swiper-button__icon"
			          name="icon-arrow" />
		</button>
	</section>
</template>
<script>
import stories from "~/mixins/stories/stories";

export default {
	mixins: [stories]
}
</script>