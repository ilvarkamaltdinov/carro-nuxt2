<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<thanks />
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
					name: 'Заявка успешно отправлена',
					route: '/thanks',
					active: true
				}
			]
		}
	}
}
</script>