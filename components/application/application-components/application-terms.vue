<template>
	<div class="application__terms">
		<div class="application__terms-item">
			<div class="application__terms-number application__terms-number--stake">{{ percent }}%</div>
			<div class="application__terms-text">Ставка по кредиту</div>
		</div>
		<div class="application__terms-item">
			<div class="application__terms-number application__terms-number--term">
				<!--{{ totalSum ? (rangePeriodValue + ' мес.') : '-' }}-->
				-
			</div>
			<div class="application__terms-text">Срок автокредита</div>
		</div>
		<div class="application__terms-item">
			<div class="application__terms-number application__terms-number--payment">
				<!--{{ totalSum || '-' }}-->
				-
			</div>
			<div class="application__terms-text">Ежемеясячный платеж</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			percent: 'banks/percent'
		})
	}
}
</script>