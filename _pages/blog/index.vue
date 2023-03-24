<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs"/>
		</div>
		<div class="grid grid--container">
			<blog/>
		</div>
	</main>
</template>
<script>
import seoTags from "@/mixins/seoTags";
import jsonld from "@/mixins/jsonld";

export default {
	mixins: [seoTags, jsonld],
	mounted() {
		console.log(1)
		setTimeout(function () {window.scrollTo(0, -100);}, 1);
	},
	validate(ctx) {
		console.log(1)
		return ctx.store.getters.showBlog
	},
}
</script>
