<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs"/>
		</div>
		<div class="grid grid--container">
			<application-free-select :page-title="pageTitle"/>
			<benefits :benefits="benefitsBuyout"/>
		</div>
	</main>
</template>
<script>
import seoTags from "@/mixins/seoTags";
import {mapGetters} from "vuex";

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
					name: 'Бесплатный автоподбор',
					route: '/besplatnyij-podbor-avtomobilya',
					active: true
				}
			],
		}
	},
	computed: {
		...mapGetters({
			benefitsBuyout: 'benefits/benefitsBuyout'
		})
	}
}
</script>