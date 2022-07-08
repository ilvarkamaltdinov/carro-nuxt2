<template>
	<div class="stories stories--modal">
		<div class="stories__modal-wrap">
			
			<!--TODO кнопка закрытия сториз нужна ли? и если нужна сделать больше z-index-->
			<button class="stories__close" @click="closeStories">
				<svg-icon class="stories__close-icon"
				          name="icon-close-s"/>
			</button>
			<div class="swiper swiper--progress swiper--stories-modal">
				<div class="swiper-pagination"></div>
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in stories" :key="item.id">
						<div class="stories__modal">
							<div class="stories__offer">
								<h2 class="heading heading--h2">{{item.title}}</h2>
								<p class="stories__modal-text">{{item.text}}</p>
							</div>
							<div class="stories__modal-img-wrap">
								<img :src="require(`~/assets/img/stories/stories-modal/stories-modal-${item.img}@1x.png`)"
								     alt="stories-img">
							</div>
							<button-typical :text="item.button.text" class="button--link button--more"/>
						</div>
					</div>
				</div>
				<button class="swiper-button swiper-button-prev">
					<svg-icon class="swiper-button__icon"
					          name="icon-arrow"></svg-icon>
				</button>
				<button class="swiper-button swiper-button-next">
					<svg-icon class="swiper-button__icon"
					          name="icon-arrow"></svg-icon>
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
	computed:{
		...mapGetters({
			stories:'stories/stories/stories'
		})
	},
	methods: {
		...mapActions({
			closeStories: 'stories/stories/closeStories'
		})
	},
	mounted() {
		const sliderStories = new swiper.default('.stories__modal-wrap .swiper', {
			modules: [swiper.Navigation, swiper.Autoplay],
			loop: true,
			autoplayDisableOnInteraction: false,
			spaceBetween: 16,
			autoplay: false,
			watchSlidesProgress: true,
			slidesPerView: 1,
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: 'true',
			// 	type: 'bullets',
			// 	renderBullet: function (index, className) {
			// 		return '<span class="' + className + '">' + '<span class="swiper-pagination-bar"></span>' + '<span class="swiper-pagination-progress"></span>' + '</span>';
			// 	},
			// },
			navigation: {
				nextEl: '.stories__modal-wrap .swiper-button-next',
				prevEl: '.stories__modal-wrap .swiper-button-prev',
			},
		});
	},
}
</script>
<style scoped lang="scss">
	.stories__close{
		z-index: 20;
	}
</style>