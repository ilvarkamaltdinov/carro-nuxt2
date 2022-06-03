<!--КОПИЯ form-credit    потом удалить-->

<template>
	<form class="form">
		<fieldset class="form__fieldset">
			<label
					:class="{'form__field-wrap--car-active':currentCar}"
					class="form__field-wrap form__field-wrap--car">
				<button class="form__field"
				        @click.prevent="setModalMain(modalChooseCar)">
					
					{{currentCar ? currentCar.name : 'Выбрать автомобиль'}}
				
				</button>
				<svg-icon name="icon-form"
				          class="icon form__car-icon" />
			</label>
		</fieldset>
		
		<fieldset class="form__fieldset">
			<range-period @changePeriod="changePeriod" />
			<range-payment @changePayment="changePayment" />
			<div class="form__total">
				<div class="form__total-label">Ваш платеж:</div>
				<div class="form__total-payment">16 500 ₽ / мес.</div>
			</div>
		</fieldset>
		
		<fieldset class="form__fieldset">
			<label class="form__field-wrap">
				<input class="form__field"
				       placeholder="ФИО"
				       name="name"
				       type="text"
				       value="" />
			</label>
			<label class="form__field-wrap form__field-wrap--success">
				<input class="form__field"
				       placeholder="Дата рождения"
				       type="text"
				       name="date"
				       value="01.08.1992" />
			</label>
			<label class="form__field-wrap">
				<input class="form__field"
				       placeholder="Телефон"
				       name="phone"
				       type="tel" />
			</label>
			<checkbox-agree />
		</fieldset>
		<button-form />
	</form>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
	data() {
		return {
			modalChooseCar: {
				component: 'modal-choose-car',
				visibility: true
			},
		}
	},
	computed: {
		...mapGetters({
			currentCar: 'modal/modal-choose-car/currentCar'
		})
	},
	methods: {
		...mapMutations({
			setModalMain: 'modal/modal-main/SET_MODAL_MAIN'
		}),
		changePeriod(event) {
			console.log(11111, event)
		},
		changePayment(value) {
			console.log(22222, value)
		}
	}
}
</script>