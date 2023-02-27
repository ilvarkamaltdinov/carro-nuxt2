<template>
	<section class="page-main__blog blog grid">
		<div class="heading-group heading-group--h1">
			<div v-if="index"
			     class="heading-group__wrap">
				<h2 class="heading heading--h2-blog heading--h2">Свежее в блоге</h2>
			</div>
			<div v-else
			     class="heading-group__wrap">
				<h1 class="heading heading--h1">
					Блог
					<span class="heading__promo"></span>
				</h1>
				<span class="heading-group__label">Лучшее из мира автомобилей</span>
			</div>
		</div>
		<blog-category :list="category.articles"
		               :index="index"
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
	props: {
		index: Boolean
		
	},
	data() {
		return {
			categories: []
		}
	},
	async fetch() {
		let response = await this.request({query: articleCategory, variables: {limit: 7}})
		this.index ? this.categories = [response.data.articleCategory[0]] : this.categories = response.data.articleCategory
	},
	mounted() {
		setTimeout(function () {
			window.scrollTo(0, -100);
		}, 1);
	}
}
</script>
