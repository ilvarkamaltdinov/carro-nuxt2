<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<application-installment :page-title="pageTitle" />
			<benefits :benefits="benefitsCredit" />
			<text-credit />
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