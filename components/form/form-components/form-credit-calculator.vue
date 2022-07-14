<template>
	<fieldset class="form__fieldset">
		<range-period :value="String(periodValue)"
		              :text="installment ? 'Период рассрочки:' :'Срок кредитования, мес.:'"
		              :values="params.rangePeriodValues"
		              :period="currentPeriod"
		              @changePeriod="changePeriod" />
		<range-payment :sum="currentPaymentSum"
		               :value="String(paymentValue) + '%'"
		               :values="params.rangePaymentValues"
		               @changePayment="changePayment" />
		<div class="form__total">
			<div class="form__total-label">Ваш платеж:</div>
			<div class="form__total-payment">
				{{ total || '-' }}
			</div>
		</div>
	</fieldset>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	data() {
		return {
			total: null,
			periodValue: this.params.period,
			paymentValue: this.params.payment
		}
	},
	watch: {
		offer() {
			this.calculate()
		},
		percent() {
			this.calculate()
		}
	},
	props: {
		offer: Object,
		params: Object,
		installment: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		...mapGetters({
			bank: 'banks/bank'
		}),
		percent() {
			// Динамично меняет процентную ставку в зависимости от банка
			// return this.bank.rate ? this.bank.rate : this.$config.default_percent
			return this.$config.default_percent
		},
		currentPeriod() {
			return String(this.periodValue) + ' мес.'
		},
		currentPaymentSum() {
			if (this.offer) {
				return this.offer.price * this.paymentValue / 100
			}
		}
	},
	mounted() {
		if (this.offer) {
			this.calculate()
		}
	},
	methods: {
		changePeriod(value) {
			this.periodValue = parseInt(value)
			this.calculate()
		},
		changePayment(value) {
			this.paymentValue = parseInt(value)
			this.calculate()
			
		},
		calculate() {
			if (this.offer) {
				let creditProc = this.installment ? 1 : this.percent;
				let car_price = this.offer.price;
				let creditTime = this.periodValue;
				let firstPay = this.paymentValue;
				let A = 0;
				let i = creditProc / 12 / 100;
				let n = creditTime;
				let S
				if (firstPay !== 0) {
					S = car_price - (car_price * firstPay) / 100;
				} else {
					S = car_price;
				}
				let K = 0;
				if (car_price) {
					K = (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
					A = Math.round(K * S);
					this.total = String(A).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + " ₽"
				}
			}
			this.$emit('changePeriod', this.periodValue)
			this.$emit('changePayment', this.paymentValue)
		}
	}
}
</script>