<template>
	<div class="filter__menu-list">
		<checkbox-filter v-for="item in gearboxesList"
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
			gearboxes: [],
		}
	},
	computed: {
		...mapGetters({
			chosenGearboxArray: 'filters/filters/chosenGearboxArray',
			filters: 'filters/filters/filters'
		}),
		gearboxesList() {
			return this.filters.gearbox
		},
	},
	mounted() {
		this.gearboxes = [...this.chosenGearboxArray]
	},
	methods: {
		isChecked(gearbox) {
			return this.gearboxes.some(item => item.id === gearbox.id)
		},
		async checkItem(gearbox) {
			if (this.isChecked(gearbox)) {
				this.gearboxes = this.gearboxes.filter(item => item.id !== gearbox.id)
			} else {
				this.gearboxes.push(gearbox)
			}
			this.$emit('check', {
				modal: 'gearboxes',
				data: this.gearboxes
			})
		}
	},
}
</script>