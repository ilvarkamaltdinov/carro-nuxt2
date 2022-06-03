<template>
	<form class="form">
		<fieldset class="form__fieldset">
			<label class="form__field-wrap">
				
				<inputs-input placeholder="ФИО"
				              v-model="name"
				              @input="error = ''"
				              type="text" />
			</label>
			<label class="form__field-wrap">
				<inputs-input placeholder="Дата рождения"
				              v-model="bdate"
				              mask="date"
				              type="tel" />
			</label>
			<label class="form__field-wrap">
				<inputs-input placeholder="Телефон"
				              v-model="phone"
				              mask="phone"
				              type="tel" />
			</label>
			<checkbox-passport />
			<checkbox-agree />
		</fieldset>
		<button-form-callback @click="callbackSubmit" />
	</form>
</template>
<script>
export default {
	data() {
		return {
			name: '',
			bdate: '',
			phone: '',
			error: ''
		}
	},
	methods:{
		callbackSubmit(){
			console.log('submit......')
		}
	}
}
</script>