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
export default {
	data() {
		return {
			storiesItems: ['Корейская неделя', 'Выгодный Trade-In №1', 'Автокредит от 4.5%', 'Выкуп за 15 минут', 'Подбор автомобиля'],
		}
	},
	mounted() {
		const sliderStories = new swiper.default('.stories--desktop .swiper', {
			modules: [ swiper.Navigation, swiper.Autoplay ],
			loop: true,
			autoplayDisableOnInteraction: false,
			spaceBetween: 16,
			autoplay: false,
			watchSlidesProgress: true,
			slidesPerView: 5,
			navigation: {
				nextEl: '.stories--desktop .swiper-button-next',
				prevEl: '.stories--desktop .swiper-button-prev',
			},
		});
	}
}
</script>