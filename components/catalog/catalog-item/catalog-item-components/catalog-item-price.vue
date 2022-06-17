<template>
	<div class="catalog__price-wrap">
		<div class="catalog__price">{{ offer.price | toCurrency }}</div>
		<div class="catalog__oldprice">1 585 000 ₽</div>
		<div class="catalog__credit-price">от {{ offer.price | access_acredit }} / мес.</div>
	</div>
</template>
<script>
import filters from "~/mixins/filters";

export default {
	mixins: [filters],
	props: {
		offer: {
			type: Object,
			default: () => {
			}
		}
	}
}
</script>