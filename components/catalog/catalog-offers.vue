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
						<rating-dealer/>
					</div>
				</div>
				<div class="dealers__item-img-wrap">
					<picture>
						<source type="image/webp"
						        media="(min-width: 768px)"
						        srcset="~/static/img/dealers/photos/autograd/dealer-3@1x.webp 1x,~/static/img/dealers/photos/autograd/dealer-3@2x.webp 2x" />
						<img class="dealers__item-img"
						     src="~/static/img/dealers/photos/autograd/dealer-3@1x.jpg"
						     srcset="~/static/img/dealers/photos/autograd/dealer-3@2x.jpg 2x"
						     loading="lazy"
						     alt="" />
					</picture>
					<button-show>Подробнее о дилере</button-show>
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
						<rating-dealer/>
					</div>
				</div>
				<div class="dealers__item-img-wrap">
					<picture>
						<source type="image/webp"
						        media="(min-width: 768px)"
						        srcset="~/static/img/dealers/photos/autograd/dealer-3@1x.webp 1x,~/static/img/dealers/photos/autograd/dealer-3@2x.webp 2x" />
						<img class="dealers__item-img"
						     src="~/static/img/dealers/photos/autograd/dealer-3@1x.jpg"
						     srcset="~/static/img/dealers/photos/autograd/dealer-3@2x.jpg 2x"
						     loading="lazy"
						     alt="" />
					</picture>
					<button-show>Подробнее о дилере</button-show>
					<a class="button button--show button--show-link"
					   href=""
					   target="_blank">Сайт автоцентра
					</a>
				</div>
			</div>
		</div>
		<div class="grid__col-4">
			<filter-desktop/>
		</div>
		<div class="grid__col-8">
			<filter-sort/>
			<button-typical text="Показать больше" class="button--link button--more"/>
			<pagination/>
		</div>
	</section>
</template>