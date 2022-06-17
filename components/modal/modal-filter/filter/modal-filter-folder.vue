<template>
	<div>
		<div class="modal__choose-group"
		     v-for="mark in mark_list"
		     :key="mark.id">
			<div class="heading heading--h2">{{ mark.title }}</div>
			<div class="filter__menu-list">
				<checkbox-filter v-for="folder in filters.folder"
				                 v-if="folder.mark_id === mark.id"
				                 :key="folder.id"
				                 :is-check="isChecked(folder)"
				                 @click="checkFolder(folder)">
					{{ folder.title }}
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
			folders: [],
		}
	},
	computed: {
		...mapGetters({
			filters: 'filters/filters/filters',
			chosen: 'filters/filters/chosen',
			// chosenModelArray: 'filters/filters/chosenModelArray',
			// chosenMarkArray: 'filters/filters/chosenMarkArray',
		}),
		mark_list() {
			return this.chosen.mark
		}
	},
	mounted() {
		this.folders = this.chosen.folder || []
	},
	methods: {
		isChecked(folder) {
			return this.folders.some(item => item.slug === folder.slug)
		},
		async checkFolder(folder) {
			if (this.isChecked(folder)) {
				this.folders = this.folders.filter(item => item.id !== folder.id)
			} else {
				this.folders.push(folder)
			}
			this.$emit('check', {
				type: 'folder',
				data: this.folders
			})
		}
	},
}
</script>