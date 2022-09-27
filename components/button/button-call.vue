<template>
	<a :href="`tel:${currentPhone.replace(/[^+\d]/g, '')}`"
	   v-if="$device.isMobile"
	   class="button button--action button--call"
     title="Бесплатный звонок"
     aria-label="Бесплатный звонок">
		<svg-icon class="button__icon"
		          name="icon-call" />
	</a>
	<button v-else
	        class="button button--action button--call"
	        @click.prevent="$emit('click')">
		<svg-icon class="button__icon"
		          name="icon-call" />
	</button>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	props: {
		phone: {
			type: String,
			default: ''
		}
	},
	computed: {
		...mapGetters({
			settings: 'settings/settings/settings'
		}),
		currentPhone(){
			return this.phone === '' ? this.settings.phone : this.phone
		}
	}
}
</script>
