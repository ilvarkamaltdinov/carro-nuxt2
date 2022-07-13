<template>
	<div @keyup.esc="closeModals"
	     tabindex="0">
		<Header />
		<modal-wrap />
		<modal-stories />
		<Nuxt />
		<Footer />
	</div>
</template>
<script>
import {mapActions} from "vuex";

export default {
	name: "default",
	methods: {
		...mapActions({
			closeStories: 'stories/stories/closeStories'
		}),
		closeModals() {
			this.closeStories()
		}
	}
}
</script>