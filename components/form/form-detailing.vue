<template>
	<form class="form"
	      @submit.prevent="submitForm()">
		<fieldset class="form__fieldset">
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
			<checkbox-form @change="changeCheckbox($event,'agreeRf')"
			               label="Подтверждаю наличие гражданства РФ" />
			<checkbox-form @change="changeCheckbox($event,'agree')"
			               label="Согласен на"
			               link="обработку личных данных" />
		</fieldset>
		<button-typical :loading="buttonDisabled"
		                text="Оставить заявку"
		                button-class="button--credit button--form" />
	</form>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import formValidation from "@/mixins/formValidation";

export default {
	mixins: [formValidation],
	props: {
		offer: Object
	},
	computed: {
		...mapGetters({
			modalData: 'modal/modal-main/modalData'
		})
	},
	methods: {
		...mapActions({
			sendForm: 'form/form/sendForm',
			closeModal: 'modal/modal-main/closeModal',
		}),
		checkForm() {
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
					type: 'station',
					client_name: this.form.name.value,
					client_phone: this.form.phone.value,
					client_age: this.form.date.value,
					comment: 'Заявка на услугу '+ this.modalData.title,
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
				await this.closeModal()
			}
		},
	}
}
</script>