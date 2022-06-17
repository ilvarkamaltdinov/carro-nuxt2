<template>
	<div class="filter__menu-list">
		<checkbox-filter v-for="item in engine_type_list"
		                 :key="item.id"
		                 :is-check="isChecked(item)"
		                 @click="checkItem(item)">
			{{ item.title }}
		</checkbox-filter>
	</div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	data() {
		return {
			engineTypes: [],
		}
	},
	computed: {
		...mapGetters({
			filters: 'filters/filters/filters',
			chosen: 'filters/filters/chosen'
		}),
		engine_type_list() {
			return this.filters.engineType
		},
	},
	mounted() {
		this.engineTypes = this.chosen.engineType || []
	},
	methods: {
		isChecked(engineType) {
			return this.engineTypes.some(item => item.id === engineType.id)
		},
		async checkItem(engineType) {
			if (this.isChecked(engineType)) {
				this.engineTypes = this.engineTypes.filter(item => item.id !== engineType.id)
			} else {
				this.engineTypes.push(engineType)
			}
			this.$emit('check', {
				type: 'engineType',
				data: this.engineTypes
			})
		}
	},
}
</script>