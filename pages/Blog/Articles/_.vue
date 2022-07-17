<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<blog-item :article="article"/>
		</div>
	</main>
</template>
<script>
import article from "@/mixins/article";

export default {
	mixins: [article],
	data() {
		return {
			crumbs: [
				{
					name: 'Главная',
					route: '/',
					active: false
				},
				{
					name: 'Блог',
					route: '/blog',
					active: false
				},
				{
					name: 'Статьи',
					route: '/blog/aricles',
					active: true
				}
			]
		}
	}
}
</script>