<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<catalog-used/>
	</main>
</template>
<script>
export default {
	layout: 'catalogLayout',
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