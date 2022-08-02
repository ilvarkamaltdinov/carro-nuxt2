<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
      <benefits class="benefits--mobile" :benefits="benefitsCredit" />
			<application-credit :page-title="pageTitle" />
			<benefits :benefits="benefitsCredit" />
			<text-credit />
		</div>
	</main>
</template>
<script>
import seoTags from "@/mixins/seoTags";
import {mapGetters} from "vuex";
import jsonld from "@/mixins/jsonld";

export default {
	mixins: [seoTags, jsonld],
	mounted() {
		window.scrollTo(0, 0)
	},
	computed: {
		...mapGetters({
			benefitsCredit: 'benefits/benefitsCredit',
      benefitsCreditMobile: 'benefits/benefitsCreditMobile'
		})
	}
}
</script>
