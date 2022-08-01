<template>
	<div class="application__terms">
		<div class="application__terms-item">
			<div class="application__terms-number application__terms-number--stake">
				от {{ settings.credit_percent }}</div>
			<div class="application__terms-text">Ставка по {{installment ? 'рассрочке' : 'кредиту'}}</div>
		</div>
		<div class="application__terms-item">
			<div class="application__terms-number application__terms-number--term"
			     v-if="periodValue">
				<!--{{ periodValue ? periodValue + ' мес.' : '-' }}-->
				<client-only>
					<number
							ref="number1"
							:from="0"
							:to="periodValue"
							:duration=".1"
							easing="Power1.easeOut" />
				</client-only>
				мес
			</div>
			<div v-else
			     class="application__terms-number application__terms-number--payment">
				-
			</div>
			<div class="application__terms-text">Срок автокредита</div>
		</div>
		<div class="application__terms-item">
			<div class="application__terms-number application__terms-number--payment"
			     v-if="monthPayment">
				<!--{{ monthPayment | toCurrency }}-->
				<client-only>
					<number
							ref="number1"
							:from="0"
							:to="monthPayment"
							:format="theFormat"
							:duration=".2"
							easing="Power1.easeOut" />
				</client-only>
				₽
			</div>
			<div v-else
			     class="application__terms-number application__terms-number--payment">
				-
			</div>
			<div class="application__terms-text">Ежемеясячный платеж</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import filters from "@/mixins/filters";

export default {
	mixins: [filters],
	props: {
		installment: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		theFormat(number) {
			return this.number_format(number)
		},
		number_format(number, decimals, dec_point, thousands_sep) {
			let n = !isFinite(+number) ? 0 : +number,
					prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
					sep = (typeof thousands_sep === 'undefined') ? ' ' : thousands_sep,
					dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
					toFixedFix = function (n, prec) {
						// Fix for IE parseFloat(0.55).toFixed(0) = 0;
						let k = Math.pow(10, prec);
						return Math.round(n * k) / k;
					},
					s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
			if (s[0].length > 3) {
				s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
			}
			if ((s[1] || '').length < prec) {
				s[1] = s[1] || '';
				s[1] += new Array(prec - s[1].length + 1).join('0');
			}
			return s.join(dec);
		}
	},
	computed: {
		...mapGetters({
			bank: 'banks/bank',
			periodValue: 'form/form/periodValue',
			monthPayment: 'form/form/monthPayment',
			settings: 'settings/settings/settings'
		}),
		// percent() {
		// 	// Динамично меняет процентную ставку в зависимости от банка
		// 	// return this.bank.rate ? this.bank.rate : this.$config.default_percent
		// 	return this.$config.default_percent
		// },
	}
}
</script>