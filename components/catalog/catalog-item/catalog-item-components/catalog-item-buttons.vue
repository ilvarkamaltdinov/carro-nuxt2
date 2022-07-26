<template>
	<div class="catalog__buttons">
		<div class="catalog__actions">
			<button-autoteka @click="autoteka(offer)" v-if="long" />
			<button-favorite :active="likesArray.some(id => id === String(offer.external_id))"
			                 @click="like()" />
			<!--<button-compare v-if="long" />-->
			<button-call :phone="offer.dealer.phone" @click="call" />
		</div>
		<div class="catalog__actions-main" v-if="long">
			<button-typical @click="tradeIn(offer)"
			                text="Trade-In"
			                button-class="button--trade-in button--link" />
			<button-typical v-if="choose"
			                @click="chooseClick(offer)"
			                :text="currentCar === offer ? 'Выбрано' : 'Выбрать'"
			                button-class="button--credit" />
			<button-typical v-else @click="credit()"
			                text="Купить в кредит"
			                button-class="button--credit" />
		</div>
		<div v-else>
			<button-typical v-if="choose"
			                @click="chooseClick(offer)"
			                :text="currentCar === offer ? 'Выбрано' : 'Выбрать'"
			                button-class="button--credit" />
			<button-typical v-else
			                @click="credit()"
			                text="Купить в кредит"
			                button-class="button--credit" />
		</div>
	</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import ButtonCompare from "@/components/button/button-compare";
import ButtonAutoteka from "@/components/button/button-autoteka";

export default {
	components: {ButtonAutoteka, ButtonCompare},
	computed: {
		...mapGetters({
			likesArray: 'favorite/favorite/likesArray',
			currentCar: 'modal/modal-choose/currentCar'
		})
	},
	props: {
		isForm: {
			type: Boolean,
			default: false
		},
		long:{
			type: Boolean,
			default: false
		},
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
			await this.closeModal()
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
		async tradeIn(carInfo){
			let payload = {
				modal_data: carInfo,
				modal_component: 'modal-tradeIn',
				modal_title: 'Заявка на Trade-In',
				modal_sub_title: carInfo.name
			}
			await this.openModal(payload)
		},
		autoteka(carInfo) {
			let payload = {
				modal_data: carInfo,
				modal_component: 'modal-autoteka',
				modal_title: 'Отчет «Автотеки» от 21.02',
				modal_sub_title: carInfo.name
			}
			this.openModal(payload)
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