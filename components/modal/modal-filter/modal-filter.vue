<template>
	<div class="modal__wrap">
		<div class="filter filter--modal">
			<component :is="modalData.type"
			           @check="check" />
		</div>
		<div class="page-main__button-fixed">
			<button-fixed @click="filter">{total}</button-fixed>
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
			closeModal: 'modal/modal-main/closeModal'

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
		},
		setUrl() {
			let mark_slug_array = this.chosen.mark?.map(item => item.slug)
			let folder_slug_array = this.chosen.folder?.map(item => item.slug)
			let generation_slug_array = this.chosen.generation?.map(item => item.slug)


			let engine_type_slug_array = this.chosen.engineType?.map(item => item.slug)
			let engine_type_id_array = this.chosen.engineType?.map(item => item.id)
			let body_type_slug_array = this.chosen.bodyType?.map(item => item.slug)
			let body_type_id_array = this.chosen.bodyType?.map(item => item.id)


			let gearbox_id_array = this.chosen.gearbox?.map(item => item.id)
			let drive_type_id_array = this.chosen.driveType?.map(item => item.id)

			let url = ''
			let query = {}

			//TODO МАРКА
			if (mark_slug_array?.length === 1) {
				url = mark_slug_array[0]
			} else {
				query['mark_slug_array'] = mark_slug_array
			}

			//TODO МОДЕЛЬ
			if (mark_slug_array?.length === 1) {
				if (folder_slug_array?.length === 1) {
					url = mark_slug_array[0] + '/' + folder_slug_array[0]
					if (engine_type_slug_array?.length === 1) {
						url = mark_slug_array[0] + '/' + folder_slug_array[0] + '/' + engine_type_slug_array[0]
					}
				} else if (folder_slug_array?.length > 1) {
					query['folder_slug_array'] = folder_slug_array
					if (engine_type_slug_array) {
						query['engine_type_id_array'] = engine_type_id_array
					}
				}
			} else {
				query['folder_slug_array'] = folder_slug_array
			}

			//TODO ПОКОЛЕНИЕ
			if (mark_slug_array?.length === 1) {
				if (folder_slug_array?.length === 1) {
					if (generation_slug_array?.length === 1) {
						url = mark_slug_array[0] + '/' + folder_slug_array[0] + '/' + generation_slug_array[0]
					} else if (generation_slug_array?.length > 1) {
						query['generation_slug_array'] = generation_slug_array
					}
				}
			}
			//TODO ДВИГАТЕЛЬ
			if (mark_slug_array?.length === 1) {
				if (folder_slug_array?.length === 1) {
					if (generation_slug_array?.length === 1) {
						query['engine_type_id_array'] = engine_type_id_array
					}
				} else if (!folder_slug_array && engine_type_slug_array?.length === 1) {
					if (body_type_slug_array?.length === 1) {
						query['engine_type_id_array'] = engine_type_id_array
					} else {
						url = mark_slug_array?.[0] + '/' + engine_type_slug_array[0]
					}
				}
			} else {
				query['engine_type_id_array'] = engine_type_id_array
			}

			//TODO КУЗОВ
			if (mark_slug_array?.length === 1) {
				if (folder_slug_array?.length === 1) {
					if (generation_slug_array?.length === 1) {
						query['body_type_id_array'] = body_type_id_array
					}
					if (engine_type_slug_array?.length === 1) {
						query['body_type_id_array'] = body_type_id_array
					}
				} else if (!folder_slug_array) {
					if (body_type_slug_array?.length === 1) {
						url = mark_slug_array?.[0] + '/' + body_type_slug_array[0]
					} else {
						query['body_type_id_array'] = body_type_id_array
					}
				}
			} else {
				query['body_type_id_array'] = body_type_id_array
			}


			//TODO КОРОБКА
			if (gearbox_id_array?.length >= 1) {
				query['gearbox_id_array'] = gearbox_id_array
			}
			//TODO ПРИВОД
			if (drive_type_id_array?.length >= 1) {
				query['drive_type_id_array'] = drive_type_id_array
			}

			this.$router.push({
				path: '/used' + (url !== '' ? '/' + url : ''),
				query
			})
		}
	}
}
</script>
