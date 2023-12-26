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

	computed: {
		...mapGetters({
			domain: 'domain'
		}),
		ruName() {
			return this.$route.name.split('-')[1] === 'articles' ? 'Статьи' :
					this.$route.name.split('-')[1] === 'ratings' ? 'Рейтинги' :
							this.$route.name.split('-')[1] === 'news' ? 'Новости' :
									this.$route.name.split('-')[0] === 'news' ? 'Новости' : ''
		},
		crumbs() {
			return [
				{
					title: 'Главная',
					link: '/',
					active: false
				},
				{
					title: 'Блог',
					link: '/blog',
					active: false
				},
				{
					title: this.ruName,
					link: this.$route.name.split('-')[1] !== 'article' ? `/blog/${this.$route.name.split('-')[1]}`
							: `/news`,
					active: false
				},
				{
					title: (this.article.long_title ? this.article.long_title : this.article.page_title) || '',
					link: `/blog/${this.$route.name.split('-')[1]}`,
					active: true
				}
			]

		}
	},
	head() {
		let title = (this.article.long_title ? this.article.long_title : this.article.page_title) + ' — CARRO'
		let description_title = this.article.description ? this.article.description : this.article.short_description ? this.article.short_description : title
		let description_text = 'Портал проверенных автомобилей с пробегом CARRO.RU,  весь спектр услуг, Trade-In, выкуп, автокредитование. Выгодные цены, еженедельные скидки и подарки, спешите!'
		let description = description_title ? (description_title + '.' + description_text) : description_text
		return {
			title: title,
			link: [
				{
					rel: 'canonical',
					href: 'https://' + this.domain + this.$route.path
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
					content: 'https://' + this.domain + this.$route.path,
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
					content: this.article.image_preview ? this.article.image_preview.thumb : 'https://' + this.domain + '/carro.png'
				},
			]
		}
	},
	mounted() {
		setTimeout(function () {
			window.scrollTo(0, -100);
		}, 1);
	},
	validate(ctx) {
		return ctx.store.getters.showBlog
	}
}
</script>
