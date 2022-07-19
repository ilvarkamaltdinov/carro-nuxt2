<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<catalog-used offers :page-title="pageTitle" />
		</div>
	</main>
</template>
<script>
import seoTags from "@/mixins/seoTags";

export default {
	mixins: [seoTags],
	layout: 'catalog',
	data() {
		return {
			crumbs: [
				{
					name: 'Главная',
					route: '/',
					active: false
				},
				{
					name: 'Предложения',
					route: '/offers',
					active: true
				}
			]
		}
	}
}
</script>