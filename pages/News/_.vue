<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<blog-item :article="article" />
		</div>
	</main>
</template>
<script>
import article from "@/mixins/article";
import jsonld from "@/mixins/jsonld";
import {mapGetters} from "vuex";

export default {
	mixins: [article, jsonld],
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
					active: false
				}
			]
		}
	},
	computed: {
		...mapGetters({
			domain: 'domain'
		})
	},
	head() {
		let title = (this.article.long_title ? this.article.long_title : this.article.page_title) + ' — CARRO'
		let description_title = this.article.description ? this.article.description : this.article.short_description
		let description_text = 'Портал проверенных автомобилей с пробегом CARRO.RU,  весь спектр услуг, Трейд ИН, выкуп, автокредитование. Выгодные цены, еженедельные скидки и подарки, спешите!'
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
					content: this.article.image_preview ? this.article.image_preview.thumb : this.domain + '/carro.png'
				},
			]
		}
	},
	mounted() {
		window.scrollTo(0, 0)
	},
	validate(ctx) {
		return ctx.store.getters.showBlog
	},
}
</script>