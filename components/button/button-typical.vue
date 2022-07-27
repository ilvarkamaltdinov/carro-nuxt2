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
	        :class="[buttonClass, loading ? 'button--loading':'']"
	        @click="$emit('click')">
		{{ text }}
		<span v-if="loading" class="loader loader--button"></span>
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