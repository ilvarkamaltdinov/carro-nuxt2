<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<faq />
		</div>
	</main>
</template>
<script>
import seoTags from "@/mixins/seoTags";

export default {
	mixins: [seoTags],
	data() {
		return {
			crumbs: [
				{
					name: 'Главная',
					route: '/',
					active: false
				},
				{
					name: 'Часто задаваемые вопросы',
					route: '/knowledge',
					active: true
				}
			]
		}
	}
}
</script>