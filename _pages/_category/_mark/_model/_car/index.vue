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
import {mapGetters, mapMutations} from "vuex";
import seoTags from "@/mixins/seoTags";
import categoryValidate from "@/mixins/categoryValidate";

export default {
	mixins: [seoTags, categoryValidate],
	mounted() {
		if (this.componentCatalog === 'catalog-used') {
			this.setBackButton(this.currentBackButton)
		}
	},
	methods: {
		...mapMutations({
			setBackButton: 'header/header/SET_BACK_BUTTON'
		})
	},
	beforeDestroy() {
		this.setBackButton({})
	},
	computed: {
		...mapGetters({
			componentCatalog: 'filters/filters/componentCatalog',
		}),
		currentComponent() {
			return this.componentCatalog === 'car' ? 'car' : 'catalog-used'
		},
		currentBackButton() {
			if (this.componentCatalog === 'catalog-used') {
				return {
					title: 'Все модели ' + this.crumbs[2].title,
					link: this.crumbs[2].link
				}
			}
		},
	}
}
</script>
