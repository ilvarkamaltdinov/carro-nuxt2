<template>
	
	<section class="modal modal--menu">
		<h2 class="visually-hidden">Меню сайта</h2>
		<div class="modal__wrap grid grid__container">
			<nav class="main-nav main-nav--modal grid__col-12">
				<component :list="siteList"
				           :is="$device.isMobile ? 'site-list-mobile': 'site-list'" />
				<social />
			</nav>
		</div>
	</section>

</template>
<script>
export default {
	data() {
		return {
			siteList: [
				{
					title: 'Автомобили',
					links: [
						{
							name: 'Легковые',
							link: '/used'
						}, {
							name: 'Коммерческие',
							link: '/commercial'
						},
					],
					active:false
				},
				{
					title: 'Услуги',
					links: [
						{
							name: 'Автокредит',
							link: '/credit'
						},
						{
							name: 'Trade-In',
							link: '/exchange'
						},
						{
							name: 'Рассрочка',
							link: '/rassrochka'
						},
						{
							name: 'Бесплатный подбор',
							link: '/besplatnyij-podbor-avtomobilya'
						},
						{
							name: 'Выкуп',
							link: '/buyout'
						},
						{
							name: 'Такси+',
							blank: true,
							link: 'https://taxi.carro.ru'
						},
						{
							name: 'Детейлинг',
							link: '/uslugi-servisa'
						},
					],
					active:false
				},
				{
					title: 'Информация',
					links: [
						{
							name: 'Контакты',
							link: '/contacts'
						},
						{
							name: 'Блог',
							link: '/blog'
						},
						{
							name: 'Отзывы',
							link: '/reviews-dealers'
						},
						{
							name: 'О портале',
							link: '/about'
						},
						{
							name: 'Помощь',
							link: '/knowledge'
						},
					],
					active:false
				},
				{
					title: 'Автосалоны',
					links: [
						{
							name: 'Автосалоны-партнеры',
							link: '/contact'
						},
						{
							name: 'Предложения',
							link: '/best-moscow-autosalon'
						}
					],
					active:false
				},
				{
					title: 'Банки',
					links: [
						{
							name: 'Банки-партнеры',
							link: '/banks-partners'
						}
					],
					active:false
				},
			]
		}
	}
}
</script>