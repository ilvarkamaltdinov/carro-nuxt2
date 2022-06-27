<template>
	<div class="catalog__buttons">
		<div class="catalog__actions">
			<button-favorite :active="likesArray.some(id => id === String(offer.external_id))"
			                 @click="like()" />
			<button-call @click="call" />
		</div>
		<button-typical v-if="choose"
		                @click="chooseClick(offer)"
		                :text="currentCar === offer ? 'Выбрано' : 'Выбрать'"
		                button-class="button--credit" />
		<button-typical v-else
		                @click="credit()"
		                text="Купить в кредит"
		                button-class="button--credit" />
	</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
	computed: {
		...mapGetters({
			likesArray: 'favorite/favorite/likesArray',
			currentCar: 'modal/modal-choose/currentCar'
		})
	},
	props: {
		offer: {
			type: Object,
			default: () => {
			}
		},
		choose: {
			type: Boolean,
			default: false
		},
	},
	methods: {
		...mapActions({
			liked: 'favorite/favorite/liked',
			openModal: 'modal/modal-main/openModal',
			closeModal: 'modal/modal-main/closeModal',
		}),
		...mapMutations({
			setCurrentCar: 'modal/modal-choose/SET_CURRENT_CAR'
		}),
		async chooseClick(offer) {
			this.setCurrentCar(offer)
			this.closeModal()
		},
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