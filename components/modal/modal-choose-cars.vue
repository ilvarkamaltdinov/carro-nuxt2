<template>
	<!--TODO переименовать компонент как нибудь логичнее-->
	<div class="modal__wrap">
		<section class="page-main__catalog catalog grid">
			<h2 class="visually-hidden">Автомобили в наличии</h2>
			<div class="grid__col-8">
				<filter-sort />
				<div class="catalog__list grid grid--catalog">
					<catalog-item v-for="item in cars"
					              :key="item.id"
					              grid-four
					              :info="item">
						
						
						<template v-slot:buttons>
							<catalog-item-buttons choose-button
							                      @chooseClick="chooseClick(item)"
							                      @callClick="callClick(item)" />
						</template>
					
					</catalog-item>
				</div>
				<button-more>Показать больше</button-more>
			</div>
		</section>
	</div>

</template>
<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
	data() {
		return {
			modalChooseCar: {
				component: 'modal-callback',
				visibility: true
			}
		}
	},
	methods: {
		...mapMutations({
			setModalMain: 'modal/modal-main/SET_MODAL_MAIN',
			setCallbackCar: 'modal/modal-callback/SET_CALLBACK_CAR',
			setCurrentCar: 'modal/modal-choose-car/SET_CURRENT_CAR'
		}),
		...mapActions({
			chooseGeneration: 'modal/modal-choose-car/chooseGeneration'
		}),
		chooseClick(carInfo) {
			this.setCurrentCar(carInfo)
			this.modalChooseCar.visibility = false
			this.setModalMain(this.modalChooseCar)
		},
		callClick(carInfo) {
			this.setCallbackCar(carInfo)
			this.setModalMain(this.modalChooseCar)
		},
	},
	computed: {
		...mapGetters({
			cars: 'modal/modal-choose-car/cars'
		})
	}
}
</script>