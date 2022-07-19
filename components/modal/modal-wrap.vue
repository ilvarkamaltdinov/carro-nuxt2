<template>
	<div>
		<transition name="overlay">
			<div v-if="modal"
			     @click="closeModal()"
			     class="overlay"></div>
		</transition>
		<transition name="modal">
			<component v-if="modal"
			           is="modal"></component>
			<!--<div v-if="modalMain">-->
			<!--	<component is="modal"></component>-->
			<!--</div>-->
		</transition>
	</div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
	methods: {
		...mapActions({
			closeModal: 'modal/modal-main/closeModal'
		}),
	},
	computed: {
		...mapGetters({
			modal: 'modal/modal-main/modal',
			modalMenu: 'modal/modal-menu/modalMenu',
		})
	}
}
</script>