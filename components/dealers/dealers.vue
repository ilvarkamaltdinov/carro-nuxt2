<template>
	
	<section class="page-main__dealers dealers grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">Автосалоны
					<span class="heading__promo"></span>
				</h1>
				<span class="heading-group__label">Партнеры carro.ru</span>
			</div>
		</div>
		<div class="dealers__item grid__col-12">
			<div class="dealers__features features">
				<div class="heading-group">
					<div class="heading-group__wrap">
						<h2 class="heading heading--h2">АвтоГрадъ</h2>
						<span class="heading-group__label">Старейший автоцентр Москвы</span>
					</div>
					<rating-dealer/>
				</div>
				<div class="features__group">
					<h3 class="heading heading--h3">Адрес:</h3>
					<ul class="features__list">
						<li class="features__item">г. Москва, Варшавское шоссе, д. 170Е</li>
						<li class="features__item">м. Аннино</li>
					</ul>
				</div>
				<div class="features__group">
					<h3 class="heading heading--h3">Телефон:</h3>
					<ul class="features__list">
						<li class="features__item">
							<a href="tel:+78007002211">+7 (800) 700-22-11</a>
						</li>
					</ul>
				</div>
				<div class="features__group">
					<h3 class="heading heading--h3">Режим работы:</h3>
					<ul class="features__list">
						<li class="features__item">c 9:00 до 21:00</li>
						<li class="features__item">без выходных</li>
					</ul>
				</div>
				<button-show>Подробнее о дилере</button-show>
				<a class="button button--show button--show-link"
				   href=""
				   target="_blank">Сайт автоцентра
				</a>
			</div>
			<div class="dealers__item-img-wrap">
				<picture>
					<source type="image/webp"
					        media="(min-width: 768px)"
					        srcset="~/assets/img/dealers/photos/autograd/dealer-3@1x.webp 1x,~/assets/img/dealers/photos/autograd/dealer-3@2x.webp 2x" />
					<img class="dealers__item-img"
					     src="~/assets/img/dealers/photos/autograd/dealer-3@1x.jpg"
					     srcset="~/assets/img/dealers/photos/autograd/dealer-3@2x.jpg 2x"
					     loading="lazy"
					     alt="" />
				</picture>
			</div>
		</div>
		<div class="dealers__item grid__col-12">
			<div class="dealers__features features">
				<div class="heading-group">
					<div class="heading-group__wrap">
						<h2 class="heading heading--h2">Prime</h2>
						<span class="heading-group__label">Один из крупнейших автоцентров</span>
					</div>
					<rating-dealer/>
				</div>
				<div class="features__group">
					<h3 class="heading heading--h3">Адрес:</h3>
					<ul class="features__list">
						<li class="features__item">г. Москва, Варшавское шоссе, д. 170Е</li>
						<li class="features__item">м. Аннино</li>
					</ul>
				</div>
				<div class="features__group">
					<h3 class="heading heading--h3">Телефон:</h3>
					<ul class="features__list">
						<li class="features__item">
							<a href="tel:+78007002211">+7 (800) 700-22-11</a>
						</li>
					</ul>
				</div>
				<div class="features__group">
					<h3 class="heading heading--h3">Режим работы:</h3>
					<ul class="features__list">
						<li class="features__item">c 9:00 до 21:00</li>
						<li class="features__item">без выходных</li>
					</ul>
				</div>
				<button-show>Подробнее о дилере</button-show>
				<a class="button button--show button--show-link"
				   href=""
				   target="_blank">Сайт автоцентра
				</a>
			</div>
			<div class="dealers__item-img-wrap">
				<picture>
					<source type="image/webp"
					        media="(min-width: 768px)"
					        srcset="~/assets/img/dealers/photos/autograd/dealer-3@1x.webp 1x,~/assets/img/dealers/photos/autograd/dealer-3@2x.webp 2x" />
					<img class="dealers__item-img"
					     src="~/assets/img/dealers/photos/autograd/dealer-3@1x.jpg"
					     srcset="~/assets/img/dealers/photos/autograd/dealer-3@2x.jpg 2x"
					     loading="lazy"
					     alt="" />
				</picture>
			</div>
		</div>
	</section>
</template>