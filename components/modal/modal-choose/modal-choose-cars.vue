<template>
	<!--TODO переименовать компонент как нибудь логичнее-->
	<div class="modal__wrap">
		<section class="page-main__catalog catalog grid">
			<h2 class="visually-hidden">Автомобили в наличии</h2>
			<div class="grid__col-8">
				<filter-sort modal/>
				<skeleton-catalog-desktop-small v-if="loading"/>
				<div v-else class="catalog__list grid grid--catalog">
					<catalog-item-small-desktop v-for="offer in offers"
					                            :offer="offer"
					                            :choose="true"
					                            :key="offer.id" />
				</div>
				<button-more>Показать больше</button-more>
			</div>
		</section>
	</div>

</template>
<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
export default {
	methods: {
		...mapMutations({
			setCallbackCar: 'modal/modal-callback/SET_CALLBACK_CAR',
			setCurrentCar: 'modal/modal-choose/SET_CURRENT_CAR'
		}),
		...mapActions({
			closeModal: 'modal/modal-main/closeModal'
		}),
		chooseClick(carInfo) {
			this.setCurrentCar(carInfo)
			this.closeModal()
		},
	},
	computed: {
		...mapGetters({
			offers: 'modal/modal-choose/offers',
			loading: 'modal/modal-choose/loading'
		})
	}
}
</script>