<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<catalog-used :page-title="pageTitle"/>
	</main>
</template>
<script>

import seoTags from "@/mixins/seoTags";
import jsonld from "@/mixins/jsonld";

export default {
	mixins: [seoTags, jsonld],
	validate(ctx) {
		return ctx.params.category === 'used' || ctx.params.category === 'commercial';
	}
}

</script>