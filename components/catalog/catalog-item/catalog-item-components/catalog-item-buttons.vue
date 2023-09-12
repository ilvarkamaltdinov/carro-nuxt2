<template>
	<div class="catalog__buttons">
		<div class="catalog__actions">
			<button-autoteka @click="autoteka(offer)"
			                 v-if="long && $route.params.category !=='europe' && !isNew" />
			<button-favorite :active="likesArray.some(id => id === String(offer.external_id))"
			                 @click="like()" />
			<!--<button-compare v-if="long" />-->
			<button-call v-if="offer.dealer.phone" :phone="offer.dealer.phone"
			             @click="call" />
		</div>
		<div class="catalog__actions-main"
		     v-if="long">
			<button-typical @click="tradeIn(offer)"
			                text="Trade-In"
			                button-class="button--trade-in button--link" />
			<button-typical v-if="choose"
			                @click="chooseClick(offer)"
			                :text="isEqual ? 'Выбрано' : 'Выбрать'"
			                button-class="button--credit" />
			<button-typical v-else-if="$route.params.category==='europe'"
			                @click="credit()"
			                text="Рассчитать кредит"
			                button-class="button--credit" />
			<button-typical v-else
			                @click="credit()"
			                text="Купить в кредит"
			                button-class="button--credit" />
		</div>
		<div v-else>
			<button-typical v-if="choose"
			                @click="chooseClick(offer)"
			                :class="{'button--credit-selected':isEqual }"
			                :text="isEqual ? 'Выбран' : 'Выбрать'"
			                button-class="button--credit" />
			<button-typical v-else-if="$route.params.category==='europe'"
			                @click="credit()"
			                text="Рассчитать кредит"
			                button-class="button--credit button--credit-europe" />
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
			currentCar: 'modal/modal-choose/currentCar',
			settings: 'settings/settings/settings'
		}),
		isEqual() {
			if (this.currentCar) {
				return this.currentCar.id === this.offer.id
			} else {
				return false
			}
		},
    isNew() {
      return this.offer.run <= 100 && this.offer.owner.number <= 1;
    }
	},
	props: {
		isForm: {
			type: Boolean,
			default: false
		},
		long: {
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
    sendVkAds() {
      if (process.client) {
        let _tmr = window._tmr || (window._tmr = []);
        _tmr.push({
          type: 'reachGoal',
          id: this.settings.vk_ads,
          value: this.offer.price,
          goal: 'favorites',
          params: {
            product_id: this.offer.external_id
          }
        });
      }
    },
		async like() {
			await this.liked(this.offer.external_id)
      await this.sendVkAds()
		},
		async call() {
			let payload = {
				modal_data: this.offer,
				modal_component: 'modal-callback',
				modal_title: 'Остались вопросы? Перезвоним Вам!',
				modal_sub_title: this.offer.name
			}
			await this.openModal(payload)
		},
		async tradeIn(carInfo) {
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
				modal_title: 'Отчет «Автотеки» от ' + carInfo.createdAt,
				modal_sub_title: carInfo.name
			}
			this.openModal(payload)
		},
		async credit() {
			let payload = {
				modal_data: this.offer,
				modal_component: 'modal-credit',
				modal_title: `Автокредит от <span class="heading__promo">${this.settings.credit_percent}</span>`,
				modal_sub_title: ""
			}
			await this.openModal(payload)
		}
		// toCatalog() {
		// 	this.$router.push('/used')
		// }
	}
}
</script>
