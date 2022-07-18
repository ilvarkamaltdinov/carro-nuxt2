<template>
	<section class="page-main__blog blog grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">Блог
					<span class="heading__promo"></span>
				</h1>
				<span class="heading-group__label">Лучшее из мира автомобилей</span>
			</div>
		</div>
		<blog-category :list="category.articles"
		               :title="category.page_title"
		               :url="category.url"
		               v-for="category in categories"
		               :key="category.id" />
	</section>
</template>
<script>
import {mapActions} from "vuex";
import articleCategory from "@/apollo/queries/blog/articleCategory";

export default {
	methods: {
		...mapActions({
			request: 'request'
		})
	},
	data() {
		return {
			categories: []
		}
	},
	async fetch() {
		let response = await this.request({query: articleCategory, variables: {limit: 7}})
		this.categories = response.data.articleCategory
	},
	mounted() {
		window.scrollTo(0, 0)
	}
}
</script>