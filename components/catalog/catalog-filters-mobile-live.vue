<template>
	<vue-slide-toggle :open="showFilters">
		<div class="catalog__filters-mobile">
			<label class="form__field-wrap form__field-wrap--select">
				<inputs-select :value="chosenMark"
				               :options="filters.mark"
				               @input="select( $event, 'mark')" />
			</label>
			<label class="form__field-wrap form__field-wrap--select">
				<inputs-select :value="chosenFolder"
				               :options="filters.folder"
				               @input="select( $event, 'folder')" />
			</label>
			<label class="form__field-wrap form__field-wrap--select">
				<inputs-select :value="chosenGeneration"
				               :options="filters.generation"
				               @input="select( $event, 'generation')" />
			</label>
		</div>
	</vue-slide-toggle>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import onlyFilters from '@/apollo/queries/offer/onlyFilters'

export default {
	computed: {
		...mapGetters({
			showFilters: 'filters/filters/showFilters',
			filters: 'filters/filters/filters'
		}),
		chosenMark() {
			return this.filters?.chosen?.mark?.[0] || 'Марка'
		},
		chosenFolder() {
			return this.filters?.chosen?.folder?.[0] || 'Модель'
		},
		chosenGeneration() {
			return this.filters?.chosen?.generation?.[0] || 'Поколение'
		},
	},
	methods: {
		...mapActions({
			request: 'request'
		}),
		async select(slug, type) {
			let route = `/${this.$route.params.category}/`
			switch (type) {
				case 'mark':
					route += `${slug}`
					break
				case 'folder':
					route += `${this.$route.params.mark}/${slug}`
					break
				case 'generation':
					route += `${this.$route.params.mark}/${this.$route.params.model}/${slug}`
					break
			}
			await this.$router.push(route)
		},
	}
}
</script>