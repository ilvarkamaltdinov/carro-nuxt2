<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs"/>
		</div>
		<div class="grid grid--container">
			<sitemap/>
		</div>
	</main>
</template>

<script>
import seoTags from "@/mixins/seoTags";
import jsonld from "@/mixins/jsonld";

export default {
	mixins: [seoTags, jsonld],
	mounted() {
		setTimeout(function () {window.scrollTo(0, -100);}, 1);
	},
}
</script>
