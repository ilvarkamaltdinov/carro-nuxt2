<template>
	
	<section class="page-main__catalog catalog catalog--slider grid__col-12">
		<heading-h2>Автомобили в наличии</heading-h2>
		<tabs-list />
		<div class="catalog__list">
			<div class="swiper swiper--catalog">
				<div class="swiper-wrapper">
					<catalog-item is-slide
					              :info="item"
					              v-for="item in catalogCars"
					              :key="item.id">
						
						
						<template v-slot:buttons>
							<catalog-item-buttons :active-like="likesArray.some(id => id === String(item.id))"
							                      @creditClick="creditClick(item)"
							                      @favoriteClick="favoriteClick(item)"
							                      @callClick="callClick(item)" />
						</template>
					</catalog-item>
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
		<button-more @click.native="toCatalog">Все автомобили</button-more>
	</section>

</template>
<script>

import {mapMutations, mapGetters, mapActions} from "vuex";

export default {
	data() {
		return {
			requestParams: {
				limit: 8,
				page: 1
			},
			modalChooseCar: {
				component: 'modal-callback',
				visibility: true
			},
			modalCreditCar: {
				component: 'modal-credit',
				visibility: true
			},
		}
	},
	computed: {
		...mapGetters({
			catalogCars: 'catalog/catalog-cars/catalogCars',
			likesArray: 'favorite/favorite/likesArray'
		}),
		carsList() {
			return this.offers ? this.offers.data : []
		}
	},
	async mounted() {
		await this.getCatalogCars(this.requestParams)
		if (this.catalogCars) {
			const sliderCatalog = new swiper.default('.catalog--slider .swiper', {
				modules: [swiper.Navigation, swiper.Autoplay],
				loop: false,
				autoplayDisableOnInteraction: true,
				autoplay: false,
				slidesPerView: 3,
				initialSlide: 1,
				centeredSlides: true,
				watchSlidesProgress: true,
				spaceBetween: 24,
				navigation: {
					nextEl: '.catalog--slider .swiper-button-next',
					prevEl: '.catalog--slider .swiper-button-prev',
				},
			});
		}
	},
	methods: {
		...mapMutations({
			setModalMain: 'modal/modal-main/SET_MODAL_MAIN',
			setCallbackCar: 'modal/modal-callback/SET_CALLBACK_CAR',
			setCreditCar: 'modal/modal-credit/SET_CREDIT_CAR'
		}),
		...mapActions({
			getCatalogCars: 'catalog/catalog-cars/getCatalogCars',
			liked: 'favorite/favorite/liked'
		}),
		favoriteClick(item) {
			this.liked(item)
		},
		callClick(carInfo) {
			this.setCallbackCar(carInfo)
			this.setModalMain(this.modalChooseCar)
		},
		creditClick(carInfo) {
			this.setCreditCar(carInfo)
			this.setModalMain(this.modalCreditCar)
		},
		toCatalog() {
			this.$router.push('/used')
		}
	}
}
</script>