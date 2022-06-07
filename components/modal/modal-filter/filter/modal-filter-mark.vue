<template>
	<div>
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
</template>
<script>
import {mapGetters} from "vuex";

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
			chosenMarkArray: 'filters/filters/chosenMarkArray',
		}),
		marksList() {
			return this.filters.mark.map(mark => {
				mark.show = mark.title.toLowerCase().includes(this.search.toLowerCase());
				return mark
			})
		}
	},
	mounted() {
		this.marks = [...this.chosenMarkArray]
	},
	methods: {
		isChecked(mark) {
			return this.marks.some(item => item.slug === mark.slug)
		},
		async checkMark(mark) {
			if (this.isChecked(mark)) {
				this.marks = this.marks.filter(item => item.id !== mark.id)
			} else {
				this.marks.push(mark)
			}
			this.$emit('check', {
				modal: 'marks',
				data: this.marks
			})
		}
	},
}
</script>