<template>
	<section class="modal modal--menu">
		<h2 class="visually-hidden">Меню сайта</h2>
		<div class="modal__wrap grid grid__container">
			<nav class="main-nav main-nav--modal grid__col-12">
				<component :list="siteList"
				           :is="$device.isMobileOrTablet ? 'site-list-mobile': 'site-list'" />
				<social />
			</nav>
		</div>
	</section>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			isMoscow: 'isMoscow',
			showBlog: 'showBlog',
			showReviews: 'showReviews',
			showComm: 'showComm',
		}),
		siteList() {
			return [
				{
					title: 'Автомобили',
					links: [
						{
							name: 'Легковые',
							link: '/used',
							show: true
						}, {
							name: 'Коммерческие',
							link: '/commercial',
							show: this.showComm
						},
					],
				},
				{
					title: 'Услуги',
					links: [
						{
							name: 'Автокредит',
							link: '/credit',
							show: true
						},
						{
							name: 'Trade-In',
							link: '/exchange',
							show: true
						},
						{
							name: 'Рассрочка',
							link: '/rassrochka',
							show: true
						},
						{
							name: 'Бесплатный подбор',
							link: '/besplatnyij-podbor-avtomobilya',
							show: true
						},
						{
							name: 'Выкуп',
							link: '/buyout',
							show: true
						},
						{
							name: 'Такси+',
							blank: true,
							link: 'https://taxi.carro.ru',
							show: this.isMoscow
						}
					]
				},
				{
					title: 'Информация',
					links: [
						{
							name: 'Контакты',
							link: '/contacts',
							show: true
						},
						{
							name: 'Блог',
							link: '/blog',
							show: this.showBlog
						},
						{
							name: 'Отзывы',
							link: '/reviews-dealers',
							show: this.showReviews
						},
						{
							name: 'О портале',
							link: '/about',
							show: true
						},
						{
							name: 'Помощь',
							link: '/knowledge',
							show: true
						},
					],
				},
				{
					title: 'Автосалоны',
					links: [
						{
							name: 'Автосалоны-партнеры',
							link: '/contact',
							show: true
						},
						{
							name: 'Предложения',
							link: this.isMoscow ? '/best-moscow-autosalon' : '/best-autosalon',
							show: true
						}
					],
				},
				{
					title: 'Банки',
					links: [
						{
							name: 'Банки-партнеры',
							link: '/banks-partners',
							show: true
						}
					],
				},
			]
		}
	}
}
</script>