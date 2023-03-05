<template>
	<main className="page-main">
		<div className="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div className="grid grid--container">
			<thanks :page-title="pageTitle" />
		</div>
	</main>
</template>
<script>
import {mapGetters} from "vuex";
import seoTags from "@/mixins/seoTags";
import jsonld from "@/mixins/jsonld";

export default {
	mixins: [seoTags, jsonld],
	mounted() {
		setTimeout(function () {
			window.scrollTo(0, -100);
		}, 1);
	}
}
</script>
