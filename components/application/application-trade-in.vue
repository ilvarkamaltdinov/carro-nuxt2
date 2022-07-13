<template>
	<section class="page-main__application application grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">{{ pageTitle }}</h1>
				<span class="heading-group__label">Автоцентр перезвонит вам в течение 15 минут</span>
			</div>
			<rating :max="100" :rating="100" />
		</div>
		<div class="grid__col-12 grid grid--application">
			<form-trade-in/>
			
			<div v-if="currentCar"
			     class="application__catalog catalog grid__col-8">
				<catalog-item-large-desktop :has-buttons="false"
				                            :offer="currentCar" />
			</div>
			<button v-else
			        class="application__choose-car grid__col-8"
			        @click="chooseCar">
				<svg-icon class="application__choose-car-icon"
				          name="icon-form" />
				<span class="application__choose-car-text">Выберите автомобиль</span>
			</button>
			<application-banks class="grid__col-5"/>
			<application-terms class="grid__col-3"/>
		</div>
	</section>

</template>
<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
	props: {
		pageTitle: String
	},
	data() {
		return {
			modalChooseCar: {
				component: 'modal-choose',
				visibility: true
			},
		}
	},
	computed: {
		...mapGetters({
			currentCar: 'modal/modal-choose/currentCar',
			totalSum: 'form/form-credit/totalSum',
			bank: 'banks/bank'
		})
	},
	methods: {
		...mapActions({
			openModal: 'modal/modal-main/openModal'
		}),
		chooseCar() {
			let payload = {
				modal_component: 'modal-choose',
				modal_title: 'Выберите автомобиль',
				modal_sub_title: '10 560 автомобилей в наличии'
			}
			this.openModal(payload)
		}
	}
}
</script>