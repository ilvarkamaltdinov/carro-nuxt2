<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<blog-category-page   title="Статьи"/>
		</div>
	</main>
</template>

<script>
export default {
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
					route: '/blog/articles',
					active: true
				}
			]
		}
	}
}
</script>