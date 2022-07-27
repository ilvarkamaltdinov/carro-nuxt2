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
				               :options="years_range"
				               @input="changeSelect( $event, 'year')" />
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
			if (this.form.year.value === 'Год от') {
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
					type: 'buyout',
					client_name: this.form.name.value,
					client_phone: this.form.phone.value,
					client_age: this.form.date.value,
					client_vehicle_mark: this.form.mark.value,
					client_vehicle_model: this.form.model.value,
					client_vehicle_run: this.form.run.value,
					client_vehicle_year: '' + this.form.year.value,
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
				
				await this.sendForm(formData)
			}
		}
	}
}
</script>