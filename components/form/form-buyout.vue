<template>
	<form class="form application__form grid__col-4"
	      @submit.prevent="submitForm()">
		<fieldset class="form__fieldset">
			<label class="form__field-wrap"
			       :class="{'form__field-wrap--success' : form.mark.value.length >= 2, 'form__field-wrap--error': form.mark.valid === false}">
				<inputs-input placeholder="Марка"
				              @input="form.mark.valid = null"
				              v-model="form.mark.value"
				              type="text" />
			</label>
			<label class="form__field-wrap"
			       :class="{'form__field-wrap--success' : form.model.value.length >= 1, 'form__field-wrap--error': form.model.valid === false}">
				<inputs-input placeholder="Модель"
				              @input="form.model.valid = null"
				              v-model="form.model.value"
				              type="text" />
			</label>
			<label class="form__field-wrap form__field-wrap--select"
			       :class="{'form__field-wrap--success' : form.year.value !== 'Год', 'form__field-wrap--error': form.year.valid === false}">
				<inputs-select :value="form.year.value"
				               @input="form.year.valid = null" />
				<svg-icon class="form__field-arrow"
				          name="icon-arrow" />
			</label>
			<label class="form__field-wrap"
			       :class="{'form__field-wrap--success' : form.run.value.length >= 1, 'form__field-wrap--error': form.run.valid === false}">
				<inputs-input placeholder="Пробег"
				              @input="form.run.valid = null"
				              v-model="form.run.value"
				              mask="number"
				              type="text" />
			</label>
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
		</fieldset>
		<button-typical text="Оставить заявку"
		                button-class="button--credit button--form" />
	</form>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import filters from "~/mixins/filters";

export default {
	data() {
		return {
			form: {
				mark: {
					valid: null,
					value: '',
				},
				model: {
					valid: null,
					value: '',
				},
				year: {
					valid: null,
					value: 'Год',
				},
				run: {
					valid: null,
					value: '',
				},
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
		}
	},
	methods: {
		...mapActions({
			sendForm: 'form/form/sendForm'
		}),
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