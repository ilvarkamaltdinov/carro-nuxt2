<template>
	<button @click.prevent="$emit('click')"
	        :class="{'filter__button--active':currentView === 's'}"
	        class="button button--action button--view-s filter__button"
	        type="button">
		<svg-icon class="button__icon icon"
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