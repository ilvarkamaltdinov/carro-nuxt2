<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs"/>
		</div>
		<div class="grid grid--container">
			<application-trade-in/>
			<benefits-car/>
			<text-trade-in/>
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
					name: 'trade-In',
					route: '/tradeIn',
					active: true
				}
			]
		}
	}
}
</script>