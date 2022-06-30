<template>
	<section class="page-main__application application grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">{{ currentTitle }}</h1>
				<span class="heading-group__label">Банк перезвонит вам в течение 15 минут</span>
			</div>
		</div>
		<div class="grid__col-12 grid grid--application">
			<div class="application__form grid__col-4">
				<div class="heading-group heading-group--form">
					<div class="heading-group__wrap">
						<h2 class="heading heading--h2">Заполните заявку</h2>
						<span class="heading-group__label">Получите 100% одобрение</span>
					</div>
					<rating-form />
				</div>
				<form-credit />
			</div>
			
			<div v-if="currentCar"
			     class="application__catalog catalog grid__col-8">
				<catalog-item-large-desktop :has-buttons="false"
				                            :offer="currentCar" />
			</div>
			<button v-else
			        class="application__choose-car grid__col-8"
			        @click="chooseCar">
				<svg-icon class="application__choose-car-icon"
				          name="icon-form" />
				<span class="application__choose-car-text">Выберите автомобиль</span>
			</button>
			<application-banks class="grid__col-5" :bank-slug="bank.slug"/>
			<div class="application__terms grid__col-3">
				<div class="application__terms-item">
					<div class="application__terms-number application__terms-number--stake">4.9%</div>
					<div class="application__terms-text">Ставка по кредиту</div>
				</div>
				<div class="application__terms-item">
					<div class="application__terms-number application__terms-number--term">
						{{ totalSum ? (rangePeriodValue + ' мес.') : '-' }}
					</div>
					<div class="application__terms-text">Срок автокредита</div>
				</div>
				<div class="application__terms-item">
					<div class="application__terms-number application__terms-number--payment">{{ totalSum || '-' }}</div>
					<div class="application__terms-text">Ежемеясячный платеж</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
	data() {
		return {
			modalChooseCar: {
				component: 'modal-choose',
				visibility: true
			},
		}
	},
	destroyed() {
		this.setBank({})
	},
	computed: {
		...mapGetters({
			currentCar: 'modal/modal-choose/currentCar',
			bank: 'banks/bank',
			totalSum: 'form/form-credit/totalSum',
			rangePeriodValue: 'form/form-credit/rangePeriodValue'
		}),
		currentTitle() {
			if (this.bank.id) {
				return 'Автокредит в ' + this.bank.name
			} else {
				return 'Заявка на автокредит'
			}
		}
	},
	methods: {
		...mapActions({
			openModal: 'modal/modal-main/openModal'
		}),
		...mapMutations({
			setBank: 'banks/SET_BANK'
		}),
		chooseCar() {
			let payload = {
				modal_component: 'modal-choose',
				modal_title: 'Выберите автомобиль',
				modal_sub_title: '10 560 автомобилей в наличии'
			}
			this.openModal(payload)
		}
	}
}
</script>