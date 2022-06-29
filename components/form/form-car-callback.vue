<template>
	<form class="form"
	      @submit.prevent="submitForm()">
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
			<checkbox-passport />
			<checkbox-agree />
		</fieldset>
		<button-typical text="Перезвоните мне"
		                button-class="button--credit button--form" />
	</form>
</template>
<script>
import FEEDBACK from "@/apollo/queries/feedback";
import {mapActions} from "vuex";

export default {
	props: {
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
		}
	},
	methods: {
		...mapActions({
			sendForm: 'form/form/sendForm'
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
			return true;
		},
		async submitForm() {
			if (this.checkForm()) {
				let formData = {
					external_id: this.offer.external_id,
					type: 'callback',
					client_name: this.form.name.value,
					client_phone: this.form.phone.value,
					client_age: this.form.date.value
				}
				await this.sendForm({formData: formData, car: this.offer})
			}
		},
	}
}
</script>