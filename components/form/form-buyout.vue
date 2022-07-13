<template>
	<form class="form application__form grid__col-4"
	      @submit.prevent="submitForm()">
		<fieldset class="form__fieldset">
			<label class="form__field-wrap"
			       :class="markClass">
				<inputs-input placeholder="Марка"
				              @input="handlerInput('mark')"
				              v-model="form.mark.value"
				              type="text" />
			</label>
			<label class="form__field-wrap"
			       :class="modelClass">
				<inputs-input placeholder="Модель"
				              @input="handlerInput('model')"
				              v-model="form.model.value"
				              type="text" />
			</label>
			<label class="form__field-wrap form__field-wrap--select"
			       :class="yearClass">
				<inputs-select :value="form.year.value"
				               @input="changeYearSelect" />
				<svg-icon class="form__field-arrow"
				          name="icon-arrow" />
			</label>
			<label class="form__field-wrap"
			       :class="runClass">
				<inputs-input placeholder="Пробег"
				              @input="form.run.valid = null"
				              v-model="form.run.value"
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
		</fieldset>
		<button-typical text="Оставить заявку"
		                button-class="button--credit button--form" />
	</form>
</template>
<script>
import {mapActions} from 'vuex'
import formValidation from "@/mixins/formValidation";

export default {
	mixins: [formValidation],
	methods: {
		...mapActions({
			sendForm: 'form/form/sendForm'
		}),
		changeYearSelect(year) {
			this.form.year.valid = null
			this.form.year.value = year
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