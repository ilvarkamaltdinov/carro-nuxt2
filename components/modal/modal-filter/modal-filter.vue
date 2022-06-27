<template>
	<div class="modal__wrap">
		<div class="filter filter--modal">
			<component :is="modalData.type"
			           @check="check" />
		</div>
		<div class="page-main__button-fixed">
			<button-typical @click="filter" text="Показать автомобили" button-class="button--credit  button--fixed" />
		</div>
	</div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
	data() {
		return {
			checkDependencies: {
				mark: [
					'folder',
					'generation',
				],
				folder: [
					'generation',
				]
			}
		}
	},
	computed: {
		...mapGetters({
			filters: 'filters/filters/filters',
			chosen: 'filters/filters/chosen',
			modalData: 'modal/modal-main/modalData'
		}),
	},
	methods: {
		...mapMutations({
			setChosen: 'filters/filters/SET_CHOSEN',
			unsetChosen: 'filters/filters/UNSET_CHOSEN',
      setIsFilterClick: 'filters/filters/SET_IS_FILTER_CLICK',
		}),
		...mapActions({
			closeModal: 'modal/modal-main/closeModal',
			setUrl:'filters/filters/setUrl'

		}),
		check(data) {
			this.setChosen({key: data.type, value: data.data})
			//очищаю поля при выборе марки
			this.checkDependencies[data.type]?.forEach(value => {
				this.unsetChosen(value)
			})
		},
		// TODO проверка что поколение выбрано только при 1ой марки и 1ой модели
		// checkGeneration() {
		// 	if (this.chosen.mark?.length !== 1 || this.chosen.folder?.length !== 1){
		// 		this.setChosen({key: 'generation', value: null})
		// 	}
		// },
		async filter() {
      this.setIsFilterClick(true)
			// this.checkGeneration()
			await this.closeModal()
			await this.setUrl();
			// await this.getFilters(false)
		}
	}
}
</script>
