<template>
	<vue-slide-toggle :open="showFilters" :duration="0">
		<div class="catalog__filters-mobile">
			<label class="form__field-wrap form__field-wrap--select">
				<inputs-select :value="chosenMark"
				               title="Марка"
				               :options="filters.mark"
				               @input="select( $event, 'mark')" />
			</label>
			<label class="form__field-wrap form__field-wrap--select">
				<inputs-select :value="chosenFolder"
				               title="Модель"
				               :options="filters.folder"
				               @input="select( $event, 'folder')" />
			</label>
			<label class="form__field-wrap form__field-wrap--select">
				<inputs-select :value="chosenGeneration"
				               title="Поколение"
				               :options="filters.generation"
				               @input="select( $event, 'generation')" />
			</label>
		</div>
	</vue-slide-toggle>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import onlyFilters from '@/apollo/queries/offer/onlyFilters'

export default {
	computed: {
		...mapGetters({
			showFilters: 'filters/filters/showFilters',
			filters: 'filters/filters/filters'
		}),
		chosenMark() {
			return this.filters?.chosen?.mark?.[0]?.slug || ''
		},
		chosenFolder() {
			return this.filters?.chosen?.folder?.[0]?.slug || ''
		},
		chosenGeneration() {
			return this.filters?.chosen?.generation?.[0]?.slug || ''
		},
	},
	methods: {
		...mapActions({
			request: 'request'
		}),
		...mapMutations({
			setMobileFilterClick: 'click/SET_MOBILE_FILTER_CLICK'
		}),
		async select(slug, type) {
			this.setMobileFilterClick(true)
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