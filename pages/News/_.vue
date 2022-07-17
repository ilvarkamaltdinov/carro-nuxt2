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
	mixins:[article],
	data() {
		return {
			crumbs: [
				{
					name: 'Главная',
					route: '/',
					active: false
				},
				{
					name: 'Новости',
					route: '/news',
					active: false
				}
			]
		}
	}
}
</script>