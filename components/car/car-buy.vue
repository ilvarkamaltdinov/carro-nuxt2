<template>
	<div class="car__buy">
		<div class="car__price-block">
			<div class="car__price">
				{{ offer.price | toCurrency }}
			</div>
			<tippy-question />
			<div class="car__price-payment">
				В кредит от {{ offer.price | access_acredit }} / мес.
			</div>
		</div>
		<div class="car__buy-block">
			<button @click.prevent="creditClick(offer)" class="button button--credit-pay button--link">
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
			<rating :max="100" :rating="100" />
			<div class="car__actions-buttons">
				<button-autoteka @click="autoteka(offer)"/>
				<button-favorite :active="likesArray.some(id => id === String(offer.external_id))"
				                 @click="like()" />
				<button-compare />
				<button-call @click="callback(offer)"/>
			</div>
		</div>
		<div class="car__stock">
			В наличии в автоцентре
			<a href=""
			   class="car__stock-dealer">
				«{{ offer.dealer.title }}»
			</a>
		</div>
	</div>
</template>
<script>
import filters from "~/mixins/filters";
import {mapActions, mapGetters} from "vuex";
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
			openModal: 'modal/modal-main/openModal'
		}),
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
		tradeInClick(carInfo) {
			let payload = {
				modal_data: carInfo,
				modal_component: 'modal-tradeIn',
				modal_title: 'Заявка на Trade-In',
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