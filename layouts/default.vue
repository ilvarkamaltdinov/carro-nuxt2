<template>
	<div class="default__wrapper" @keyup.esc="closeModals" tabindex="0">
		<Header />
		<modal-wrap />
		<modal-stories />
		<modal-benefits/>
		<Nuxt />
		<Footer />
	</div>
</template>
<script>
import {mapActions, mapMutations} from "vuex";

export default {
	name: "default",
	methods: {
		...mapActions({
			closeStories: 'stories/stories/closeStories',
			closeModal:'modal/modal-main/closeModal'
		}),
		...mapMutations({
			setModalMenu: 'modal/modal-menu/setModalMenu',
			setModalMarks: 'modal/modal-marks/setModalMarks',
		}),
		closeModals() {
			this.closeStories()
			this.closeModal()
			this.setModalMenu(false)
			this.setModalMarks(false)
		}
	}
}
</script>