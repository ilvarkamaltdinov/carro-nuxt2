<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<application-installment :page-title="pageTitle" />
			<benefits :benefits="benefitsCredit" />
			<text-installment />
		</div>
	</main>
</template>
<script>
import seoTags from "@/mixins/seoTags";
import {mapGetters} from "vuex";
import jsonld from "@/mixins/jsonld";

export default {
	mixins: [seoTags, jsonld],
	data() {
		return {
			crumbs: [
				{
					name: 'Главная',
					route: '/',
					active: false
				},
				{
					name: 'Рассрочка',
					route: '/rassrochka',
					active: true
				}
			],
		}
	},
	computed: {
		...mapGetters({
			benefitsCredit: 'benefits/benefitsCredit'
		})
	}
}
</script>