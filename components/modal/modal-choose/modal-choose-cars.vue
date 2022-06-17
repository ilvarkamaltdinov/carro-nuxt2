<template>
	<!--TODO переименовать компонент как нибудь логичнее-->
	<div class="modal__wrap">
		<section class="page-main__catalog catalog grid">
			<h2 class="visually-hidden">Автомобили в наличии</h2>
			<div class="grid__col-8">
				<filter-sort />
				<div class="catalog__list grid grid--catalog">
					<catalog-item-small-desktop :has-buttons="false" :offer="modalData"/>
				</div>
				<button-more>Показать больше</button-more>
			</div>
		</section>
	</div>

</template>
<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import catalogButtonEvents from "~/mixins/catalog/catalog-button-events";
export default {
	mixins: [catalogButtonEvents],
	methods: {
		...mapMutations({
			setCallbackCar: 'modal/modal-callback/SET_CALLBACK_CAR',
			setCurrentCar: 'modal/modal-choose-car/SET_CURRENT_CAR'
		}),
		...mapActions({
			chooseGeneration: 'modal/modal-choose-car/chooseGeneration',
			closeModal:'modal/modal-main/closeModal'
		}),
		chooseClick(carInfo) {
			this.setCurrentCar(carInfo)
			this.closeModal()
		},
	},
	computed: {
		...mapGetters({
			cars: 'modal/modal-choose-car/cars'
		})
	}
}
</script>