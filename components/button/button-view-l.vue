<template>
	<button @click.prevent="$emit('click')"
	        :disabled="currentView === 'l'"
	        :class="{'filter__button--active':currentView === 'l'}"
	        class="button button--action button--view-l filter__button"
	        type="button">
		<svg-icon class="button__icon"
		          name="icon-view-s" />
	</button>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	props: {
		modal: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		...mapGetters({
			viewCatalog: 'modal/modal-choose/view',
			viewFilter: 'filters/filters/view'
		}),
		currentView() {
			return this.modal ? this.viewCatalog : this.viewFilter
		}
	}
}
</script>
