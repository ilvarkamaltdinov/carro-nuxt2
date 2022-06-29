<template>
	
	<section class="modal modal--menu">
		<h2 class="visually-hidden">Меню сайта</h2>
		<div class="modal__wrap grid grid__container">
			<nav class="main-nav main-nav--modal grid__col-12">
				<component :list="siteList" :is="$device.isMobile ? 'site-list-mobile': 'site-list'"/>
				<social/>
			</nav>
		</div>
	</section>

</template>
<script>
export default {
	data(){
		return{
			siteList: [
				{
					title: 'Автомобили',
					links: [
						{
							name: 'Легковые',
							link: '/used'
						},{
							name: 'Коммерческие',
							link: '/commercial'
						},
					]
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
							link: '/tradeIn'
						},
						{
							name: 'Рассрочка',
							link: '/inProcess'
						},
						{
							name: 'Бесплатный подбор',
							link: '/inProcess'
						},
						{
							name: 'Выкуп',
							link: '/buyout'
						},
						{
							name: 'Такси+',
							link: '/inProcess'
						},
						{
							name: 'Детейлинг',
							link: '/detailing'
						},
					]
				},
				{
					title: 'Информация',
					links: [
						{
							name: 'Блог',
							link: '/blog'
						},
						{
							name: 'Отзывы',
							link: '/reviews'
						},
						{
							name: 'О портале',
							link: '/about'
						},
					]
				},
				{
					title: 'Автосалоны',
					links: [
						{
							name: 'Контакты',
							link: '/contacts'
						},
						{
							name: 'Предложения',
							link: '/offers'
						}
					]
				},
				{
					title: 'Банки',
					links: [
						{
							name: 'Банки-партнеры',
							link: '/banks-partners'
						}
					]
				},
			]
		}
	}
}
</script>