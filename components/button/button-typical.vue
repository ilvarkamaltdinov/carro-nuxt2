<template>
	<button class="button"
	        :class="buttonClass"
	        @click="$emit('click')">
		{{ text }}
		<svg-icon v-if="icon !== ''"
		          class="icon"
		          :name="icon" />
	</button>
</template>
<script>
export default {
	props: {
		buttonClass: String,
		text: String,
		icon: {
			type: String,
			default: ''
		}
	}
}
</script>