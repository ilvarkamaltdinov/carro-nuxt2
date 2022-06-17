<template>
	<div class="catalog__buttons">
		<div class="catalog__actions">
			<button-favorite :active="likesArray.some(id => id === String(offer.external_id))"
			                 @click="like()" />
			<button-call @click="call" />
		</div>
		<button-credit v-if="!chooseButton"
		               @click="credit" />
		<button-choose v-else
		               @click="$emit('chooseClick')" />
	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			likesArray: 'favorite/favorite/likesArray'
		})
	},
	props: {
		offer: {
			type: Object,
			default: () => {
			}
		},
		chooseButton: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		...mapActions({
			liked: 'favorite/favorite/liked',
			openModal: 'modal/modal-main/openModal'
		}),
		async like() {
			await this.liked(this.offer.external_id)
		},
		async call() {
			let payload = {
				modal_data: this.offer,
				modal_component: 'modal-callback',
				modal_title: 'Закажите звонок по автомобилю',
				modal_sub_title: this.offer.name
			}
			await this.openModal(payload)
		},
		async credit() {
			let payload = {
				modal_data: this.offer,
				modal_component: 'modal-credit',
				modal_title: 'Заявка на автокредит',
				modal_sub_title: this.offer.name
			}
			await this.openModal(payload)
		}
		// toCatalog() {
		// 	this.$router.push('/used')
		// }
	}
}
</script>