<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<catalog-used offers :page-title="pageTitle" />
	</main>
</template>
<script>
import seoTags from "@/mixins/seoTags";
import jsonld from "@/mixins/jsonld";
import {mapGetters} from "vuex";

export default {
	mixins: [seoTags, jsonld],
	validate(ctx) {
		return ctx.store.getters.isMoscow
	},
	mounted() {
		setTimeout(function () {window.scrollTo(0, -100);}, 1);
	}
}
</script>
