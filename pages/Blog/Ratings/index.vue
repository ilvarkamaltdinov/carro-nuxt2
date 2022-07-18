<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<blog-category-page   title="Рейтинги"/>
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
					name: 'Рейтинги',
					route: '/blog/ratings',
					active: true
				}
			]
		}
	}
}
</script>