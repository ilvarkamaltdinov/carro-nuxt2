<template>
	<button @click.prevent="$emit('click')"
	        :class="{'filter__button--active':view==='s'}"
	        class="button button--action button--view-s filter__button"
	        type="button">
		<svg-icon class="button__icon icon"
		          name="icon-view-s" />
	</button>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			view: 'catalog/catalog-cars/view'
		})
	}
}
</script>