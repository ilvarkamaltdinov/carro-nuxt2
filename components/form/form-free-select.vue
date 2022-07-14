<template>
	<form class="form application__form grid__col-4"
	      @submit.prevent="submitForm()">
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
			<label class="form__field-wrap form__field-wrap--select"
			       :class="yearClass">
				<inputs-select :value="form.year.value"
				               :options="years_range"
				               @input="changeSelect( $event, 'year')" />
				<svg-icon class="form__field-arrow"
				          name="icon-arrow" />
			</label>
			<label class="form__field-wrap form__field-wrap--select"
			       :class="gearboxClass">
				<inputs-select :value="form.gearbox.value"
				               :options="gearboxes"
				               @input="changeSelect( $event, 'gearbox')" />
				<svg-icon class="form__field-arrow"
				          name="icon-arrow" />
			</label>
			<label class="form__field-wrap form__field-wrap--select"
			       :class="engineTypeClass">
				<inputs-select :value="form.engineType.value"
				               :options="engineTypes"
				               @input="changeSelect( $event, 'engineType')" />
				<svg-icon class="form__field-arrow"
				          name="icon-arrow" />
			</label>
			<label class="form__field-wrap"
			       :class="priceClass">
				<inputs-input placeholder="Цена до"
				              @input="handlerInput('price')"
				              v-model="form.price.value"
				              mask="number"
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
import {mapActions, mapGetters} from 'vuex'
import formValidation from "@/mixins/formValidation";

export default {
	mixins: [formValidation],
	data(){
		return{
			error:''
		}
	},
	computed:{
		...mapGetters({
			currentCar: 'modal/modal-choose/currentCar',
		})
	},
	methods: {
		...mapActions({
			sendForm: 'form/form/sendForm',
			openModal: 'modal/modal-main/openModal',
		}),
		changeYearSelect(year) {
			this.form.year.valid = null
			this.form.year.value = year
		},
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
			if (this.form.mark.value.length < 2) {
				this.form.mark.valid = false
				return false
			}
			if (this.form.model.value.length < 1) {
				this.form.model.valid = false
				return false
			}
			if (this.form.year.value === 'Год') {
				this.form.year.valid = false
				return false
			}
			if (this.form.run.value.length < 1) {
				this.form.run.valid = false
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
		async submitForm() {
			if (this.checkForm()) {
				let formData = {
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