<template>
	<div class="car__buy">
		<div class="car__price-block">
			<div class="car__price">
				{{ offer.price | toCurrency }}
			</div>
			<tippy-question text="test test"/>
			<div class="car__price-payment">
				В кредит от {{ offer.price | access_acredit }} / мес.
			</div>
		</div>
		<div class="car__buy-block">
			<button @click.prevent="installmentClick(offer)" class="button button--credit-pay button--link">
				Рассрочка
			</button>
			<button @click.prevent="tradeInClick(offer)" class="button button--trade-in button--link">
				Trade-In
			</button>
			<button @click.prevent="creditClick(offer)" class="button button--credit">
				Купить в кредит
			</button>
		</div>
		<div class="car__actions-block">
			<tippy arrow>
				<div class="tippy-text">
					рейтинг автомобиля
				</div>
				<template v-slot:trigger>
					<rating-car @click="ratingClick"
					            :rating="offer.rating"/>
				</template>
			</tippy>
			<div class="car__actions-buttons">
				<button-autoteka @click="autoteka(offer)"/>
				<button-favorite :active="likesArray.some(id => id === String(offer.external_id))"
				                 @click="like()" />
				<!--<button-compare />-->
				<button-call @click="callback(offer)"/>
			</div>
		</div>
		<div class="car__stock">
			В наличии в автоцентре
			<a href="#" @click.prevent="moreInfoDiller(offer.dealer.slug)"
			   class="car__stock-dealer">
				«{{ offer.dealer.title }}»
			</a>
		</div>
	</div>
</template>
<script>
import filters from "~/mixins/filters";
import {mapActions, mapGetters} from "vuex";
import dealer from "@/apollo/queries/dealer/dealer";
export default {
	mixins: [filters],
	computed:{
		...mapGetters({
			offer: 'catalog/catalog-cars/offer',
			likesArray: 'favorite/favorite/likesArray',
		})
	},
	methods: {
		...mapActions({
			liked: 'favorite/favorite/liked',
			openModal: 'modal/modal-main/openModal',
			request: 'request'
		}),
		async moreInfoDiller(dealerSlug) {
			try {
				let dealerData = await this.request({query: dealer, variables: {slug: dealerSlug}})
				dealerData = dealerData.data.dealer
				let payload = {
					modal_data: dealerData,
					modal_component: 'modal-dealer',
					modal_title: `Автоцентр «${dealerData.title}»`,
					modal_sub_title: `${dealerData.short_description}`
				}
				await this.openModal(payload)
			} catch (e) {
				console.log(e)
			}
		},
		async like() {
			await this.liked(this.offer.external_id)
		},
		creditClick(carInfo) {
			let payload = {
				modal_data: carInfo,
				modal_component: 'modal-credit',
				modal_title: 'Заявка на автокредит',
				modal_sub_title: carInfo.name
			}
			this.openModal(payload)
		},
		callback(carInfo) {
			let payload = {
				modal_data: carInfo,
				modal_component: 'modal-callback',
				modal_title: 'Заявка на автокредит',
				modal_sub_title: carInfo.name
			}
			this.openModal(payload)
		},
		ratingClick(){
			let payload = {
				modal_data: this.offer.rating,
				modal_component: 'modal-rating',
				modal_title: ' Состояние автомобиля',
				modal_sub_title: this.offer.name
			}
			this.openModal(payload)
		},
		tradeInClick(carInfo) {
			let payload = {
				modal_data: carInfo,
				modal_component: 'modal-tradeIn',
				modal_title: 'Заявка на Trade-In',
				modal_sub_title: carInfo.name
			}
			this.openModal(payload)
		},
		installmentClick(carInfo) {
			let payload = {
				modal_data: carInfo,
				modal_component: 'modal-installment',
				modal_title: 'Заявка на рассрочку',
				modal_sub_title: carInfo.name
			}
			this.openModal(payload)
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
	}
}
</script>