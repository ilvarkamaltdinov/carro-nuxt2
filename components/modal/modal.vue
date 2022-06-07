<template>
	<section class="modal modal--credit">
		<div class="heading-group heading-group--modal">
			<div class="heading-group__wrap">
				<h2 class="heading heading--h1">
					{{ modalTitle }}
				</h2>
				<span class="heading-group__label">{{ modalSubTitle }}</span>
			</div>
			<button class="modal__close"
			        @click="closeModal()">
				<svg-icon class="modal__close-icon"
				          name="icon-close-s" />
			</button>
		</div>
		<component :is="modalComponent" />
	</section>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters({
			modalTitle: 'modal/modal-main/modalTitle',
			modalSubTitle: 'modal/modal-main/modalSubTitle',
			modalComponent: 'modal/modal-main/modalComponent'
		}),
	},
	methods: {
		...mapActions({
			closeModal: 'modal/modal-main/closeModal'
		})
	}
}
</script>