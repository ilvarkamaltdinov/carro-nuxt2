<template>
	<div class="catalog__price-wrap">
		<div class="catalog__price">{{ price | toCurrency }}</div>
		<!--<div class="catalog__oldprice">1 585 000 ₽</div>-->
		<div class="catalog__credit-price">от {{ price | access_acredit }} / мес.</div>
    <div class="catalog__vin">
      <svg-icon name="icon-check"/>
      VIN
    </div>
	</div>
</template>
<script>
import filters from "~/mixins/filters";

export default {
	mixins: [filters],
	props: {
		isForm: {
			type: Boolean,
			default: false
		},
		price: Number
	}
}
</script>
