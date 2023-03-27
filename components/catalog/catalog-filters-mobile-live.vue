<template>
	<div v-if="showFilters"
	     class="catalog__filters-mobile">
		<label class="form__field-wrap form__field-wrap--select">
			<inputs-select :value="chosenMark"
			               title="Марка"
			               :options="currentMarks"
			               @input="handlerSelect( $event, 'mark')" />
		</label>
		<label class="form__field-wrap form__field-wrap--select">
			<inputs-select :value="chosenFolder"
			               title="Модель"
			               :options="currentFolders"
			               @input="handlerSelect( $event, 'folder')" />
		</label>
		<label class="form__field-wrap form__field-wrap--select">
			<inputs-select :value="chosenGeneration"
			               title="Поколение"
			               :options="currentGenerations"
			               @input="handlerSelect( $event, 'generation')" />
		</label>
	</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
	computed: {
		...mapGetters({
			showFilters: 'filters/filters/showFilters',
			
			usedMarks: 'marks/marks/allMarks',
			commMarks: 'marks/marks/commMarks',
			europeMarks: 'marks/marks/europeMarks'
		}),
		
		currentMarks() {
			switch (this.$route.params.category) {
				case 'commercial':
					return this.commMarks
				case 'europe':
					return this.europeMarks
				default:
					return this.usedMarks
			}
		},
		chosenMark() {
			return this.currentMarks.find(item => item.slug === this.$route.params.mark) || null
		},
		
		currentFolders() {
			return this.chosenMark?.folders || null
		},
		chosenFolder() {
			return this.chosenMark?.folders.find(item => item.slug === this.$route.params.model) || null
		},
		
		currentGenerations() {
			return this.chosenFolder?.generations || null
		},
		chosenGeneration() {
			return this.currentGenerations?.find(item => item.slug === this.$route.params.car) || null
		},
	},
	methods: {
		...mapActions({
			request: 'request'
		}),
		...mapMutations({
			setMobileFilterClick: 'click/SET_MOBILE_FILTER_CLICK'
		}),
		async handlerSelect(title, type) {
			await this.setMobileFilterClick(true)
			let route = `/${this.$route.params.category || 'used'}/`
			switch (type) {
				case 'mark':
					let mark = this.currentMarks.find(item => item.title === title)
					route += `${mark.slug}`
					break
				case 'folder':
					let folder = this.currentFolders.find(item => item.title === title)
					route += `${this.$route.params.mark}/${folder.slug}`
					break
				case 'generation':
					let generation = this.currentGenerations.find(item => item.name === title)
					route += `${this.$route.params.mark}/${this.$route.params.model}/${generation.slug}`
					break
			}
			await this.$router.push(route)
		}
	}
}
</script>