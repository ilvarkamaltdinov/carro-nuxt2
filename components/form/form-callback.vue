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
								link="обработку личных данных"/>
		</fieldset>
		<button-typical text="Перезвоните мне"
		                button-class="button--credit button--form" />
	</form>
</template>
<script>
import {mapActions} from "vuex";
import formValidation from "@/mixins/formValidation";

export default {
	mixins: [formValidation],
	props: {
		offer: Object
	},
	methods: {
		...mapActions({
			sendForm: 'form/form/sendForm',
			closeModal: 'modal/modal-main/closeModal'
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
					car: this.offer,
					external_id: this.offer.external_id,
					type: 'callback',
					client_name: this.form.name.value,
					client_phone: this.form.phone.value,
					client_age: this.form.date.value
				}
				await this.closeModal()
				await this.sendForm(formData)
			}
		},
	}
}
</script>