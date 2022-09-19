<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<blog-category-page title="Новости"/>
		</div>
	</main>
</template>

<script>
import jsonld from "@/mixins/jsonld";

export default {
	mixins: [jsonld],
	data() {
		return {
			crumbs: [
				{
					title: 'Главная',
					link: '/',
					active: false
				},
				{
					title: 'Новости',
					link: '/news',
					active: true
				}
			]
		}
	},
	mounted() {
		setTimeout(function () {window.scrollTo(0, -100);}, 1);
	},
	validate(ctx) {
		return ctx.store.getters.showBlog
	},
	head() {
		let title = 'Новости — CARRO'
		let description_title = 'Новости — CARRO'
		let description_text = ' Портал проверенных автомобилей с пробегом CARRO.RU,  весь спектр услуг, Трейд ИН, выкуп, автокредитование. Выгодные цены, еженедельные скидки и подарки, спешите!'
		let description = description_title ? (description_title + '.' + description_text) : description_text
		return {
			title: title,
			link: [
				{
					rel: 'canonical',
					href: this.domain + this.$route.path
				}
			],
			meta: [
				{
					hid: 'desctiption',
					name: 'description',
					content: description
				},
				{
					hid: 'og:type',
					property: 'og:type',
					content: 'website',
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: this.domain + this.$route.path,
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: title
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: description
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: this.domain + '/carro.png'
				},
			]
		}
	}
}
</script>
