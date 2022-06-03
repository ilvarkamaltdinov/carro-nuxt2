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
				<div class="filter__search form">
					<label class="form__field-wrap form__field-wrap--search"
					       for="filter-search">
						<input class="form__field"
						       id="filter-search"
						       type="search"
						       v-model="search"
						       placeholder="Поиск по маркам" />
						<svg-icon class="form__icon-search"
						          name="icon-search"></svg-icon>
					</label>
				</div>
				<div class="filter__menu-list">
					<checkbox-filter v-for="mark in marksList"
					                 v-show="mark.show"
					                 :key="mark.id"
					                 :is-check="isChecked(mark)"
					                 @click="checkMark(mark)">
						{{ mark.title }}
					</checkbox-filter>
				</div>
			</div>
			<div class="page-main__button-fixed">
				<button-fixed v-show="markSlugArray.length"
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
			marks: [],
		}
	},
	computed: {
		...mapGetters({
			filters: 'filters/filters/filters',
			total: 'filters/filters-total/total',
			chosenMarkArray: 'filters/filters/chosenMarkArray',
		}),
		marksList() {
			return this.filters.mark.map(mark => {
				mark.show = mark.title.toLowerCase().includes(this.search.toLowerCase());
				return mark
			})
		},
		markSlugArray() {
			return this.marks.map(val => val.slug)
		}
	},
	mounted() {
		this.marks = this.chosenMarkArray
	},
	methods: {
		...mapActions({
			getTotal: 'filters/filters-total/getTotal',
			getFilters: 'filters/filters/getFilters'
		}),
		...mapMutations({
			setModalMain: 'modal/modal-main/SET_MODAL_MAIN',
			setChosenMarkArray: 'filters/filters/SET_CHOSEN_MARK_ARRAY',
			setQueriesMarksSlug: 'filters/filters/SET_QUERIES_MARKS_SLUG',
		}),
		setUrl() {
			if (this.marks.length === 1) {
				this.$router.push('/used/' + this.marks[0].slug)
			} else {
				this.$router.push({path: '/used', query: {mark_slug_array: this.markSlugArray}})
			}
		},
		filter() {
			this.setUrl()
			this.setQueriesMarksSlug(this.markSlugArray)
			this.setChosenMarkArray(this.marks)
			this.setModalMain(false)
			this.getFilters()
		},
		isChecked(mark) {
			return this.marks.some(item => item.slug === mark.slug)
		},
		async checkMark(mark) {
			if (this.isChecked(mark)) {
				this.marks = this.marks.filter(item => item.id !== mark.id)
			} else {
				this.marks.push(mark)
			}
			await this.getTotal({mark_slug_array: this.markSlugArray})
		}
	},
}
</script>