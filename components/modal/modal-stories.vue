<template>
	<transition name="fade">
		<div v-if="storiesModal"
		     class="stories__modal_wrapper-wrap">
			<div @click="closeStories()"
			     class="overlay"></div>
			<stories-modal />
		</div>
	</transition>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			storiesModal: 'stories/stories/storiesModal'
		})
	},
	methods: {
		...mapActions({
			closeStories: 'stories/stories/closeStories'
		})
	}
}
</script>