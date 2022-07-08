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
		<!--<div class="blog__wrap grid__col-12">-->
		<!--	<h2 class="heading heading&#45;&#45;h2">Новости</h2>-->
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
		<!--				<img src="~/assets/img/blog/blog-1@2x.png"-->
		<!--				     alt="">-->
		<!--				&lt;!&ndash;<picture>&ndash;&gt;-->
		<!--				&lt;!&ndash;	<source type="image/webp"&ndash;&gt;-->
		<!--				&lt;!&ndash;	        media="(min-width: 768px)"&ndash;&gt;-->
		<!--				&lt;!&ndash;	        srcset="~/assets/img/blog/blog-1@1x.webp 1x,~/assets/img/blog/blog-1@2x.webp 2x" />&ndash;&gt;-->
		<!--				&lt;!&ndash;	<source media="(min-width: 768px)"&ndash;&gt;-->
		<!--				&lt;!&ndash;	        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />&ndash;&gt;-->
		<!--				&lt;!&ndash;	<img class="blog__img"&ndash;&gt;-->
		<!--				&lt;!&ndash;	     src="~/assets/img/blog/blog-1@1x.png"&ndash;&gt;-->
		<!--				&lt;!&ndash;	     srcset="~/assets/img/blog/blog-1@2x.png 2x"&ndash;&gt;-->
		<!--				&lt;!&ndash;	     &ndash;&gt;-->
		<!--				&lt;!&ndash;	     alt="" />&ndash;&gt;-->
		<!--				&lt;!&ndash;</picture>&ndash;&gt;-->
		<!--			</a>-->
		<!--		</li>-->
		<!--		<li class="blog__item">-->
		<!--			<nuxt-link to="/blog/news" class="blog__link"-->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
		<!--					     alt="" />-->
		<!--				</picture>-->
		<!--			</nuxt-link>-->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
		<!--					     alt="" />-->
		<!--				</picture>-->
		<!--			</a>-->
		<!--		</li>-->
		<!--	</ul>-->
		<!--	<button-typical text="Показать больше" class="button&#45;&#45;link button&#45;&#45;more"/>-->
		<!--</div>-->
		<!--<div class="blog__wrap grid__col-12">-->
		<!--	<h2 class="heading heading&#45;&#45;h2">Статьи</h2>-->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
		<!--					     alt="" />-->
		<!--				</picture>-->
		<!--			</a>-->
		<!--		</li>-->
		<!--	</ul>-->
		<!--	<button-typical text="Показать больше" class="button&#45;&#45;link button&#45;&#45;more"/>-->
		<!--</div>-->
		<!--<div class="blog__wrap grid__col-12">-->
		<!--	<h2 class="heading heading&#45;&#45;h2">Рейтинги</h2>-->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
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
		<!--					        srcset="~/assets/img/blog/blog-1@1x.png 1x,~/assets/img/blog/blog-1@2x.png 2x" />-->
		<!--					<img class="blog__img"-->
		<!--					     src="~/assets/img/blog/blog-1@1x.png"-->
		<!--					     srcset="~/assets/img/blog/blog-1@2x.png 2x"-->
		<!--					     -->
		<!--					     alt="" />-->
		<!--				</picture>-->
		<!--			</a>-->
		<!--		</li>-->
		<!--	</ul>-->
		<!--	<button-typical text="Показать больше" class="button&#45;&#45;link button&#45;&#45;more"/>-->
		<!--</div>-->
	</section>
</template>