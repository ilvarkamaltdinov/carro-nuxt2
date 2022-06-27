<template>
	<section class="page-main__catalog catalog catalog--slider grid__col-12">
		<heading-h2>Автомобили в наличии</heading-h2>
		<tabs-list />
		<div class="catalog__list">
			<div class="swiper swiper--catalog">
				<div class="swiper-wrapper">
					<catalog-item-small-desktop
							slide
							:key="offer.id"
							v-for="offer in offers_list"
							:offer="offer" />
				</div>
			</div>
			<button class="swiper-button swiper-button-prev">
				<svg-icon class="swiper-button__icon"
				          name="icon-arrow"/>
			</button>
			<button class="swiper-button swiper-button-next">
				<svg-icon class="swiper-button__icon"
				          name="icon-arrow"/>
			</button>
		</div>
		<button-typical @click.native="toCatalog()" text="Все автомобили" class="button--link button--more"/>
	</section>

</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			offers: 'catalog/catalog-cars/offers',
		}),
		offers_list() {
			return this.offers.data
		}
	},
	methods:{
		toCatalog(){
			this.$router.push('/used')
		}
	},
	async mounted() {
		//TODO при клике на клонированную карточку редиректит с обновлением страницы
		let sliderCatalog = await new swiper.default('.catalog--slider .swiper', {
			modules: [swiper.Navigation, swiper.Autoplay],
			loop: true,
			// autoplayDisableOnInteraction: true,
			autoplay: false,
			slidesPerView: 3,
			initialSlide: 3,
			centeredSlides: true,
			watchSlidesProgress: true,
			spaceBetween: 24,
			navigation: {
				nextEl: '.catalog--slider .swiper-button-next',
				prevEl: '.catalog--slider .swiper-button-prev',
			},
		});
	},
}
</script>