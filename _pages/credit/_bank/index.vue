<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<application-credit :page-title="pageTitle" />
			<benefits :benefits="benefitsCredit" />
			<text-credit :text="bank.site_text ? bank.site_text.body : ''"/>
		</div>
	</main>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import bank from "@/apollo/queries/bank/bank";
import seoTags from "@/mixins/seoTags";
import jsonld from "@/mixins/jsonld";

export default {
	mixins: [seoTags, jsonld],
	computed: {
		...mapGetters({
			bank: 'banks/bank',
			benefitsCredit: 'benefits/benefitsCredit'
		})
	},
	methods: {
		...mapActions({
			request: 'filters/filters/request',
		}),
	},
	async mounted() {
		setTimeout(function () {window.scrollTo(0, -100);}, 1);
		// try {
		// 	let response = await this.request({query: bank, variables: {slug: this.$route.params.bank}})
		// 	await this.setBank(response.data.bank)
		// } catch(error) {
		// 	console.log(error)
		// 	return this.$nuxt.error()
		// }
	},

}
</script>
