<template>
	<div>
		<div class="heading-group heading-group--form">
			<div class="heading-group__wrap">
				<h2 class="heading heading--h2">
					Автокредит
					<span class="heading__promo">
						{{ settings.credit_percent }}
					</span>
				</h2>
				<span class="heading-group__label">Получите одобрение за 5 минут</span>
			</div>
		</div>
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
						<span v-if="currentCar">, {{ currentCar.price | toCurrency }}
						</span>
					
					</button>
					<svg-icon name="icon-form"
					          class="icon form__car-icon" />
				</label>
			</fieldset>
			<div class="catalog form__catalog"
			     v-if="$device.isMobile && (offer || currentCar)">
				<catalog-item-large-mobile-form :is-form="true"
				                                :offer="offer||currentCar" />
			</div>
			<form-credit-calculator
					v-if="calculator"
					@changePeriod="changePeriod"
					@changePayment="changePayment"
					:params="creditParams"
					:offer="offer || currentCar" />
			<fieldset class="form__fieldset">
				<label class="form__field-wrap"
				       :class="nameClass">
					<inputs-input placeholder="ФИО"
					              @input="handlerInput('name')"
					              v-model="form.name.value"
					              @focus="onFocus"
					              @focusout="onFocusOut"
					              type="text" />
				</label>
				<label class="form__field-wrap"
				       :class="dateClass">
					<inputs-input placeholder="Дата рождения"
					              @input="handlerInput('date')"
					              @dateMaskComplete="form.date.valid = true"
					              @onincomplete="form.date.valid = null"
					              v-model="form.date.value"
					              @focus="onFocus"
					              @focusout="onFocusOut"
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
					              @focus="onFocus"
					              @focusout="onFocusOut"
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
			<button-typical :loading="buttonDisabled"
			                text="Оставить заявку"
			                button-class="button--credit button--form" />
		</form>
	</div>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import formValidation from "@/mixins/formValidation";
import filters from "@/mixins/filters";

export default {
	mixins: [formValidation, filters],
	props: {
		calculator: Boolean,
		hasChose: {
			type: Boolean,
			default: true
		},
		offer: Object
	},
	data() {
		return {
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
				period: 84,
				payment: 0,
			}
		}
	},
	computed: {
		...mapGetters({
			currentCar: 'modal/modal-choose/currentCar',
			bank: 'banks/bank',
			settings: 'settings/settings/settings'
		}),
		percent() {
			// Динамично меняет процентную ставку в зависимости от банка
			// return this.bank.rate ? this.bank.rate : this.$config.default_percent
			return this.$config.default_percent
		},
		formProgress() {
			let progress = 30
			if (this.currentCar || this.offer) {
				progress += 30
			}
			if (this.name_valid) {
				progress += 10
			}
			if (this.date_valid) {
				progress += 10
			}
			if (this.phone_valid) {
				progress += 10
			}
			if (this.form.agree) {
				progress += 4
			}
			if (this.form.agreeRf) {
				progress += 4
			}
			return progress
		},
		currentDealer() {
			if (this.offer) {
				return this.offer.dealer
			} else if (this.currentCar) {
				return this.currentCar.dealer
			}
		}
	},
	methods: {
		onFocus() {
			this.setFocusShowFixes(false)
		},
		onFocusOut() {
			setTimeout(() => {
				this.setFocusShowFixes(true)
			}, 1000)
		},
		...mapActions({
			openModal: 'modal/modal-main/openModal',
			closeModal: 'modal/modal-main/closeModal',
			sendForm: 'form/form/sendForm'
		}),
		...mapMutations({
			setPercent: 'banks/SET_PERCENT',
			setCurrentCar: 'form/form-credit/SET_CURRENT_CAR',
			setFocusShowFixes: 'car/car/SET_FOCUS_SHOW_FIXED'
			
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
					setTimeout(function () {
						window.scrollTo(0, -100);
					}, 1);
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
					type: 'credit',
					dealer: this.currentDealer.slug,
					client_name: this.form.name.value,
					client_phone: this.form.phone.value,
					client_age: this.form.date.value,
					credit_initial_fee: this.form.paymentValue?.toString(),
					credit_period: this.form.periodValue?.toString(),
				}
				// utm
				if (localStorage.utm_source) {
					formData.utm_source = localStorage.utm_source
				}
				if (localStorage.utm_medium) {
					formData.utm_medium = localStorage.utm_medium
				}
				if (localStorage.utm_campaign) {
					formData.utm_campaign = localStorage.utm_campaign
				}
				if (localStorage.utm_term) {
					formData.utm_term = localStorage.utm_term
				}
				if (localStorage.utm_content) {
					formData.utm_content = localStorage.utm_content
				}
				
				await this.sendForm(formData)
				await this.closeModal()
			}
		}
	}
}
</script>
