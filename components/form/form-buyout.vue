<template>
	<form class="form application__form grid__col-4">
		<fieldset class="form__fieldset">
			<label class="form__field-wrap">
				<input class="form__field"
				       placeholder="Марка"
				       name="name"
				       type="text"
				       value="" />
			</label>
			<label class="form__field-wrap">
				<input class="form__field"
				       placeholder="Модель"
				       name="name"
				       type="text"
				       value="" />
			</label>
			<label class="form__field-wrap form__field-wrap--select">
				<select class="form__field form__field--select">
					<option value="">Год</option>
					<option value="">Acura</option>
					<option value="">BMW</option>
					<option value="">Citroen</option>
					<option value="">Jeep</option>
				</select>
				<svg-icon class="form__field-arrow"
				          name="icon-arrow"/>
			</label>
			<label class="form__field-wrap">
				<input class="form__field"
				       placeholder="Пробег"
				       name="name"
				       type="text"
				       value="" />
			</label>
			<label class="form__field-wrap">
				<input class="form__field"
				       placeholder="ФИО"
				       name="name"
				       type="text"
				       value="" />
			</label>
			<label class="form__field-wrap">
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
		</fieldset>
		<button-typical text="Оставить заявку" button-class="button--credit button--form"/>
	</form>
</template>