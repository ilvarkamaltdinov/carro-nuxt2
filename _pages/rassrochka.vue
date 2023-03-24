<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<application-installment :page-title="pageTitle" />
			<benefits :benefits="benefitsInstallment" />
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
	computed: {
		...mapGetters({
			benefitsInstallment: 'benefits/benefitsInstallment'
		})
	},
	mounted() {
		setTimeout(function () {window.scrollTo(0, -100);}, 1);
	},
}
</script>
