<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs"/>
		</div>
		<div class="grid grid--container">
			<application-buyout :page-title="pageTitle"/>
			<benefits :benefits="benefitsBuyout"/>
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
		setTimeout(function () {window.scrollTo(0, -100);}, 1);
	},
	computed: {
		...mapGetters({
			benefitsBuyout: 'benefits/benefitsBuyout'
		})
	}
}
</script>
