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
					     v-html="article.body">
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
		<!--<div class="blog__wrap grid__col-12">-->
		<!--	<h2 class="heading heading&#45;&#45;h2">Еще новости</h2>-->
		<!--	<ul class="blog__list">-->
		<!--		<li class="blog__item blog__item&#45;&#45;vertical">-->
		<!--			<a class="blog__link"-->
		<!--			   href="">-->
		<!--				<div class="blog__item-info">-->
		<!--					<div class="blog__date">05.05.2022</div>-->
		<!--					<div class="blog__views">69 просмотров</div>-->
		<!--				</div>-->
		<!--				<div class="blog__item-text">-->
		<!--					<h3 class="blog__item-title">Опции в автомобиле, за которые не стоит переплачивать</h3>-->
		<!--				</div>-->
		<!--				<picture>-->
		<!--					<source type="image/webp"-->
		<!--					        media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.webp 1x,~/assets/img/blog/blog-1@2x.webp 2x" />-->
		<!--					<source media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.jpg 1x,~/assets/img/blog/blog-1@2x.jpg 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.jpg"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.jpg 2x"-->
		<!--					     loading="lazy"-->
		<!--					     alt="" />-->
		<!--				</picture>-->
		<!--			</a>-->
		<!--		</li>-->
		<!--		<li class="blog__item">-->
		<!--			<a class="blog__link"-->
		<!--			   href="">-->
		<!--				<div class="blog__item-info">-->
		<!--					<div class="blog__date">05.05.2022</div>-->
		<!--					<div class="blog__views">69 просмотров</div>-->
		<!--				</div>-->
		<!--				<div class="blog__item-text">-->
		<!--					<h3 class="blog__item-title">Опции в автомобиле, за которые не стоит переплачивать</h3>-->
		<!--				</div>-->
		<!--				<picture>-->
		<!--					<source type="image/webp"-->
		<!--					        media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.webp 1x,~/assets/img/blog/blog-1@2x.webp 2x" />-->
		<!--					<source media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.jpg 1x,~/assets/img/blog/blog-1@2x.jpg 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.jpg"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.jpg 2x"-->
		<!--					     loading="lazy"-->
		<!--					     alt="" />-->
		<!--				</picture>-->
		<!--			</a>-->
		<!--		</li>-->
		<!--		<li class="blog__item">-->
		<!--			<a class="blog__link"-->
		<!--			   href="">-->
		<!--				<div class="blog__item-info">-->
		<!--					<div class="blog__date">05.05.2022</div>-->
		<!--					<div class="blog__views">69 просмотров</div>-->
		<!--				</div>-->
		<!--				<div class="blog__item-text">-->
		<!--					<h3 class="blog__item-title">Опции в автомобиле, за которые не стоит переплачивать</h3>-->
		<!--				</div>-->
		<!--				<picture>-->
		<!--					<source type="image/webp"-->
		<!--					        media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.webp 1x,~/assets/img/blog/blog-1@2x.webp 2x" />-->
		<!--					<source media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.jpg 1x,~/assets/img/blog/blog-1@2x.jpg 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.jpg"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.jpg 2x"-->
		<!--					     loading="lazy"-->
		<!--					     alt="" />-->
		<!--				</picture>-->
		<!--			</a>-->
		<!--		</li>-->
		<!--		<li class="blog__item blog__item&#45;&#45;horizontal">-->
		<!--			<a class="blog__link"-->
		<!--			   href="">-->
		<!--				<div class="blog__item-info">-->
		<!--					<div class="blog__date">05.05.2022</div>-->
		<!--					<div class="blog__views">69 просмотров</div>-->
		<!--				</div>-->
		<!--				<div class="blog__item-text">-->
		<!--					<h3 class="blog__item-title">Опции в автомобиле, за которые не стоит переплачивать</h3>-->
		<!--				</div>-->
		<!--				<picture>-->
		<!--					<source type="image/webp"-->
		<!--					        media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.webp 1x,~/assets/img/blog/blog-1@2x.webp 2x" />-->
		<!--					<source media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.jpg 1x,~/assets/img/blog/blog-1@2x.jpg 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.jpg"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.jpg 2x"-->
		<!--					     loading="lazy"-->
		<!--					     alt="" />-->
		<!--				</picture>-->
		<!--			</a>-->
		<!--		</li>-->
		<!--		<li class="blog__item">-->
		<!--			<a class="blog__link"-->
		<!--			   href="">-->
		<!--				<div class="blog__item-info">-->
		<!--					<div class="blog__date">05.05.2022</div>-->
		<!--					<div class="blog__views">69 просмотров</div>-->
		<!--				</div>-->
		<!--				<div class="blog__item-text">-->
		<!--					<h3 class="blog__item-title">Опции в автомобиле, за которые не стоит переплачивать</h3>-->
		<!--				</div>-->
		<!--				<picture>-->
		<!--					<source type="image/webp"-->
		<!--					        media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.webp 1x,~/assets/img/blog/blog-1@2x.webp 2x" />-->
		<!--					<source media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.jpg 1x,~/assets/img/blog/blog-1@2x.jpg 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.jpg"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.jpg 2x"-->
		<!--					     loading="lazy"-->
		<!--					     alt="" />-->
		<!--				</picture>-->
		<!--			</a>-->
		<!--		</li>-->
		<!--		<li class="blog__item">-->
		<!--			<a class="blog__link"-->
		<!--			   href="">-->
		<!--				<div class="blog__item-info">-->
		<!--					<div class="blog__date">05.05.2022</div>-->
		<!--					<div class="blog__views">69 просмотров</div>-->
		<!--				</div>-->
		<!--				<div class="blog__item-text">-->
		<!--					<h3 class="blog__item-title">Опции в автомобиле, за которые не стоит переплачивать</h3>-->
		<!--				</div>-->
		<!--				<picture>-->
		<!--					<source type="image/webp"-->
		<!--					        media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.webp 1x,~/assets/img/blog/blog-1@2x.webp 2x" />-->
		<!--					<source media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.jpg 1x,~/assets/img/blog/blog-1@2x.jpg 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.jpg"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.jpg 2x"-->
		<!--					     loading="lazy"-->
		<!--					     alt="" />-->
		<!--				</picture>-->
		<!--			</a>-->
		<!--		</li>-->
		<!--		<li class="blog__item blog__item&#45;&#45;big">-->
		<!--			<a class="blog__link"-->
		<!--			   href="">-->
		<!--				<div class="blog__item-info">-->
		<!--					<div class="blog__date">05.05.2022</div>-->
		<!--					<div class="blog__views">69 просмотров</div>-->
		<!--				</div>-->
		<!--				<div class="blog__item-text">-->
		<!--					<h3 class="blog__item-title">Опции в автомобиле, за которые не стоит переплачивать</h3>-->
		<!--				</div>-->
		<!--				<picture>-->
		<!--					<source type="image/webp"-->
		<!--					        media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.webp 1x,~/assets/img/blog/blog-1@2x.webp 2x" />-->
		<!--					<source media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.jpg 1x,~/assets/img/blog/blog-1@2x.jpg 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.jpg"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.jpg 2x"-->
		<!--					     loading="lazy"-->
		<!--					     alt="" />-->
		<!--				</picture>-->
		<!--			</a>-->
		<!--		</li>-->
		<!--		<li class="blog__item blog__item&#45;&#45;vertical">-->
		<!--			<a class="blog__link"-->
		<!--			   href="">-->
		<!--				<div class="blog__item-info">-->
		<!--					<div class="blog__date">05.05.2022</div>-->
		<!--					<div class="blog__views">69 просмотров</div>-->
		<!--				</div>-->
		<!--				<div class="blog__item-text">-->
		<!--					<h3 class="blog__item-title">Опции в автомобиле, за которые не стоит переплачивать</h3>-->
		<!--				</div>-->
		<!--				<picture>-->
		<!--					<source type="image/webp"-->
		<!--					        media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.webp 1x,~/assets/img/blog/blog-1@2x.webp 2x" />-->
		<!--					<source media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.jpg 1x,~/assets/img/blog/blog-1@2x.jpg 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.jpg"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.jpg 2x"-->
		<!--					     loading="lazy"-->
		<!--					     alt="" />-->
		<!--				</picture>-->
		<!--			</a>-->
		<!--		</li>-->
		<!--		<li class="blog__item">-->
		<!--			<a class="blog__link"-->
		<!--			   href="">-->
		<!--				<div class="blog__item-info">-->
		<!--					<div class="blog__date">05.05.2022</div>-->
		<!--					<div class="blog__views">69 просмотров</div>-->
		<!--				</div>-->
		<!--				<div class="blog__item-text">-->
		<!--					<h3 class="blog__item-title">Опции в автомобиле, за которые не стоит переплачивать</h3>-->
		<!--				</div>-->
		<!--				<picture>-->
		<!--					<source type="image/webp"-->
		<!--					        media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.webp 1x,~/assets/img/blog/blog-1@2x.webp 2x" />-->
		<!--					<source media="(min-width: 768px)"-->
		<!--					        srcset="~/assets/img/blog/blog-1@1x.jpg 1x,~/assets/img/blog/blog-1@2x.jpg 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.jpg"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.jpg 2x"-->
		<!--					     loading="lazy"-->
		<!--					     alt="" />-->
		<!--				</picture>-->
		<!--			</a>-->
		<!--		</li>-->
		<!--	</ul>-->
		<!--	<button-typical text="Показать больше"-->
		<!--	                class="button&#45;&#45;link button&#45;&#45;more" />-->
		<!--</div>-->
	</section>
</template>
<script>
import declension from "@/mixins/declension";

export default {
	mixins: [declension],
	props: {
		article: Object
	}
}
</script>