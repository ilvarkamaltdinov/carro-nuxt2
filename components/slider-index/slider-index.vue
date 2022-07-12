<template>
	<section class="page-main__slider-index slider-index grid__col-8">
		<h2 class="visually-hidden">Слайдер на главной странице</h2>
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
import 'aos/dist/aos.css'

export default {
	data() {
		return {
			slides: [
				{
					id: 1,
					heading:'Рассрочка 0% от Совкомбанка',
					content:'Успей купить авто на выгодных условиях'
				},
				{
					id: 2,
					heading:'Автокредит ВТБ',
					content:'Лучшие условия для клиентов carro.ru'
				},
				{
					id: 3,
					heading:'Рассрочка от Сбера и Сетелем',
					content:'Лучшие условия для клиентов CARRO'
				},
				{
					id: 4,
					heading:'Заморозили цены и ставки',
					content:'Успей купить автомобиль по старой цене'
				},
				{
					id: 5,
					heading:'2-й комплект резины в подарок',
					content:'При покупке автомобиля в кредит'
				},
				{
					id: 6,
					heading:'Супер-автокредит от 4.9% годовых',
					content:'Скидка до 150 000 ₽, одобрение по паспорту и В/У, взнос от 0%'
				},
				{
					id: 7,
					heading:' Читайте наш Telegram-канал',
					content:'Последние поступления, акции, новости'
				},
				{
					id: 8,
					heading:'Обменяй авто <br/> по Trade-In',
					content:'Выгода до 250 000 ₽, рыночная цена, оформление 30 мин.'
				}
			]
		}
	},
	mounted() {
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
				sliderMove: function () {
					document.querySelectorAll('.swiper-slide-next .slider-index__media').forEach((val) => {
						val.style.display = 'none'
						val.classList.remove("aos-init", "aos-animate");
						val.style.display = 'block'
					})
					document.querySelectorAll('.swiper-slide-next .slider-index__circle').forEach((val) => {
						val.style.display = 'none'
						val.classList.remove("aos-init", "aos-animate");
						val.style.display = 'block'
					})
					AOS.init({
						once: true
					})
				},
				slideChangeTransitionStart: function () {
					let slides = document.querySelectorAll('.swiper-slide-active .slider-index__media')
					slides.forEach((val) => {
						// val.style.display = 'none'
						val.classList.remove("aos-init");
						//console.log(1111, val)
						// val.style.display = 'block'
						// console.log(2222, val.classList)
					})
					document.querySelectorAll('.swiper-slide-next .slider-index__circle').forEach((val) => {
						//console.log(33333, val.classList)
						// val.style.display = 'none'
						// val.classList.remove("aos-init");
						// val.style.display = 'block'
						// console.log(44444, val.classList)
					})
					AOS.init({
						once: true
					})
				},
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
		//console.log(555555, 'aos is initing')
		AOS.init({
			once: true
		})
	}
}
</script>
