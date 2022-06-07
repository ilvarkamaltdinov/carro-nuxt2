<template>
	<section class="page-main__stories stories stories--desktop grid__col-8">
		<h2 class="visually-hidden">Акции и спецпредложения</h2>
		<div class="swiper swiper--stories">
			<ul class="stories__list swiper-wrapper">
				<stories-item-desktop :index="index+1"
				                      v-for="(item, index) in storiesItems"
				                      :key="index">
					{{ item }}
					{{index}}
				</stories-item-desktop>
			</ul>
		</div>
		<button ref="prev"
		        class="swiper-button swiper-button-prev">
			<svg-icon class="swiper-button__icon"
			          name="icon-arrow"></svg-icon>
		</button>
		<button ref="next"
		        class="swiper-button swiper-button-next">
			<svg-icon class="swiper-button__icon"
			          name="icon-arrow"></svg-icon>
		</button>
	</section>
</template>
<script>
import stories from "~/mixins/stories/stories";

export default {
	mixins: [stories]
}
</script>