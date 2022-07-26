<template>
	<section class="page-main__blog blog grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">{{ article.page_title }}</h1>
				<span class="heading__promo"></span>
				<span class="heading-group__label heading-group__label--car">
					{{ article.views }}
					{{
						declension({
							count: Number(article.views),
							one: 'просмотр',
							few: 'просмотра',
							many: 'просмотров'
						})
					}}
					<span class="heading-group__year">{{ article.createdAt }}</span>
				</span>
			</div>
		</div>
		<div class="blog__text text grid__col-12">
			<div class="grid">
				<div class="text__wrap grid__col-12">
					<div class="text__content"
					     v-if="article.body"
					     v-html="domParse(article.body)">
					</div>
					<div class="text__content"
					     v-if="article.image">
						<div class="text__img-wrap">
							<picture>
								<source media="(min-width: 768px)"
								        type="image/webp"
								        :data-srcset="`${article.image.medium_webp} 1x, ${article.image.large_webp} 2x`" />
								<source media="(min-width: 768px)"
								        :data-srcset="`${article.image.medium} 1x, ${article.image.large} 2x`" />
								<img class="text__img text__img--blog lazyload"
								     :data-src="article.image.medium"
								     :data-srcset="`${article.image.large} 2x`"
								     :alt="article.page_title" />
							</picture>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import declension from "@/mixins/declension";
import domParser from "@/mixins/domParser";

export default {
	mixins: [declension, domParser],
	props: {
		article: Object
	}
}
</script>