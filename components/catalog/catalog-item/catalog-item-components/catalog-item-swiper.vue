<template>
	<div class="catalog__img"
	     :class="'catalog__img-' + sliderId">
		<div class="swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide"
				     v-for="image in images"
				     :key="image.thumb">
					<a :href="isForm ? '' : url"
					   @click.prevent="$emit('click')"
					   class="catalog__img-link">
						<picture>
							<source type="image/webp"
							        media="(min-width: 768px)"
							        :data-srcset="image.thumb" />
							<source media="(min-width: 768px)"
							        :data-srcset="image.thumb" />
							<img class="lazyload"
							     :data-src="image.tumb"
							     :data-srcset="image.thumb"
							     alt="" />
						</picture>
					</a>
				</div>
				<catalog-item-call-card :image="images[0].thumb"
				                        class="swiper-slide"
				                        :dealer="dealer" />
			</div>
		</div>
		<div class="swiper__buttons-wrapper">
			<button class="swiper-button swiper-button-next">
				<svg-icon name="icon-arrow"
				          class="swiper-button__icon" />
			</button>
			<button class="swiper-button swiper-button-prev">
				<svg-icon name="icon-arrow"
				          class="swiper-button__icon" />
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		url: String,
		sliderId: {
			type: Number,
			default: null
		},
		isForm: {
			type: Boolean,
			default: false
		},
		images: {
			type: Array,
			default: () => []
		},
		dealer: {
			type: Object,
			default: () => {
			}
		}
	},
	async mounted() {
		let sliderSwiper = await new swiper.default(`.catalog__img-${this.sliderId} .swiper`, {
			modules: [swiper.Navigation, swiper.Autoplay],
			loop: true,
			autoplayDisableOnInteraction: false,
			autoplay: false,
			slidesPerView: "auto",
			centeredSlides: false,
			watchSlidesProgress: true,
			spaceBetween: 16,
			on: {
				init: () => {
					//TODO убирать прелодер когда слайдер подрубился
				},
			},
			navigation: {
				nextEl: `.catalog__img-${this.sliderId} .swiper-button-next`,
				prevEl: `.catalog__img-${this.sliderId} .swiper-button-prev`,
			},
		})
	}
}
</script>