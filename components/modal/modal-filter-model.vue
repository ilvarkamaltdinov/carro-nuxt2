<template>
	<section class="modal modal--credit">
		<div class="heading-group heading-group--modal">
			<div class="heading-group__wrap">
				<h2 class="heading heading--h1">Фильтр</h2>
				<!--<span class="heading-group__label">1488 автомобиля в наличии</span>-->
			</div>
			<button class="modal__close"
			        @click="setModalMain(false)">
				<svg-icon class="modal__close-icon"
				          name="icon-close-s" />
			</button>
		</div>
		<div class="modal__wrap">
			<div class="filter filter--modal">
				<!--<div class="filter__search form">-->
				<!--	<label class="form__field-wrap form__field-wrap&#45;&#45;search"-->
				<!--	       for="filter-search">-->
				<!--		<input class="form__field"-->
				<!--		       id="filter-search"-->
				<!--		       type="search"-->
				<!--		       v-model="search"-->
				<!--		       placeholder="Поиск по маркам" />-->
				<!--		<svg-icon class="form__icon-search"-->
				<!--		          name="icon-search"></svg-icon>-->
				<!--	</label>-->
				<!--</div>-->
				<div class="modal__choose-group"
				     v-for="mark in modelsList"
				     :key="mark.id">
					<div class="heading heading--h2">{{ mark.title }}</div>
					<div class="filter__menu-list">
						<checkbox-filter v-for="model in mark.folders"
						                 :key="model.id"
						                 :is-check="isChecked(model)"
						                 @click="checkModel(model)">
							{{ model.title }}
						</checkbox-filter>
					</div>
				</div>
			</div>
			<div class="page-main__button-fixed">
				<button-fixed v-show="modelSlugArray.length"
				              @click="filter">
					{{ total }}
				</button-fixed>
			</div>
		</div>
	</section>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
	data() {
		return {
			search: '',
			models: [],
		}
	},
	computed: {
		...mapGetters({
			filters: 'filters/filters/filters',
			total: 'filters/filters-total/total',
			chosenMarkArray: 'filters/filters/chosenMarkArray',
			chosenModelArray: 'filters/filters/chosenModelArray',
			queriesMarksSlug: 'filters/filters/queriesMarksSlug'
		}),
		modelsList() {
			return this.filters.mark.filter(val => val.folders.length)
		},
		modelSlugArray() {
			return this.models.map(val => val.slug)
		}
	},
	mounted() {
		this.models = this.chosenModelArray
	},
	methods: {
		...mapActions({
			getTotal: 'filters/filters-total/getTotal',
			getFilters: 'filters/filters/getFilters'
		}),
		...mapMutations({
			setModalMain: 'modal/modal-main/SET_MODAL_MAIN',
			setChosenModelArray: 'filters/filters/SET_CHOSEN_MODEL_ARRAY',
			setQueriesModelsSlug: 'filters/filters/SET_QUERIES_MODELS_SLUG',
		}),
		setUrl() {
			this.$router.push({query: {mark_slug_array: this.queriesMarksSlug, folder_slug_array: this.modelSlugArray}})
		},
		filter() {
			this.setUrl()
			this.setQueriesModelsSlug(this.modelSlugArray)
			this.setChosenModelArray(this.models)
			this.setModalMain(false)
			this.getFilters()
		},
		isChecked(model) {
			return this.models.some(item => item.slug === model.slug)
		},
		async checkModel(model) {
			if (this.isChecked(model)) {
				this.models = this.models.filter(item => item.id !== model.id)
			} else {
				this.models.push(model)
			}
			// await this.getTotal({mark_slug_array: this.markSlugArray})
		}
	},
}
</script>