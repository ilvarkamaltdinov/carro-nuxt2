<template>
	<article class="catalog__item catalog__item--desktop-l catalog__item--desktop-form">
		<div class="catalog__img">
			<div class="swiper">
				<div class="swiper-wrapper">
					<catalog-item-img :key="img"
					                  :img="img"
					                  v-for="img in catalogItemImgCount" />
				</div>
			</div>
			<div class="swiper__buttons-wrapper">
				<button class="swiper-button swiper-button-next">
					<svg-icon class="swiper-button__icon" name="arrow"/>
				</button>
				<button class="swiper-button swiper-button-prev">
					<svg-icon class="swiper-button__icon" name="arrow"/>
				</button>
			</div>
		</div>
		<div class="catalog__info-wrap">
			<div class="catalog__info">
				<div class="catalog__title-wrap">
					<div class="catalog__title">
						<h3 class="catalog__heading">
							<a href=""
							   class="catalog__title-link">
								<span class="catalog__title"> Land Rover Range Rover Sport</span>
								<span class="catalog__year"> 2020</span>
							</a>
						</h3>
					</div>
					<vin/>
				</div>
				<div class="catalog__price-wrap">
					<div class="catalog__price">
						1 565 000 ₽
					</div>
					<div class="catalog__oldprice">
						1 585 000 ₽
					</div>
					<div class="catalog__credit-price">
						В кредит от 32 500 / мес.
					</div>
				</div>
			</div>
			<div class="catalog__tech">
				<rating/>
				<ul class="catalog__tech-list">
					<li class="catalog__tech-item">132 000 км</li>
					<li class="catalog__tech-item">5.5 л / 388 л.с.</li>
					<li class="catalog__tech-item">АКПП</li>
					<li class="catalog__tech-item">Бензин</li>
					<li class="catalog__tech-item">3 владельца</li>
					<li class="catalog__tech-item">Передний</li>
				</ul>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	components: {},
	
	data() {
		return {
			catalogItemImgCount: 6
		}
	}
}
</script>