<template>
	<form class="form"
	      @submit.prevent="sendForm()">
		<fieldset class="form__fieldset">
			<label
					:class="{'form__field-wrap--car-active' : currentCar, 'form__field-wrap--error':error === 'invalid_car'}"
					class="form__field-wrap form__field-wrap--car ">
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
			       :class="{'form__field-wrap--success' : form.name.value.length >= 2, 'form__field-wrap--error': form.name.valid === false}">
				<inputs-input placeholder="ФИО"
				              @input="form.name.valid = null"
				              v-model="form.name.value"
				              type="text" />
			</label>
			<label class="form__field-wrap"
			       :class="{'form__field-wrap--success' : form.date.valid, 'form__field-wrap--error': form.date.valid === false}">
				<inputs-input placeholder="Дата рождения"
				              @input="form.date.valid = null"
				              v-model="form.date.value"
				              mask="date"
				              type="tel" />
			</label>
			<label class="form__field-wrap"
			       :class="{'form__field-wrap--success' : form.phone.valid, 'form__field-wrap--error': form.phone.valid === false}">
				<inputs-input placeholder="Телефон"
				              @input="form.phone.valid = null"
				              @phoneMaskComplete="form.phone.valid = true"
				              @onincomplete="form.phone.valid = null"
				              v-model="form.phone.value"
				              mask="phone"
				              type="tel" />
			</label>
			<checkbox-agree />
		</fieldset>
		<button-typical text="Оставить заявку"
		                button-class="button--credit button--form" />
	</form>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import filters from "~/mixins/filters";
import FEEDBACK from "~/apollo/queries/feedback.gql";

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
			this.error = ''
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
		},
		checkForm() {
			if (!this.currentCar) {
				this.error = 'invalid_car'
				window.scrollTo(0, 0)
				return false
			}
			if (this.form.name.value.length < 2) {
				this.form.name.valid = false
				return false
			}
			if (this.form.date.value === '' || this.form.date.value.split('_').length > 1) {
				this.form.date.valid = false
				return false
			}
			if (!this.form.phone.valid) {
				this.form.phone.valid = false
				return false
			}
			return true;
		},
		sendForm() {
			if (this.checkForm()) {
				let formData = {
					external_id: this.currentCar.external_id,
					site_id: this.$config.site_id,
					type: 'credit',
					client_name: this.form.name.value,
					client_phone: this.form.phone.value,
					client_age: this.form.date.value,
					credit_initial_fee: this.rangePaymentValue,
					credit_period: this.rangePeriodValue,
					// utm_source: localStorage.utm_source || '',
					// utm_medium: localStorage.utm_medium || '',
					// utm_campaign: localStorage.utm_campaign || '',
					// utm_term: localStorage.utm_term || '',
					// utm_content: localStorage.utm_content || '',
				}
				try {
					const res = this.$apollo.mutate({
						mutation: FEEDBACK,
						variables: formData
					}).then((response) => {
						console.log(response)
						// let metrikParams = {
						// 	eventName: 'thanks',
						// 	ecommerceId: response.data.feedback.id,
						// 	ecommerceProductsId: this.data.external_id,
						// 	ecommerceProductsName: this.data.name,
						// 	ecommerceProductsPrice: this.data.price,
						// 	ecommerceProductsBrand: this.data.mark.title,
						// 	ecommerceProductsCategory: `С пробегом/${this.data.mark.title}/${this.data.folder.title}/${this.data.name}`,
						// 	ecommerceProductsQuantity: "1",
						// }
						// this.$router.push({name: 'thanks', params: {metrikParams}});
					});
				} catch (e) {
					console.error(e)
				}
			}
		},
	}
}
</script>