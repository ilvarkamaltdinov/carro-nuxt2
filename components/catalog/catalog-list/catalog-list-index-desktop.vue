<template>
	<section class="page-main__catalog catalog catalog--slider grid__col-12">
		<heading-h2>Автомобили в наличии</heading-h2>
		<tabs-list :tabs="tabs" />
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
				          name="icon-arrow" />
			</button>
			<button class="swiper-button swiper-button-next">
				<svg-icon class="swiper-button__icon"
				          name="icon-arrow" />
			</button>
		</div>
		<button-typical @click.native="toCatalog()"
		                text="Все автомобили"
		                class="button--link button--more" />
	</section>

</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
	data() {
		return {
			tabs: [
				{
					title: "Топ-предложения",
					slug: 'test',
					id: 1
				},
				{
					title: "Свежие",
					slug: 'test',
					id: 2
				},
				{
					title: "До 500 000 ₽",
					slug: 'test',
					id: 3
				},
				{
					title: "Топ-выгода",
					slug: 'test',
					id: 4
				},
				{
					title: "7-местные",
					slug: 'test',
					id: 5
				},
				{
					title: "До 2 владельцев",
					slug: 'test',
					id: 6
				},
				{
					title: "До 5 лет",
					slug: 'test',
					id: 7
				},
				{
					title: "Седаны",
					slug: 'test',
					id: 8
				}
			]
		}
	},
	computed: {
		...mapGetters({
			offers: 'catalog/catalog-cars/offers',
		}),
		offers_list() {
			return this.offers.data
		}
	},
	methods: {
		toCatalog() {
			this.$router.push('/used')
		}
	},
	async mounted() {
		//TODO при клике на клонированную карточку редиректит с обновлением страницы
		let sliderCatalog = await new swiper.default('.catalog--slider .swiper', {
			modules: [swiper.Navigation, swiper.Autoplay],
			loop: false,
			// autoplayDisableOnInteraction: true,
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
	},
}
</script>