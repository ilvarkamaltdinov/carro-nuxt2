<template>
	<section class="page-main__featured featured grid__col-12">
		<h2 class="heading heading--h2">Подборки</h2>
		<ul class="featured__list grid grid--featured">
			<li class="featured__item featured__item--sedan">
				<nuxt-link to="/used/sedan" class="featured__link">
					<div class="featured__about">
						<h3 class="featured__title">Седаны</h3>
						<div class="featured__text">Классический форм-фактор для тех, кто ценит комфорт и динамику</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="1"/>
					</div>
				</nuxt-link>
			</li>
			<li class="featured__item featured__item--family">
				<nuxt-link to="/used/for-family" class="featured__link">
					<div class="featured__about">
						<h3 class="featured__title">Семейные</h3>
						<div class="featured__text">Вместительные модели для семейных поездок</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="2"/>
					</div>
				</nuxt-link>
			</li>
			<li class="featured__item featured__item--women">
				<nuxt-link to="/used/for-woman" class="featured__link">
					<div class="featured__about">
						<h3 class="featured__title">Для нее</h3>
						<div class="featured__text">Изящные модели для прекрасной половины</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="3"/>
					</div>
				</nuxt-link>
			</li>
			<li class="featured__item featured__item--business">
				<nuxt-link to="/used/business-class" class="featured__link">
					<div class="featured__about">
						<img class="featured__label lazyload"
						     :data-src="require('~/assets/img/featured/featured-label.svg')"
						     alt="carro-select" />
						<h3 class="featured__title">Бизнес-класс</h3>
						<div class="featured__text">Премиальные автомобили для самых взыскательных</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="4"/>
					</div>
				</nuxt-link>
			</li>
			<li class="featured__item featured__item--allroad">
				<nuxt-link to="/used/allroad" class="featured__link">
					<div class="featured__about">
						<h3 class="featured__title">Внедорожники</h3>
						<div class="featured__text">Преодолевайте препятствия с внедорожниками 4WD</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="5"/>
					</div>
				</nuxt-link>
			</li>
			<li class="featured__item featured__item--taxi">
				<nuxt-link to="/used/for-taxi" class="featured__link">
					<div class="featured__about">
						<h3 class="featured__title">Для такси</h3>
						<div class="featured__text">Самые надежные модели для такси</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="6"/>
					</div>
				</nuxt-link>
			</li>
		</ul>
		<button-typical link="/used" text="Все автомобили" class="button--link button--more"/>
	</section>
</template>
<script>
const buttonTypical = () => import('@/components/button/button-typical')
const featuredImg = () => import('@/components/featured/featured-img')
export default {
	components:{buttonTypical, featuredImg}
}
</script>