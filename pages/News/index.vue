<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<blog-category-page   title="Новости"/>
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
		window.scrollTo(0, 0)
	},
	validate(ctx) {
		return !ctx.store.getters.showBlog
	},
}
</script>