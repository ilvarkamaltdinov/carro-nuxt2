<template>
	<div class="form__block form__block--range range">
		<label class="form__range-wrap">
			<span class="form__range-name">Первоначальный взнос:</span>
			<!--TODO в будущем переписать toCurrency и исправить этот костыль -->
			<span class="form__range-value" v-if="sum"> {{ sum | toCurrency}}</span>
			<span class="form__range-value" v-else> 0 ₽</span>
		</label>
		<range-slider
				range-class="range-payment"
				:options="getPaymentOptions()"
				@input="changePayment">
		</range-slider>
	</div>
</template>
<script>
import filters from "@/mixins/filters";
export default {
	mixins: [filters],
	props: {
		values: Array,
		value: String,
		sum: Number
	},
	methods: {
		changePayment(value) {
			this.$emit('changePayment', value)
		},
		getPaymentOptions() {
			return {
				grid: true,
				values: this.values.map(val => {
					return val
				}),
				from: this.values.indexOf(this.value),
			};
		}
	}
}
</script>