<template>
	<div class="modal__wrap">
		<div class="filter filter--modal">
			<component :is="component"
			           @check="check" />
		</div>
		<div class="page-main__button-fixed">
			<button-fixed @click="filter"> {total} </button-fixed>
		</div>
	</div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
	data() {
		return {
			marks: [],
			models: [],
			generations: [],
			engineTypes: [],
			driveTypes: [],
			gearboxes: []
		}
	},
	mounted() {
		this.marks = [...this.chosenMarkArray]
		this.models = [...this.chosenModelArray]
		this.generations = [...this.chosenGenerationArray]
		this.engineTypes = [...this.chosenEngineTypeArray]
		this.driveTypes = [...this.chosenDriveTypeArray]
		this.gearboxes = [...this.chosenGearboxArray]
	},
	computed: {
		...mapGetters({
			filters: 'filters/filters/filters',
			chosenMarkArray: 'filters/filters/chosenMarkArray',
			chosenModelArray: 'filters/filters/chosenModelArray',
			chosenGenerationArray: 'filters/filters/chosenGenerationArray',
			chosenEngineTypeArray: 'filters/filters/chosenEngineTypeArray',
			chosenDriveTypeArray: 'filters/filters/chosenDriveTypeArray',
			chosenGearboxArray: 'filters/filters/chosenGearboxArray',
			
			modalData: 'modal/modal-main/modalData'
		}),
		component() {
			if (this.modalData === 'mark' || this.modalData === 'drive-type'|| this.modalData === 'engine-type' || this.modalData === 'gearbox') {
				return `modal-filter-${this.modalData}`
			}
			if (this.modalData === 'model') {
				return this.chosenMarkArray.length ?
						'modal-filter-model' :
						'modal-filter-mark'
			}
			if (this.modalData === 'generation') {
				if (!this.chosenMarkArray.length) {
					return 'modal-filter-mark'
				} else if (!this.chosenModelArray.length) {
					return 'modal-filter-model'
				} else {
					return 'modal-filter-generation'
				}
			}
			if (this.modalData === 'filter-mobile'){
				return 'modal-filter-mobile'
			}
		},
		
		markSlugArray() {
			return this.marks.map(val => val.slug)
		},
		modelSlugArray() {
			return this.models.map(val => val.slug)
		},
		generationSlugArray() {
			return this.generations.map(val => val.slug)
		},
		engineTypeIdArray() {
			return this.engineTypes.map(val => val.id)
		},
		driveTypeIdArray() {
			return this.driveTypes.map(val => val.id)
		},
		gearboxIdArray() {
			return this.gearboxes.map(val => val.id)
		},
	},
	methods: {
		...mapMutations({
			setChosenMarkArray: 'filters/filters/SET_CHOSEN_MARK_ARRAY',
			setChosenModelArray: 'filters/filters/SET_CHOSEN_MODEL_ARRAY',
			setChosenGenerationArray: 'filters/filters/SET_CHOSEN_GENERATION_ARRAY',
			setChosenEngineTypeArray: 'filters/filters/SET_CHOSEN_ENGINE_TYPE_ARRAY',
			setChosenDriveTypeArray: 'filters/filters/SET_CHOSEN_DRIVE_TYPE_ARRAY',
			setChosenGearboxArray: 'filters/filters/SET_CHOSEN_GEARBOX_ARRAY',
			
			setQueriesMarksSlug: 'filters/filters/SET_QUERIES_MARKS_SLUG',
			setQueriesModelsSlug: 'filters/filters/SET_QUERIES_MODELS_SLUG',
			setQueriesGenerationsSlug: 'filters/filters/SET_QUERIES_GENERATIONS_SLUG',
			setQueriesEngineTypesId: 'filters/filters/SET_QUERIES_ENGINE_TYPES_ID',
			setQueriesDriveTypesId: 'filters/filters/SET_QUERIES_DRIVE_TYPES_ID',
			setQueriesGearboxesId: 'filters/filters/SET_QUERIES_GEARBOXES_ID'
		}),
		...mapActions({
			closeModal: 'modal/modal-main/closeModal',
			getFilters: 'filters/filters/getFilters',
		}),
		check(type) {
			if (type.modal === 'marks') {
				this.marks = type.data
			}
			if (type.modal === 'models') {
				this.models = type.data
			}
			if (type.modal === 'generations') {
				this.generations = type.data
			}
			if (type.modal === 'engineTypes') {
				this.engineTypes = type.data
			}
			if (type.modal === 'driveTypes') {
				this.driveTypes = type.data
			}
			if (type.modal === 'gearboxes') {
				this.gearboxes = type.data
			}
		},
		async filter() {
			this.setUrl()
			
			this.setQueriesMarksSlug(this.markSlugArray)
			this.setQueriesModelsSlug(this.modelSlugArray)
			this.setQueriesGenerationsSlug(this.generationSlugArray)
			this.setQueriesEngineTypesId(this.engineTypeIdArray)
			this.setQueriesDriveTypesId(this.driveTypeIdArray)
			this.setQueriesGearboxesId(this.gearboxIdArray)
			
			this.setChosenMarkArray(this.marks)
			this.setChosenModelArray(this.models)
			this.setChosenGenerationArray(this.generations)
			this.setChosenEngineTypeArray(this.engineTypes)
			this.setChosenDriveTypeArray(this.driveTypes)
			this.setChosenGearboxArray(this.gearboxes)
			await this.closeModal()
			await this.getFilters()
			
		},
		setUrl() {
			//TODO нет логики для выбора 1 марки и далее + навести тут порядок
			if (this.marks.length === 1) {
				this.$router.push('/used/' + this.marks[0].slug)
				if (this.models.length === 1) {
					this.$router.push('/used/' + this.marks[0].slug + '/' + this.models[0].slug)
				} else {
					this.$router.push({
						path: '/used/' + this.marks[0].slug,
						query: {
							folder_slug_array: this.modelSlugArray
						}
					})
				}
			} else {
				this.$router.push({
					path: '/used', query:
							{
								mark_slug_array: this.markSlugArray,
								folder_slug_array: this.modelSlugArray,
								generation_slug_array: this.generationSlugArray,
								engine_type_id_array: this.engineTypeIdArray,
								drive_type_id_array: this.driveTypeIdArray,
								gearbox_id_array: this.gearboxIdArray,
							}
				})
			}
		},
	}
}
</script>