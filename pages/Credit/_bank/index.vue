<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs"/>
		</div>
		<div class="grid grid--container">
			<application-credit/>
			<benefits-car/>
			<text-credit/>
		</div>
	</main>
</template>
<script>
export default {
	validate({ params, query, store }) {
		return true // if the params are valid
		// return false // will stop Nuxt to render the route and display the error page
	},
	data() {
		return {
			crumbs: [
				{
					name: 'Главная',
					route: '/',
					active: false
				},
				{
					name: 'Автокредит',
					route: '/credit',
					active: true
				}
			]
		}
	}
}
</script>