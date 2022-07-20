<template>
	<section class="page-main__blog blog grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">
					{{ title }}
					<span class="heading__promo"></span>
				</h1>
				<span class="heading-group__label">Лучшее из мира автомобилей</span>
			</div>
		</div>
		<div class="blog__wrap grid__col-12">
			<ul class="blog__list">
				<li class="blog__item"
				    v-for="item in list"
				    :key="item.id">
					<nuxt-link :to="item.url"
					           class="blog__link">
						<div class="blog__item-info">
							<div class="blog__date">{{ item.createdAt }}</div>
							<div class="blog__views">{{ item.views }} {{
									declension({
										count: Number(item.views),
										one: 'просмотр',
										few: 'просмотра',
										many: 'просмотров'
									})
							                         }}
							</div>
						</div>
						<div class="blog__item-text">
							<h3 class="blog__item-title">{{ item.page_title }}</h3>
						</div>
						<picture v-if="item.image_preview">
							<source media="(min-width: 768px)"
							        type="image/webp"
							        :data-srcset="`${item.image_preview.thumb_webp} 1x, ${item.image_preview.small_webp} 2x`" />
							<source media="(min-width: 768px)"
							        :data-srcset="`${item.image_preview.thumb} 1x, ${item.image_preview.small} 2x`" />
							<img class="blog__img lazyload"
							     :data-src="item.image_preview.thumb"
							     :data-srcset="`${item.image_preview.small} 2x`"
							     :alt="item.page_title" />
						</picture>
					</nuxt-link>
				</li>
			</ul>
			<client-only>
				<infinite-loading @infinite="getArticles"
				                  :throttle-limit="2500">
					<!--<div slot="spinner">ЗАГРУЗКА ЖОПЫ</div>-->
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
		title: String
	},
	data() {
		return {
			page: 1,
			limit: 20,
			list: []
		}
	},
	methods: {
		...mapActions({
			request: 'request'
		}),
		async getArticles($state) {
			let response = await this.request({
				query: articlesPaginate,
				variables: {
					limit: this.limit,
					page: this.page,
					category_url: this.$route.fullPath
				}
			})
			if (response.data.articlesPaginate.data.length) {
				this.page += 1
				this.list.push(...response.data.articlesPaginate.data)
				$state.loaded()
			} else {
				$state.complete()
				console.log("complete")
			}
			
			
		}
	},
	mounted() {
		window.scrollTo(0, 0)
	}
}
</script>