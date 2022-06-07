<template>
	<div>
		<div class="modal__choose-group"
		     v-for="model in modelList"
		     :key="model.id">
			<div class="heading heading--h2">{{ model.title }}</div>
			<div class="filter__menu-list">
				<checkbox-filter v-for="generation in model.generations"
				                 :key="generation.id"
				                 :is-check="isChecked(generation)"
				                 @click="checkModel(generation)">
					{{ generation.title }}
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
			generations: [],
		}
	},
	computed: {
		...mapGetters({
			chosenModelArray: 'filters/filters/chosenModelArray',
			chosenGenerationArray: 'filters/filters/chosenGenerationArray',
			filters: 'filters/filters/filters'
		}),
		modelList() {
			return this.chosenModelArray
		},
	},
	mounted() {
		this.generations = [...this.chosenGenerationArray]
	},
	methods: {
		isChecked(generation) {
			return this.generations.some(item => item.slug === generation.slug)
		},
		async checkModel(generation) {
			if (this.isChecked(generation)) {
				this.generations = this.generations.filter(item => item.id !== generation.id)
			} else {
				this.generations.push(generation)
			}
			this.$emit('check', {
				modal: 'generations',
				data: this.generations
			})
		}
	},
}
</script>