<template>
	<section class="page-main__catalog catalog grid">
		<div class="heading-group heading-group--h1 grid__col-12">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">{{ currentHeading }}</h1>
				<span class="heading-group__label">242 автомобиля в наличии</span>
			</div>
		</div>
		<div class="grid__col-4">
			<filter-desktop />
		</div>
		<div class="grid__col-8">
			<filter-sort :sort="sort"
			             @sortChosen="sortChosen" />
			<div class="catalog__list grid grid--catalog">
				<catalog-item grid-four
				              :info="item"
				              v-for="item in offersList"
				              :key="item.id">
					<template v-slot:buttons>
						<catalog-item-buttons @creditClick="creditClick(item)"
						                      @callClick="callClick(item)" />
					</template>
				</catalog-item>
			</div>
			<button-more>Показать больше</button-more>
			<pagination />
		</div>
	</section>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
import capitalizeFirstLetter from "@/mixins/capitalizeFirstLetter";

export default {
	mixins: [capitalizeFirstLetter],
	data() {
		return {
			modalChooseCar: {
				component: 'modal-callback',
				visibility: true
			},
			modalCreditCar: {
				component: 'modal-credit',
				visibility: true
			},
			sort: 'price|asc'
		}
	},
	mounted() {
		// console.log(11111, this.offers)
	},
	computed: {
		...mapGetters({
			offers: 'filters/filters/offers'
		}),
		offersList(){
			return this.offers ? this.offers.data : []
		},
		currentHeading() {
			// if (this.$route.params.mark) {
			// 	return this.capitalizeFirstLetter(this.$route.params.mark) + ' с пробегом'
			// }
			return 'Автомобили с пробегом'
		},
	},
	methods: {
		...mapMutations({
			setModalMain: 'modal/modal-main/SET_MODAL_MAIN',
			setCallbackCar: 'modal/modal-callback/SET_CALLBACK_CAR',
			setCreditCar: 'modal/modal-credit/SET_CREDIT_CAR'
		}),
		...mapActions({
			getFilters: 'filters/filters/getFilters'
		}),
		callClick(carInfo) {
			this.setCallbackCar(carInfo)
			this.setModalMain(this.modalChooseCar)
		},
		creditClick(carInfo) {
			this.setCreditCar(carInfo)
			this.setModalMain(this.modalCreditCar)
		},
		async sortChosen(filter) {
			this.sort = filter
			this.offers = await this.getCatalogCars(this.offersParams);
		}
	},
}
</script>