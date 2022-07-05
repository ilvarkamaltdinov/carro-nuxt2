<template>
	<form class="form"
	      @submit.prevent="submitForm()">
		<fieldset v-if="hasChose"
		          class="form__fieldset">
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
		<form-credit-calculator :params="creditParams" :offer="offer || currentCar" />
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
import FEEDBACK from "@/apollo/mutations/feedback.gql";

export default {
	props: {
		hasChose: {
			type: Boolean,
			default: true
		},
		offer: Object
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
				percent: 4.9,
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
			if(this.hasChose){
				if (!this.currentCar) {
					this.error = 'invalid_car'
					window.scrollTo(0, 0)
					return false
				}
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
		async submitForm() {
			if (this.checkForm()) {
				let formData = {
					external_id: this.hasChose ? this.currentCar.external_id : this.offer.external_id,
					type: 'credit',
					client_name: this.form.name.value,
					client_phone: this.form.phone.value,
					client_age: this.form.date.value,
					//TODO эмитить данные из калькулятора в этот компонент
					// credit_initial_fee: this.rangePaymentValue,
					// credit_period: this.rangePeriodValue,
				}
				await this.sendForm(formData)
			}
		}
	}
}
</script>