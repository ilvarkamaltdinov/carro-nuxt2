<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<component :is="currentComponent"
		           :page-title="pageTitle"
		           :crumbs="crumbs"
		           :description="description" />
	</main>
</template>
<script>
import {mapGetters} from "vuex";
import seoTags from "@/mixins/seoTags";

export default {
	mixins: [seoTags],
	validate(ctx) {
		return ctx.params.category === 'used' || ctx.params.category === 'commercial';
	},
	mounted() {
		window.scrollTo(0, 0)
	},
	computed: {
		...mapGetters({
			componentCatalog: 'filters/filters/componentCatalog',
		}),
		currentComponent() {
			return this.componentCatalog === 'car' ? 'car' : 'catalog-used'
		},
	}
}
</script>
