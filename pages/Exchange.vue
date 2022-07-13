<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs"/>
		</div>
		<div class="grid grid--container">
			<application-trade-in :page-title="pageTitle"/>
			<benefits :benefits="benefitsTradeIn"/>
			<text-trade-in/>
		</div>
	</main>
</template>
<script>
import seoTags from "@/mixins/seoTags";
import {mapGetters} from "vuex";

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
					name: 'trade-In',
					route: '/tradeIn',
					active: true
				}
			]
		}
	},
	computed: {
		...mapGetters({
			benefitsTradeIn: 'benefits/benefitsTradeIn'
		})
	}
}
</script>