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
        <tippy-question text="Платеж является ориентировочным и зависит от конкретного банка и кредитной программы." />
			</div>
		</div>
	</fieldset>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
	data() {
		return {
			total: null,
			periodValue: this.params.period,
			paymentValue: this.params.payment,
			paymentPriceValue: null
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
			bank: 'banks/bank',
			settings: 'settings/settings/settings'
		}),
		percent() {
			// Динамично меняет процентную ставку в зависимости от банка
			// return this.bank.rate ? this.bank.rate : this.$config.default_percent
			return Number(this.settings.credit_percent.replace('%',''))
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
		...mapMutations({
			setPeriodValue: 'form/form/SET_PERIOD_VALUE',
			setMonthPaymentValue: 'form/form/SET_MONTH_PAYMENT_VALUE'
		}),
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
				let creditProc = this.installment ? 0.001 : this.percent;
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
				this.paymentPriceValue = ((car_price * firstPay) / 100).toString() + ` руб. (${firstPay}%)`
				let K = 0;
				if (car_price) {
					K = (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
					A = Math.round(K * S);
					this.total = String(A).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + " ₽"
					//для отображения в блоке рядом с выбранным банком
					this.setPeriodValue(this.periodValue)
					this.setMonthPaymentValue(A)
					//
				}
			}
			this.$emit('changePeriod', this.periodValue)
			//для ЦРМКИ
			this.$emit('changePayment', this.paymentPriceValue)
		}
	},
	destroyed() {
		this.setPeriodValue(null)
		this.setMonthPaymentValue(null)
	}
}
</script>
