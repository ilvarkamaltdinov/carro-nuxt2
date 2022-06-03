<template>
	<div class="car__credit-wrap application grid__col-12 grid grid--application">
		<div class="application__form grid__col-4">
			<div class="heading-group heading-group--form">
				<div class="heading-group__wrap">
					<h2 class="heading heading--h2">
						Автокредит
						<span class="heading__promo">
							4.9%
						</span>
					</h2>
					<span class="heading-group__label">
						Получите 100% одобрение
					</span>
				</div>
				<rating-form />
			</div>
			<form-car-credit />
		</div>
		<div class="application__catalog catalog grid__col-8">
			<catalog-item-desktop-form />
		</div>
		<div class="application__banks grid__col-5">
			<div class="application__banks-form">
				<img class="application__banks-img"
				     src="~/static/img/banks/logo-tinkoff.svg"
				     alt=""
				/>
				<div class="application__banks-text">
					и еще 5 банков
				</div>
			</div>
			<div class="application__form-img-wrap">
				<picture>
					<source type="image/webp" media="(min-width: 768px)" srcset="img/form-picture@1x.webp 1x, img/form-picture@2x.webp 2x"/>
					<source media="(min-width: 768px)" srcset="img/form-picture@1x.png 1x, img/form-picture@2x.png 2x"/><img class="application__form-img" src="img/form-picture@1x.png" srcset="img/form-picture@2x.png 2x" loading="lazy" alt=""/>
				</picture>
			</div>
		</div>
		<div class="application__terms grid__col-3">
			<div class="application__terms-item">
				<div class="application__terms-number application__terms-number--stake">
					4.9%
				</div>
				<div class="application__terms-text">
					Ставка по автокредиту
				</div>
			</div>
			<div class="application__terms-item">
				<div class="application__terms-number application__terms-number--payment">
					54 520 ₽
				</div>
				<div class="application__terms-text">
					Ежемеясячный платеж
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>export default {
	components: {}
}
</script>