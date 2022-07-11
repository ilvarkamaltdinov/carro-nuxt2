<template>
	<section class="page-main__stories stories" :class="{'stories--desktop grid__col-8':!$device.isMobile}">
		<transition name="fade">
			<div v-if="storiesModal"
			     class="stories__modal_wrapper-wrap">
				<div @click="closeStories()"
				     class="overlay"></div>
				<stories-modal />
			</div>
		</transition>
		<h2 class="visually-hidden">Акции и спецпредложения</h2>
		<ul class="stories__list"
		    v-if="$device.isMobile">
			<stories-item :stories="item"
			              @click="openStories(item.stories)"
			              v-for="item in stories"
			              :key="item.id" />
		</ul>
		<div v-else
		     class="swiper swiper--stories">
			<ul class="stories__list swiper-wrapper">
				<stories-item :stories="item"
				              @click="openStories(item.stories)"
				              v-for="item in stories"
				              :key="item.id" />
			</ul>
		</div>
		<button v-if="!$device.isMobile"
		        ref="prev"
		        class="swiper-button swiper-button-prev">
			<svg-icon class="swiper-button__icon"
			          name="icon-arrow" />
		</button>
		<button v-if="!$device.isMobile"
		        ref="next"
		        class="swiper-button swiper-button-next">
			<svg-icon class="swiper-button__icon"
			          name="icon-arrow" />
		</button>
	</section>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
	data() {
		return {
			stories: [
				{
					id: 1,
					title: 'Корейская неделя',
					img: '1',
					stories: [
						{
							id: 1,
							title: 'Получите выгоду до 150 000 ₽ за Trade-In',
							text: 'Сядьте за руль автомобиля своей мечты уже сегодня',
							img: '1',
							button: {
								color: 'blue',
								link: 'credit',
								text: 'Заявка на автокредит'
							}
						},
						{
							id: 2,
							title: 'Рыночная оценка и оформление за 30 мин.',
							text: 'Быстро оценим ваш автомобиль и предоставим скидку на новый',
							img: '1',
							button: {
								color: 'blue',
								link: 'credit',
								text: 'Заявка на автокредит'
							}
						}
					]
				},
				{
					id: 2,
					title: 'Корейская неделя',
					img: '1',
					stories: [
						{
							id: 1,
							title: 'Получите выгоду до 150 000 ₽ за Trade-In',
							text: 'Сядьте за руль автомобиля своей мечты уже сегодня',
							img: '1',
							button: {
								color: 'blue',
								link: 'credit',
								text: 'Заявка на автокредит'
							}
						},
						{
							id: 2,
							title: 'Рыночная оценка и оформление за 30 мин.',
							text: 'Быстро оценим ваш автомобиль и предоставим скидку на новый',
							img: '1',
							button: {
								color: 'blue',
								link: 'credit',
								text: 'Заявка на автокредит'
							}
						}
					]
				},
				{
					id: 3,
					title: 'Корейская неделя',
					img: '1',
					stories: [
						{
							id: 1,
							title: 'Получите выгоду до 150 000 ₽ за Trade-In',
							text: 'Сядьте за руль автомобиля своей мечты уже сегодня',
							img: '1',
							button: {
								color: 'blue',
								link: 'credit',
								text: 'Заявка на автокредит'
							}
						},
						{
							id: 2,
							title: 'Рыночная оценка и оформление за 30 мин.',
							text: 'Быстро оценим ваш автомобиль и предоставим скидку на новый',
							img: '1',
							button: {
								color: 'blue',
								link: 'credit',
								text: 'Заявка на автокредит'
							}
						}
					]
				},
				{
					id: 4,
					title: 'Корейская неделя',
					img: '1',
					stories: [
						{
							id: 1,
							title: 'Получите выгоду до 150 000 ₽ за Trade-In',
							text: 'Сядьте за руль автомобиля своей мечты уже сегодня',
							img: '1',
							button: {
								color: 'blue',
								link: 'credit',
								text: 'Заявка на автокредит'
							}
						},
						{
							id: 2,
							title: 'Рыночная оценка и оформление за 30 мин.',
							text: 'Быстро оценим ваш автомобиль и предоставим скидку на новый',
							img: '1',
							button: {
								color: 'blue',
								link: 'credit',
								text: 'Заявка на автокредит'
							}
						}
					]
				},
				{
					id: 5,
					title: 'Корейская неделя',
					img: '1',
					stories: [
						{
							id: 1,
							title: 'Получите выгоду до 150 000 ₽ за Trade-In',
							text: 'Сядьте за руль автомобиля своей мечты уже сегодня',
							img: '1',
							button: {
								color: 'blue',
								link: 'credit',
								text: 'Заявка на автокредит'
							}
						},
						{
							id: 2,
							title: 'Рыночная оценка и оформление за 30 мин.',
							text: 'Быстро оценим ваш автомобиль и предоставим скидку на новый',
							img: '1',
							button: {
								color: 'blue',
								link: 'credit',
								text: 'Заявка на автокредит'
							}
						}
					]
				},
				{
					id: 6,
					title: 'Корейская неделя',
					img: '1',
					stories: [
						{
							id: 1,
							title: 'Получите выгоду до 150 000 ₽ за Trade-In',
							text: 'Сядьте за руль автомобиля своей мечты уже сегодня',
							img: '1',
							button: {
								color: 'blue',
								link: 'credit',
								text: 'Заявка на автокредит'
							}
						},
						{
							id: 2,
							title: 'Рыночная оценка и оформление за 30 мин.',
							text: 'Быстро оценим ваш автомобиль и предоставим скидку на новый',
							img: '1',
							button: {
								color: 'blue',
								link: 'credit',
								text: 'Заявка на автокредит'
							}
						}
					]
				},
			]
		}
	},
	computed: {
		...mapGetters({
			storiesModal: 'stories/stories/storiesModal'
		})
	},
	mounted() {
		const sliderStories = new swiper.default('.stories--desktop .swiper', {
			modules: [swiper.Navigation, swiper.Autoplay],
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
	},
	methods: {
		...mapActions({
			openStories: 'stories/stories/openStories',
			closeStories: 'stories/stories/closeStories'
		})
	}
}
</script>