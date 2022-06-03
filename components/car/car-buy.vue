<template>
	<div class="car__buy">
		<div class="car__price-block">
			<div class="car__price">
				5 520 000 ₽
			</div>
			<tippy-question />
			<div class="car__price-payment">
				В кредит от 32 500 ₽ / мес.
			</div>
		</div>
		<div class="car__buy-block">
			<button class="button button--credit-pay button--link">
				Рассрочка
			</button>
			<button class="button button--trade-in button--link">
				Trade-In
			</button>
			<button class="button button--credit">
				Купить в кредит
			</button>
		</div>
		<div class="car__actions-block">
			<rating />
			<div class="car__actions-buttons">
				<button-autoteka />
				<button-favorite />
				<button-compare />
				<button-call />
			</div>
		</div>
		<div class="car__stock">
			В наличии в автоцентре
			<a href=""
			   class="car__stock-dealer">
				«Автоградъ»
			</a>
		</div>
	</div>
	<!--TODO car__buy--fixed-->
</template>