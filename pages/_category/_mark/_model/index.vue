<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<catalog-used :page-title="pageTitle" />
	</main>
</template>
<script>

import seoTags from "@/mixins/seoTags";
import {mapGetters, mapMutations} from "vuex";
import jsonld from "@/mixins/jsonld";
import categoryValidate from "@/mixins/categoryValidate";

export default {
	mixins: [seoTags, jsonld, categoryValidate],
	mounted() {
		this.setBackButton(this.currentBackButton)
	},
	beforeDestroy() {
		this.setBackButton({})
	},
	methods: {
		...mapMutations({
			setBackButton: 'header/header/SET_BACK_BUTTON'
		})
	},
	computed: {
		currentBackButton() {
			return {
				title: 'Все модели ' + this.crumbs[2].title,
				link: this.crumbs[2].link
			}
		},
	}
}
</script>
