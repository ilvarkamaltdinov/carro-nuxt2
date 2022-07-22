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
import jsonld from "@/mixins/jsonld";

export default {
	mixins: [seoTags, jsonld],
	computed: {
		...mapGetters({
			benefitsTradeIn: 'benefits/benefitsTradeIn'
		})
	}
}
</script>