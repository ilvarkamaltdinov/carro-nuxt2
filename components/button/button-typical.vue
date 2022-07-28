<template>
	<!--TODO не делаю @click.prevent так как блокирует событие @submit на формах-->
	<nuxt-link :class="buttonClass"
	           class="button"
	           v-if="link !== ''"
	           :to="link">{{ text }}
	</nuxt-link>
	<button v-else
	        class="button"
	        :disabled="loading"
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
		link: {
			type: String,
			default: ''
		},
		buttonClass: String,
		text: String,
		icon: {
			type: String,
			default: ''
		},
		loading: {
			type: Boolean,
			default: false
		}
	}
}
</script>