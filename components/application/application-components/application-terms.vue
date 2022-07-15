<template>
	<div class="application__terms">
		<div class="application__terms-item">
			<div class="application__terms-number application__terms-number--stake"> от {{ percent }}%</div>
			<div class="application__terms-text">Ставка по кредиту</div>
		</div>
		<div class="application__terms-item">
			<div class="application__terms-number application__terms-number--term">
				{{ periodValue ? periodValue + ' мес.' : '-' }}
			</div>
			<div class="application__terms-text">Срок автокредита</div>
		</div>
		<div class="application__terms-item">
			<div class="application__terms-number application__terms-number--payment" v-if="monthPayment">
				{{ monthPayment | toCurrency }}
			</div>
			<div v-else class="application__terms-number application__terms-number--payment">
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
	computed: {
		...mapGetters({
			bank: 'banks/bank',
			periodValue: 'form/form/periodValue',
			monthPayment: 'form/form/monthPayment'
		}),
		percent() {
			// Динамично меняет процентную ставку в зависимости от банка
			// return this.bank.rate ? this.bank.rate : this.$config.default_percent
			return this.$config.default_percent
		},
	}
}
</script>