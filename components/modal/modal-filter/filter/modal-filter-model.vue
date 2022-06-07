<template>
	<div>
		<div class="modal__choose-group"
		     v-for="mark in markslist"
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
</template>
<script>
import {mapGetters} from "vuex";

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
			chosenModelArray: 'filters/filters/chosenModelArray',
			chosenMarkArray: 'filters/filters/chosenMarkArray',
		}),
		markslist() {
			return this.filters.mark.filter(mark => mark.folders.length)
		}
	},
	mounted() {
		this.models = [...this.chosenModelArray]
	},
	methods: {
		isChecked(model) {
			return this.models.some(item => item.slug === model.slug)
		},
		async checkModel(model) {
			if (this.isChecked(model)) {
				this.models = this.models.filter(item => item.id !== model.id)
			} else {
				this.models.push(model)
			}
			this.$emit('check', {
				modal: 'models',
				data: this.models
			})
		}
	},
}
</script>