<template>
	<div :class="{'stories__modal_wrapper-wrap':storiesModal}">
		<transition name="overlay">
			<div v-if="storiesModal"
			     @click="closeStories()"
			     class="overlay"></div>
		</transition>
		<transition name="fade">
			<stories-modal v-if="storiesModal" />
		</transition>
	</div>
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