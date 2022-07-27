<template>
	<form class="form"
	      :class="{'application__form grid__col-4': !isModal}"
	      @submit.prevent="submitForm()">
		<fieldset v-if="hasChose"
		          class="form__fieldset">
			<label
					:class="{'form__field-wrap--car-active' : currentCar, 'form__field-wrap--error':error === 'invalid_car'}"
					class="form__field-wrap form__field-wrap--car">
				<button class="form__field"
				        @click.prevent="choseCar()">
					
					{{ currentCar ? currentCar.name : 'Выбрать автомобиль' }}
				
				</button>
				<svg-icon name="icon-form"
				          class="icon form__car-icon" />
			</label>
			<div class="catalog form__catalog" v-if="$device.isMobile && currentCar">
				<catalog-item-large-mobile-form :is-form="true"
				                                :offer="currentCar" />
			</div>
		</fieldset>
		<checkbox-form label="Купить авто в кредит"
		               @change="isCredit = !isCredit" />
		<VueSlideToggle :open="isCredit"
		                :duration="500">
			<form-credit-calculator
					@changePeriod="changePeriod"
					@changePayment="changePayment"
					:params="creditParams"
					:offer="offer || currentCar" />
		</VueSlideToggle>
		<fieldset class="form__fieldset">
			<label class="form__field-wrap"
			       :class="carClass">
				<inputs-input placeholder="Ваш автомобиль"
				              @input="handlerInput('car')"
				              v-model="form.car.value"
				              type="text" />
			</label>
			<label class="form__field-wrap"
			       :class="nameClass">
				<inputs-input placeholder="ФИО"
				              @input="handlerInput('name')"
				              v-model="form.name.value"
				              type="text" />
			</label>
			<label class="form__field-wrap"
			       :class="dateClass">
				<inputs-input placeholder="Дата рождения"
				              @input="handlerInput('date')"
				              @dateMaskComplete="form.date.valid = true"
				              @onincomplete="form.date.valid = null"
				              v-model="form.date.value"
				              mask="date"
				              type="tel" />
			</label>
			<label class="form__field-wrap"
			       :class="phoneClass">
				<inputs-input placeholder="Телефон"
				              @input="handlerInput('phone')"
				              @phoneMaskComplete="form.phone.valid = true"
				              @onincomplete="form.phone.valid = null"
				              v-model="form.phone.value"
				              mask="phone"
				              type="tel" />
			</label>
			<checkbox-form :error="error === 'agreeRf'"
			               @change="changeCheckbox($event,'agreeRf')"
			               label="Подтверждаю наличие гражданства РФ" />
			<checkbox-form :error="error === 'agree'"
			               @change="changeCheckbox($event,'agree')"
			               label="Согласен на"
			               link="обработку личных данных" />
		</fieldset>
		<button-typical text="Оставить заявку"
		                button-class="button--credit button--form" />
	</form>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import formValidation from "@/mixins/formValidation";

export default {
	mixins: [formValidation],
	props: {
		hasChose: {
			type: Boolean,
			default: true
		},
		isModal: {
			type: Boolean,
			default: false
		},
		offer: Object
	},
	data() {
		return {
			isCredit: true,
			error: '',
			creditParams: {
				rangePeriodValues: [
					"2",
					"6",
					"12",
					"24",
					"36",
					"48",
					"60",
					"72",
					"84"
				],
				rangePaymentValues: [
					'0%',
					'10%',
					'20%',
					'30%',
					'40%',
					'50%',
					'60%',
					'70%'
				],
				period: 24,
				payment: 10,
			}
		}
	},
	computed: {
		...mapGetters({
			currentCar: 'modal/modal-choose/currentCar',
		}),
	},
	methods: {
		...mapActions({
			openModal: 'modal/modal-main/openModal',
			closeModal: 'modal/modal-main/closeModal',
			sendForm: 'form/form/sendForm'
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
		checkForm() {
			if (this.hasChose) {
				if (!this.currentCar) {
					this.error = 'invalid_car'
					window.scrollTo(0, 0)
					return false
				}
			}
			if (this.form.car.value.length < 2) {
				this.form.car.valid = false
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
			if (!this.form.agree) {
				this.error = 'agree'
				return false
			}
			if (!this.form.agreeRf) {
				this.error = 'agreeRf'
				return false
			}
			return true;
		},
		async submitForm() {
			if (this.checkForm()) {
				let formData = {
					chosen_car: this.currentCar || this.offer, //нужно для страницы thanks
					external_id: this.hasChose ? this.currentCar.external_id : this.offer.external_id,
					type: 'trade-in',
					client_name: this.form.name.value,
					client_phone: this.form.phone.value,
					client_age: this.form.date.value,
					client_vehicle_mark: this.form.car.value,
				}
				// utm
				if(localStorage.utm_source){
					formData.utm_source = localStorage.utm_source
				}
				if(localStorage.utm_medium){
					formData.utm_medium = localStorage.utm_medium
				}
				if(localStorage.utm_campaign){
					formData.utm_campaign = localStorage.utm_campaign
				}
				if(localStorage.utm_term){
					formData.utm_term = localStorage.utm_term
				}
				if(localStorage.utm_content){
					formData.utm_content = localStorage.utm_content
				}
				if (this.isCredit) {
					formData.comment = 'В кредит'
					formData.credit_initial_fee = this.form.paymentValue.toString()
					formData.credit_period = this.form.periodValue.toString()
				}
				await this.sendForm(formData)
				await this.closeModal()
			}
		}
	}
}
</script>