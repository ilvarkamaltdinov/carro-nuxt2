<template>
	<form class="form">
		<fieldset class="form__fieldset">
			<label
					:class="{'form__field-wrap--car-active' : currentCar}"
					class="form__field-wrap form__field-wrap--car">
				<button class="form__field"
				        @click.prevent="choseCar()">
					
					{{ currentCar ? currentCar.name : 'Выбрать автомобиль' }}
				
				</button>
				<svg-icon name="icon-form"
				          class="icon form__car-icon" />
			</label>
		</fieldset>
		<fieldset class="form__fieldset">
			<range-period :value="rangePeriodValue"
			              :values="rangePeriodValues"
			              @changePeriod="changePeriod" />
			<range-payment :sum="currentPaymentSum | toCurrency"
			               :value="rangePaymentValue + '%'"
			               :values="rangePaymentValues"
			               @changePayment="changePayment" />
			<div class="form__total">
				<div class="form__total-label">Ваш платеж:</div>
				<div class="form__total-payment">
					{{ isTotalSum }}
				</div>
			</div>
		</fieldset>
		<div>
		</div>
		<fieldset class="form__fieldset">
			<label class="form__field-wrap"
			       :class="{'form__field-wrap--success' : form.name.value.length >= 2}">
				<inputs-input placeholder="ФИО"
				              v-model="form.name.value"
				              type="text" />
			</label>
			<label class="form__field-wrap"
			       :class="{'form__field-wrap--success' : form.date.valid}">
				<inputs-input placeholder="Дата рождения"
				              v-model="form.date.value"
				              mask="date"
				              type="tel" />
			</label>
			<label class="form__field-wrap"
			       :class="{'form__field-wrap--success' : form.phone.valid}">
				<inputs-input placeholder="Телефон"
				              @phoneMaskComplete="form.phone.valid = true"
				              @onincomplete="form.phone.valid = null"
				              v-model="form.phone.value"
				              mask="phone"
				              type="tel" />
			</label>
			<checkbox-agree />
		</fieldset>
		<button-form />
	</form>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import filters from "~/mixins/filters";

export default {
	mixins: [filters],
	watch: {
		currentCar() {
			this.setCurrentCar(this.currentCar)
			this.calculate()
		}
	},
	data() {
		return {
			form: {
				name: {
					valid: null,
					value: '',
				},
				date: {
					valid: null,
					value: ''
				},
				phone: {
					valid: null,
					value: ''
				}
			},
			error: '',
			modalChooseCar: {
				component: 'modal-choose',
				visibility: true
			},
			credit: {
				range_payment: "0%",
				range_period: "84 мес",
				year_percent: "4.9%",
				range_sum: '',
				payment_sum: ''
			}
		}
	},
	computed: {
		...mapGetters({
			currentCar: 'modal/modal-choose/currentCar',
			rangePeriodValues: 'form/form-credit/rangePeriodValues',
			rangePaymentValues: 'form/form-credit/rangePaymentValues',
			rangePeriodValue: 'form/form-credit/rangePeriodValue',
			rangePaymentValue: 'form/form-credit/rangePaymentValue',
			totalSum: 'form/form-credit/totalSum'
		}),
		isTotalSum() {
			return this.totalSum ? this.totalSum + '/ мес.' : '0 ₽/ мес'
		},
		currentPaymentSum() {
			return this.rangePaymentValue !== 0 && this.currentCar
					? this.currentCar.price * this.rangePaymentValue / 100
					: '0 ₽'
		}
	},
	methods: {
		...mapActions({
			openModal: 'modal/modal-main/openModal',
			calculate: 'form/form-credit/calculate'
		}),
		...mapMutations({
			setCurrentCar: 'form/form-credit/SET_CURRENT_CAR'
		}),
		choseCar() {
			let payload = {
				modal_component: 'modal-choose',
				modal_title: 'Выберите автомобиль',
				modal_sub_title: '10 560 автомобилей в наличии'
			}
			this.openModal(payload)
		},
		
		changePeriod(value) {
			this.calculate({period: value})
		},
		changePayment(value) {
			this.calculate({payment: value})
		}
	}
}
</script>