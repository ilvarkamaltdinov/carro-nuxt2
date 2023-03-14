<template>
	<section class="page-main__blog blog grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">{{ article.page_title }}</h1>
				<span class="heading__promo"></span>
				<span class="heading-group__label heading-group__label--car">
					<span class="heading-group__year">{{ article.createdAt }}</span>
					{{ article.views }}
					{{
						declension({
							count: Number(article.views),
							one: 'просмотр',
							few: 'просмотра',
							many: 'просмотров'
						})
					}}
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
							<picture-component classes="text__img text__img--blog lazyload"
							                   :small="article.image.medium"
							                   :small-webp="article.image.medium_webp"
							                   :big="article.image.src"
							                   :big-webp="article.image.src" />
						</div>
					</div>
					<blog-slider v-if="article.image_slide && article.image_slide.length" :images="article.image_slide"/>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import declension from "@/mixins/declension";
import domParser from "@/mixins/domParser";

export default {
	components: {},
	
	mixins: [declension, domParser],
	props: {
		article: Object
	}
}
</script>
