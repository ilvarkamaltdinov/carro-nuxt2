<template>
	<form action=""
	      class="form">
		<fieldset class="form__fieldset">
			<range-period />
			<range-payment />
			<div class="form__total">
				<div class="form__total-label">
					Ваш платеж:
				</div>
				<div class="form__total-payment">
					16 500 ₽ / мес.
				</div>
			</div>
		</fieldset>
		<fieldset class="form__fieldset">
			<label for=""
			       class="form__field-wrap">
				<input placeholder="ФИО"
				       name="name"
				       type="text"
				       value=""
				       class="form__field">
			</label>
			<label for=""
			       class="form__field-wrap form__field-wrap--success">
				<input
						placeholder="Дата рождения"
						type="text"
						name="date"
						value="01.08.1992"
						class="form__field">
			</label>
			<div class="form__field-wrap form__field-wrap--select">
				<div class="form__field">Прописка</div>
			</div>
			<label for=""
			       class="form__field-wrap">
				<input placeholder="Телефон"
				       name="phone"
				       type="tel"
				       class="form__field">
			</label>
			<checkbox-passport/>
			<checkbox-agree/>
		</fieldset>
		<button-typical text="Оставить заявку" button-class="button--credit button--form" />
	</form>
</template>
<script>
import RangePayment from "../range/range-payment";

export default {
	components: {RangePayment}
}
</script>