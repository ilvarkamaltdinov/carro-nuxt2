<template>
	<label class="form__checkbox-wrap checkbox"
	       for="checkbox-agree">
		<input class="form__checkbox visually-hidden"
		       id="checkbox-agree"
		       name="checkbox-agree"
		       type="checkbox"
		       @change="$emit('change', checked)"
		       v-model="checked" />
		<svg-icon name="icon-checkmark"
		          :class="{'checkbox__icon--checked':checked}"
		          class="checkbox__icon" />
		<span class="form__checkbox-text"
		      v-html="label"></span>
	</label>
</template>
<script>
export default {
	data() {
		return {
			checked: false
		}
	},
	props: {
		label: String
	}
}
</script>