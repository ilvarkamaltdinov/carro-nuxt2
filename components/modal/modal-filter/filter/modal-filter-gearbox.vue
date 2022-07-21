<template>
	<div class="filter__menu-list">
		<checkbox-filter v-for="item in gearbox_list"
		                 :key="item.id"
		                 :is-check="isChecked(item)"
		                 @click="checkItem(item)">
			{{ item.title_short_rus }}
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
			filters: 'filters/filters/filters',
			chosen: 'filters/filters/chosen'
		}),
		gearbox_list() {
			return this.filters.gearbox
		},
	},
	mounted() {
		this.gearboxes = this.chosen.gearbox || []
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
				type: 'gearbox',
				data: this.gearboxes
			})
		}
	},
}
</script>