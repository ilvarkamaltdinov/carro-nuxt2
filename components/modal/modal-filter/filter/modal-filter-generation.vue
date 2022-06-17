<template>
	<div>
		<div class="filter__menu-list">
			<checkbox-filter v-for="generation in generation_list"
			                 :key="generation.id"
			                 :is-check="isChecked(generation)"
			                 @click="checkModel(generation)">
				{{ generation.title }}
			</checkbox-filter>
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
			filters: 'filters/filters/filters',
			chosen: 'filters/filters/chosen'
		}),
		generation_list() {
			return this.filters.generation
		},
	},
	mounted() {
		this.generations = this.chosen.generation || []
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
				type: 'generation',
				data: this.generations
			})
		}
	},
}
</script>