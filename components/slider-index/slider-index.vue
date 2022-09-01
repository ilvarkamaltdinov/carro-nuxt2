<template>
	<section class="page-main__slider-index slider-index grid__col-8">
		<!-- Slider main container-->
		<div class="swiper swiper--progress swiper--index">
			<!-- Additional required wrapper-->
			<div class="swiper-wrapper">
				<!-- Slides-->
				<slider-index-slide v-for="slide in slides"
				                    :slide="slide"
				                    :key="slide.id" />
			</div>
			<!-- If we need pagination-->
			<div class="swiper-pagination"></div>
			<!-- If we need navigation buttons-->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
			<!-- If we need scrollbar-->
			<div class="swiper-scrollbar"></div>
		</div>
	</section>
</template>
<script>
import AOS from 'aos'
import slides from '@/apollo/queries/slides'
import 'aos/dist/aos.css'
import {mapActions, mapGetters} from "vuex"

export default {
	data() {
		return {
			slides: []
		}
	},
	mounted() {
		this.request({query: slides, variables: {}}).then((response) => {
			this.slides = response.data.slides
			this.$nextTick(()=>{
				const sliderIndexSwiper = new swiper.default('.slider-index .swiper', {
					modules: [swiper.Navigation, swiper.Pagination, swiper.Autoplay],
					loop: true,
					autoplayDisableOnInteraction: false,
					autoplay: true,
					slidesPerView: 1,
					autoHeight: true,
					watchSlidesProgress: true,
					scrollbar: false,
					on: {
						sliderMove: this.sliderMove,
						slideChangeTransitionStart: this.slideChangeTransitionStart
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: 'true',
						type: 'bullets',
						renderBullet: function (index, className) {
							return '<span class="' + className + '">' + '<span class="swiper-pagination-bar"></span>' + '<span class="swiper-pagination-progress"></span>' + '</span>';
						},
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				})
				AOS.init({
					once: true
				})
			})
		})
	},
	methods: {
		...mapActions({
			request: 'request'
		}),
		sliderMove() {
			document.querySelectorAll('.swiper-slide-next .slider-index__media').forEach((val) => {
				// val.style.display = 'none'
				// val.classList.remove("aos-init", "aos-animate");
				// AOS.init({
				// 	once: true
				// })
				// val.style.display = 'block'
			})
			document.querySelectorAll('.swiper-slide-next .slider-index__circle').forEach((val) => {
				val.style.display = 'none'
				val.classList.remove("aos-init", "aos-animate");
				val.style.display = 'block'
				val.classList.add("aos-init", "aos-animate");
			})
			AOS.init()
		},
		slideChangeTransitionStart() {
			// document.querySelectorAll('.swiper-slide-active .slider-index__media').forEach((val) => {
			// 	val.style.display = 'none'
			// 	val.classList.remove("aos-init");
			// 	val.style.display = 'block'
			// })
			// document.querySelectorAll('.swiper-slide-next .slider-index__circle').forEach((val) => {
			// 	val.style.display = 'none'
			// 	val.classList.remove("aos-init");
			// 	val.style.display = 'block'
			// })
			// AOS.refreshHard()
		}
	},
	computed: {
		...mapGetters({
			settings: 'settings/settings/settings'
		})
	}
}
</script>
