<template>
	<div class="catalog__price-wrap">
		<div class="catalog__price">{{ price | toCurrency }}</div>
		<!--<div class="catalog__oldprice">1 585 000 ₽</div>-->
		<div class="catalog__credit-price">{{ price | access_acredit }} / мес. без взноса</div>
		<div class="catalog__vin vin"
		     v-if="vin"
		     v-tippy="{
				content:`<div class='tippy__text'>VIN-номер проверен на предмет нахождения в розыске, угоне, залоге, использования в такси, попадания в ДТП, соответствия количества владельцев.</div>`,
				animation:'scale',
				arrow: true,
			}">
			<svg-icon name="icon-check" />
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
		vin: String,
		price: Number
	}
}
</script>
