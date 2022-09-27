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
								<picture-component
										classes="stories__modal-img lazyload"
										:small="story.image.small"
										:small-webp="story.image.small_webp"
										:big="story.image.medium"
										:big-webp="story.image.medium_webp" />
							</div>
							<nuxt-link @click.native="buttonClick"
							           :to="story.button_link"
							           class="button button--credit">
								{{ story.button_title }}
							</nuxt-link>
						</div>
					</div>
				</div>
				<button class="swiper-button swiper-button-prev">
					<svg-icon class="swiper-button__icon"
					          name="icon-arrow" />
				</button>
				<button class="swiper-button swiper-button-next">
					<svg-icon class="swiper-button__icon"
					          name="icon-arrow" />
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

const PictureComponent = () => import('@/components/picture/picture-component')
export default {
	components: {PictureComponent},
	computed: {
		...mapGetters({
			stories: 'stories/stories/stories'
		})
	},
	methods: {
		...mapActions({
			closeStories: 'stories/stories/closeStories'
		}),
		buttonClick() {
			this.closeStories()
		},
		test() {
			console.log('esc')
		}
	},
	mounted() {
		const sliderStories = new swiper.default('.swiper--stories-modal.swiper', {
			modules: [swiper.Navigation, swiper.Pagination, swiper.Autoplay],
			autoplayDisableOnInteraction: false,
			spaceBetween: 16,
			autoplay: true,
			watchSlidesProgress: true,
			slidesPerView: 1,
			pagination: {
				el: '.swiper--stories-modal .swiper-pagination',
				clickable: 'true',
				type: 'bullets',
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + '<span class="swiper-pagination-bar"></span>' + '<span class="swiper-pagination-progress"></span>' + '</span>';
				},
			},
			navigation: {
				nextEl: '.swiper--stories-modal .swiper-button-next',
				prevEl: '.swiper--stories-modal .swiper-button-prev',
			},
		});
	},
}
</script>