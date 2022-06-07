<template>
	<div class="filter__menu-list">
		<checkbox-filter v-for="item in driveTypesList"
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
			chosenDriveTypeArray: 'filters/filters/chosenDriveTypeArray',
			filters: 'filters/filters/filters'
		}),
		driveTypesList() {
			return this.filters.driveType
		},
	},
	mounted() {
		this.driveTypes = [...this.chosenDriveTypeArray]
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
				modal: 'driveTypes',
				data: this.driveTypes
			})
		}
	},
}
</script>