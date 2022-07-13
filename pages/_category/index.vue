<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<catalog-used :page-title="pageTitle"/>
	</main>
</template>
<script>

import seoTags from "@/mixins/seoTags";

export default {
	layout: 'catalog',
	mixins:[seoTags],
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
	},
	validate(ctx) {
		return ctx.params.category === 'used' || ctx.params.category === 'commercial';
	}
}

</script>