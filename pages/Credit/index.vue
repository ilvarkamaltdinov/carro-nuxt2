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