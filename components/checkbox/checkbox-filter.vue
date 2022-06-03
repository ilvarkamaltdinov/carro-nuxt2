<template>
	<label class="checkbox checkbox--filter filter__checkbox">
		<input class="visually-hidden"
		       name="checkbox-agree"
		       type="checkbox"
		       @change="$emit('click')"
		       :value="isChecked" />
		<svg-icon class="checkbox__icon"
		          :class="{'checkbox__icon--checked' : isChecked}"
		          name="icon-checkmark" />
		<span class="checkbox__text">
			<slot></slot>
		</span>
	</label>
</template>
<script>
export default {
	computed: {
		isChecked() {
			return this.isCheck
		}
	},
	props: {
		isCheck: {
			type: Boolean,
			default: false
		}
	}
}
</script>