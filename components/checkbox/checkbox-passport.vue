<template>
	<label class="form__checkbox-wrap checkbox"
	       for="checkbox-passport">
		<input class="form__checkbox visually-hidden"
		       id="checkbox-passport"
		       name="checkbox-passport"
		       type="checkbox"
		       v-model="checked"
		       checked="" />
		<svg-icon name="icon-checkmark"
		          :class="{'checkbox__icon--checked':checked}"
		          class="checkbox__icon" />
		<span class="form__checkbox-text">Подтверждаю наличие гражданства РФ</span>
	</label>
</template>
<script>
export default {
	data() {
		return {
			checked: false
		}
	}
}
</script>