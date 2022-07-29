<template>
	<div class="car__slider slider-car grid__col-12">
		<div class="swiper swiper--car">
			<div class="swiper-wrapper">
				<car-slider-item :src="img.src"
				                 :medium="img.medium"
				                 :original="img.original"
				                 v-for="img in offer.images"
				                 :key="img.medium" />
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
</template>
<script>
import {mapGetters, mapMutations} from "vuex";
import AOS from "aos";

export default {
	computed: {
		...mapGetters({
			offer: 'catalog/catalog-cars/offer'
		}),
		slidesPerView(){
			if(this.$device.isMobile){
				return 1.1
			} else{
				return 2
			}
		},
		centeredSlides(){
			return this.$device.isMobile;
		},
		slidesSpaceBetween(){
			if(this.$device.isMobile){
				return 8
			} else{
				return 24
			}
		}
	},
	methods:{
		...mapMutations({
			setOffer: 'catalog/catalog-cars/SET_OFFER',
			setCarPageLoaded:'catalog/catalog-cars/SET_CAR_PAGE_LOADED',
		})
	},
	destroyed() {
		this.setOffer(null)
	},
	mounted() {
		new swiper.default('.car__slider .swiper', {
			modules: [swiper.Navigation, swiper.Pagination, swiper.Autoplay],
			loop: true,
			autoplayDisableOnInteraction: false,
			autoplay: false,
			slidesPerView: this.slidesPerView,
			centeredSlides: this.centeredSlides,
			watchSlidesProgress: true,
			spaceBetween: this.slidesSpaceBetween,
			navigation: {
				nextEl: '.car__slider .swiper-button-next',
				prevEl: '.car__slider .swiper-button-prev',
			},
			on: {
				init:()=> {
					this.setCarPageLoaded(true)
				},
			},
		})
		AOS.init({
			once: true
		})
	}
	
}
</script>