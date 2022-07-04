<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<featured-banks :title="pageTitle"/>
		</div>
	</main>
</template>
<script>
import banks from "~/apollo/queries/banks"
import {mapActions, mapMutations} from "vuex";
import seoTags from "@/mixins/seoTags";

export default {
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
					name: 'Банки',
					route: '/banks',
					active: true
				}
			]
		}
	},
}
</script>