<template lang="pug">
	
	form.form.application__form.grid__col-4
		fieldset.form__fieldset
			label.form__field-wrap.form__field-wrap--car
				button.form__field() Выберите автомобиль
				svg-icon.form__car-icon(name="icon-form")
			
			checkbox-credit
		
		fieldset.form__fieldset
			range-period
			range-payment
			.form__total
				.form__total-label Ваш платеж:
				.form__total-payment 16 500 ₽ / мес.
		
		fieldset.form__fieldset
			label.form__field-wrap
				input(class="form__field" placeholder="Ваш автомобиль" name="name" type="text"  value="")
			
			label.form__field-wrap
				input(class="form__field" placeholder="ФИО" name="name" type="text"  value="")
			
			label.form__field-wrap.form__field-wrap--success
				input(class="form__field" placeholder="Дата рождения" type="text" name="date" value="01.08.1992")
			
			label.form__field-wrap
				input(class="form__field" placeholder="Телефон" name="phone" type="tel")
			
			checkbox-passport
			checkbox-agree
		
		button-form
	
	//- include ../benefits/benefits-credit

</template>