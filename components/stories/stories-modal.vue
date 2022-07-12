<template>
	<div class="stories stories--modal">
		<div class="stories__modal-wrap">
			<!--TODO кнопка закрытия сториз нужна ли? и если нужна сделать больше z-index-->
			<button class="stories__close"
			        @click="closeStories()">
				<svg-icon class="stories__close-icon"
				          name="icon-close-s" />
			</button>
			<div class="swiper swiper--progress swiper--stories-modal">
				<div class="swiper-pagination"></div>
				<div class="swiper-wrapper">
					<div class="swiper-slide"
					     v-for="story in stories"
					     :key="story.id">
						<div class="stories__modal">
							<div class="stories__offer">
								<h2 class="heading heading--h2">{{ story.title }}</h2>
								<p class="stories__modal-text"> {{ story.body }}</p>
							</div>
							<div class="stories__modal-img-wrap">
								<picture>
									<source media="(min-width: 768px)"
									        type="image/webp"
									        :data-srcset="story.image.medium_webp" />
									<source media="(min-width: 768px)"
									        :data-srcset="`${story.image.small} 1x, ${story.image.medium} 2x`" />
									<img class="stories__modal-img lazyload"
									     :data-src="`${story.image.small}`"
									     :data-srcset="`${story.image.medium_webp} 2x`"
									     alt="stories-image" />
								</picture>
							</div>
							<nuxt-link @click.native="buttonClick" :to="story.button_link"
							           class="button button--credit">
								{{ story.button_title }}
							</nuxt-link>
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
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
	computed: {
		...mapGetters({
			stories: 'stories/stories/stories'
		})
	},
	methods: {
		...mapActions({
			closeStories: 'stories/stories/closeStories'
		}),
		buttonClick(){
			this.closeStories()
		}
	},
	mounted() {
		const sliderStories = new swiper.default('.swiper--stories-modal.swiper', {
			modules: [swiper.Navigation, swiper.Autoplay],
			autoplayDisableOnInteraction: false,
			spaceBetween: 16,
			autoplay: false,
			watchSlidesProgress: true,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper--stories-modal .swiper-button-next',
				prevEl: '.swiper--stories-modal .swiper-button-prev',
			},
		});
	},
}
</script>