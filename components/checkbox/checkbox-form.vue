<template>
	<label class="form__checkbox-wrap checkbox"
	       :class="{'checkbox--error':error}">
		<input class="form__checkbox visually-hidden"
		       name="checkbox-agree"
		       type="checkbox"
		       @change="$emit('change', checked)"
		       v-model="checked" />
		<svg-icon name="icon-checkmark"
		          :class="{'checkbox__icon--checked':checked}"
		          class="checkbox__icon" />
		<span class="form__checkbox-text">{{ label }}
			<a href="/privacy"
         class="form__checkbox-text-link"
			   rel="nofollow"
			   target="_blank">{{ link }}
			</a>
		</span>
	</label>
</template>
<script>
export default {
	data() {
		return {
			checked: true
		}
	},
	props: {
		label: String,
		link: String,
		error: {
			type: Boolean,
			default: false
		}
	}
}
</script>
