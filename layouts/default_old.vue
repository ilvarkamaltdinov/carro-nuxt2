<template>
	<div class="default__wrapper"
	     @keyup.esc="closeModals"
	     tabindex="0">
		<Header />
		<client-only>
			<modal-wrap />
			<modal-stories />
			<modal-benefits />
		</client-only>
		<Nuxt />
		<Footer />
	</div>
</template>
<script>
import {mapActions, mapMutations} from "vuex";
import utm from "@/mixins/utm";
import metrika from "@/mixins/metrika";

export default {
	name: "default",
	mixins: [utm, metrika],
	methods: {
		...mapActions({
			closeStories: 'stories/stories/closeStories',
			closeModal: 'modal/modal-main/closeModal'
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