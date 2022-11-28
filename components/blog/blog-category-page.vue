<template>
	<section class="page-main__blog blog grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">
					{{ title }}
					<span class="heading__promo"></span>
				</h1>
				<span v-if="!index" class="heading-group__label">Лучшее из мира автомобилей</span>
			</div>
		</div>
		<div v-if="index" class="blog__wrap grid__col-12">
			<ul class="blog__list">
				<li class="blog__item"
				    v-for="item in list"
				    :key="item.id">
					<nuxt-link :to="item.url"
					           class="blog__link">
						<div class="blog__item-info">
							<div class="blog__date">{{ item.createdAt }}</div>
							<div class="blog__views">
								{{ item.views }}
								{{
									declension({
										count: Number(item.views),
										one: "просмотр",
										few: "просмотра",
										many: "просмотров",
									})
								}}
							</div>
						</div>
						<div class="blog__item-text">
							<h3 class="blog__item-title">{{ item.page_title }}</h3>
						</div>
						<picture-component v-if="item.image_preview"
						                   classes="blog__img lazyload"
						                   :small="item.image_preview.thumb"
						                   :small-webp="item.image_preview.thumb_webp"
						                   :big="item.image_preview.small"
						                   :big-webp="item.image_preview.small_webp" />
					</nuxt-link>
				</li>
			</ul>
		</div>
		<div v-else class="blog__wrap grid__col-12">
			<ul class="blog__list">
				<li class="blog__item"
				    v-for="item in list"
				    :key="item.id">
					<nuxt-link :to="item.url"
					           class="blog__link">
						<div class="blog__item-info">
							<div class="blog__date">{{ item.createdAt }}</div>
							<div class="blog__views">
								{{ item.views }}
								{{
									declension({
										count: Number(item.views),
										one: "просмотр",
										few: "просмотра",
										many: "просмотров",
									})
								}}
							</div>
						</div>
						<div class="blog__item-text">
							<h3 class="blog__item-title">{{ item.page_title }}</h3>
						</div>
						<picture-component v-if="item.image_preview"
						                   classes="blog__img lazyload"
						                   :small="item.image_preview.thumb"
						                   :small-webp="item.image_preview.thumb_webp"
						                   :big="item.image_preview.small"
						                   :big-webp="item.image_preview.small_webp" />
					</nuxt-link>
				</li>
			</ul>
			<client-only>
				<infinite-loading @infinite="getArticles"
				                  :throttle-limit="2500">
					<!--<div slot="spinner"></div>-->
					<div slot="no-more"></div>
					<div slot="no-results"></div>
				</infinite-loading>
			</client-only>
		</div>
	</section>
</template>
<script>
import {mapActions} from "vuex";
import articlesPaginate from "@/apollo/queries/blog/articlesPaginate";
import declension from "@/mixins/declension";

export default {
	mixins: [declension],
	props: {
		title: String,
		index: Boolean
	},
	data() {
		return {
			page: 1,
			limit: 20,
			list: [],
		};
	},
	methods: {
		...mapActions({
			request: "request",
		}),
		async getArticles($state) {
			let response = await this.request({
				query: articlesPaginate,
				variables: {
					limit: this.limit,
					page: this.page,
					category_url: this.$route.fullPath,
				},
			});
			if (response.data.articlesPaginate.data.length) {
				this.page += 1;
				this.list.push(...response.data.articlesPaginate.data);
				$state.loaded();
			} else {
				$state.complete();
			}
		},
	},
	mounted() {
		if(!this.index){
			setTimeout(function () {
				window.scrollTo(0, -100);
			}, 1);
		}
		
	},
};
</script>
