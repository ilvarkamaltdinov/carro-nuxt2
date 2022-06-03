<template>
	<div class="form__block form__block--range range">
		<label class="form__range-wrap">
			<span class="form__range-name">Первоначальный взнос:</span>
			<span class="form__range-value"> {{sum}}</span>
		</label>
		<range-slider
				range-class="range-payment"
				:options="getPaymentOptions()"
				@input="changePayment">
		</range-slider>
	</div>
</template>
<script>
export default {
	props: {
		values: {
			type: Array,
			default: () => []
		},
		value: {
			type: String,
			default: ''
		},
		sum: {
			type: String,
			default: ''
		}
	},
	methods: {
		changePayment(value){
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