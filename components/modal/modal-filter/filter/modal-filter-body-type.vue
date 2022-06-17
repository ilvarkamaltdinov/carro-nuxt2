<template>
	<div class="filter__menu-list">
		<checkbox-filter v-for="item in body_type_list"
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
			bodyTypes: [],
		}
	},
	computed: {
		...mapGetters({
			filters: 'filters/filters/filters',
			chosen: 'filters/filters/chosen'
		}),
		body_type_list() {
			return this.filters.bodyType
		},
	},
	mounted() {
		this.bodyTypes = this.chosen.bodyType || []
	},
	methods: {
		isChecked(bodyType) {
			return this.bodyTypes.some(item => item.id === bodyType.id)
		},
		async checkItem(bodyType) {
			if (this.isChecked(bodyType)) {
				this.bodyTypes = this.bodyTypes.filter(item => item.id !== bodyType.id)
			} else {
				this.bodyTypes.push(bodyType)
			}
			this.$emit('check', {
				type: 'bodyType',
				data: this.bodyTypes
			})
		}
	},
}
</script>