<template>
	<div class="filter__menu-list">
		<checkbox-filter v-for="item in drive_type_list"
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
			driveTypes: [],
		}
	},
	computed: {
		...mapGetters({
			filters: 'filters/filters/filters',
			chosen: 'filters/filters/chosen'
		}),
		drive_type_list() {
			return this.filters.driveType
		},
	},
	mounted() {
		this.driveTypes = this.chosen.driveType || []
	},
	methods: {
		isChecked(driveType) {
			return this.driveTypes.some(item => item.id === driveType.id)
		},
		async checkItem(driveType) {
			if (this.isChecked(driveType)) {
				this.driveTypes = this.driveTypes.filter(item => item.id !== driveType.id)
			} else {
				this.driveTypes.push(driveType)
			}
			this.$emit('check', {
				type: 'driveType',
				data: this.driveTypes
			})
		}
	},
}
</script>