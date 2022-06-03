<template>
	<section class="page-main__featured featured grid__col-12">
		<h2 class="heading heading--h2">Подборки</h2>
		<ul class="featured__list grid grid--featured">
			<li class="featured__item featured__item--sedan">
				<a class="featured__link"
				   href="">
					<div class="featured__about">
						<h3 class="featured__title">Седаны</h3>
						<div class="featured__text">Классический форм-фактор для тех, кто ценит комфорт и динамику</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="1"/>
					</div>
				</a>
			</li>
			<li class="featured__item featured__item--family">
				<a class="featured__link"
				   href="">
					<div class="featured__about">
						<h3 class="featured__title">Семейные</h3>
						<div class="featured__text">Вместительные модели для семейных поездок</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="2"/>
					</div>
				</a>
			</li>
			<li class="featured__item featured__item--women">
				<a class="featured__link"
				   href="">
					<div class="featured__about">
						<h3 class="featured__title">Для нее</h3>
						<div class="featured__text">Изящные модели для прекрасной половины</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="3"/>
					</div>
				</a>
			</li>
			<li class="featured__item featured__item--business">
				<a class="featured__link"
				   href="">
					<div class="featured__about">
						<img class="featured__label"
						     src="img/featured/featured-label.svg"
						     alt="" />
						<h3 class="featured__title">Бизнес-класс</h3>
						<div class="featured__text">Премиальные автомобили для самых взыскательных</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="4"/>
					</div>
				</a>
			</li>
			<li class="featured__item featured__item--allroad">
				<a class="featured__link"
				   href="">
					<div class="featured__about">
						<h3 class="featured__title">Внедорожники</h3>
						<div class="featured__text">Преодолевайте препятствия с внедорожниками 4WD</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="5"/>
					</div>
				</a>
			</li>
			<li class="featured__item featured__item--taxi">
				<a class="featured__link"
				   href="">
					<div class="featured__about">
						<h3 class="featured__title">Для такси</h3>
						<div class="featured__text">Самые надежные модели для такси</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="6"/>
					</div>
				</a>
			</li>
		</ul>
		<button-more>Все подборки</button-more>
	</section>
</template>
<script>export default {
	components: {}
}
</script>