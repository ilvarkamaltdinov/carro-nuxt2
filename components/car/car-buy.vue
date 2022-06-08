<template>
	<div class="car__buy">
		<div class="car__price-block">
			<div class="car__price">
				{{ car.price | toCurrency }}
			</div>
			<tippy-question />
			<div class="car__price-payment">
				В кредит от {{ car.price | access_acredit }} / мес.
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
<script>
import filters from "~/mixins/filters";
import {mapGetters} from "vuex";
export default {
	mixins: [filters],
	computed:{
		...mapGetters({
			car: 'catalog/catalog-cars/car'
		})
	}
}
</script>