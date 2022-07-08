<template>
	<section class="page-main__catalog catalog grid">
		<div class="heading-group heading-group--h1 grid__col-12">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">Предложения автосалонов Москвы</h1>
				<span class="heading-group__label">2 242 автомобиля в наличии</span>
			</div>
		</div>
		<div class="grid__col-12 grid dealers dealers--catalog">
			<div class="dealers__item dealers__item--catalog grid__col-6">
				<div class="dealers__features features">
					<div class="heading-group">
						<div class="heading-group__wrap">
							<h2 class="heading heading--h2">АвтоГрадъ</h2>
							<span class="heading-group__label">Старейший автоцентр Москвы</span>
						</div>
						<rating :max="100" :rating="100" />
					</div>
				</div>
				<div class="dealers__item-img-wrap">
					<!--<picture>-->
					<!--	<source type="image/webp"-->
					<!--	        media="(min-width: 768px)"-->
					<!--	        srcset="~/assets/img/dealers/photos/autograd/dealer-3@1x.webp 1x,~/assets/img/dealers/photos/autograd/dealer-3@2x.webp 2x" />-->
					<!--	<img class="dealers__item-img"-->
					<!--	     src="~/assets/img/dealers/photos/autograd/dealer-3@1x.jpg"-->
					<!--	     srcset="~/assets/img/dealers/photos/autograd/dealer-3@2x.jpg 2x"-->
					<!--	     -->
					<!--	     alt="" />-->
					<!--</picture>-->
					<img class="dealers__item-img"
					     src="~/assets/img/dealers/photos/autograd/dealer-3@1x.jpg"
					
					     alt="" />
					<!--<button-show>Подробнее о дилере</button-show>-->
					<!--<button-show>Подробнее о дилере</button-show>--2x
					>
					<a class="button button--show button--show-link"
					   href=""
					   target="_blank">Сайт автоцентра
					</a>
				</div>
			</div>
			<div class="dealers__item dealers__item--catalog grid__col-6">
				<div class="dealers__features features">
					<div class="heading-group">
						<div class="heading-group__wrap">
							<h2 class="heading heading--h2">Prime</h2>
							<span class="heading-group__label">Старейший автоцентр Москвы</span>
						</div>
						<rating :max="100" :rating="100" />
					</div>
				</div>
				<div class="dealers__item-img-wrap">
					<!--<picture>-->
					<!--	<source type="image/webp"-->
					<!--	        media="(min-width: 768px)"-->
					<!--	        srcset="~/assets/img/dealers/photos/autograd/dealer-3@1x.webp 1x,~/assets/img/dealers/photos/autograd/dealer-3@2x.webp 2x" />-->
					<!--	<img class="dealers__item-img"-->
					<!--	     src="~/assets/img/dealers/photos/autograd/dealer-3@1x.jpg"-->
					<!--	     srcset="~/assets/img/dealers/photos/autograd/dealer-3@2x.jpg 2x"-->
					<!--	     -->
					<!--	     alt="" />-->
					<!--</picture>-->
					<img class="dealers__item-img"
					     src="~/assets/img/dealers/photos/autograd/dealer-3@1x.jpg"
					     alt="" />
					<!--<button-show>Подробнее о дилере</button-show>-->
					<a class="button button--show button--show-link"
					   href=""
					   target="_blank">Сайт автоцентра
					</a>
				</div>
			</div>
		</div>
		<!--<div class="grid__col-4">-->
		<!--	<filter-desktop/>-->
		<!--</div>-->
		<!--<div class="grid__col-8">-->
		<!--	<filter-sort/>-->
		<!--	&lt;!&ndash;<button-typical text="Показать больше" class="button&#45;&#45;link button&#45;&#45;more"/>&ndash;&gt;-->
		<!--	&lt;!&ndash;<pagination/>&ndash;&gt;-->
		<!--</div>-->
	</section>
</template>