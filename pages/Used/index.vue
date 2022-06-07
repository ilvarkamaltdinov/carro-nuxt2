<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<catalog-desktop/>
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
					name: 'С пробегом',
					route: '/used',
					active: true
				}
			]
		}
	}
}

</script>