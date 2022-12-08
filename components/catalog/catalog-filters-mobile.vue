<template>
	<vue-slide-toggle :open="showFilters">
		<div class="catalog__filters-mobile">
			<label class="form__field-wrap form__field-wrap--select">
				<inputs-select :value="chosenMark"
				               :options="marks"
				               @input="select( $event, 'mark')" />
			</label>
			<label class="form__field-wrap form__field-wrap--select">
				<inputs-select :value="chosenFolder"
				               :options="folders"
				               @input="select( $event, 'folder')" />
			</label>
			<label class="form__field-wrap form__field-wrap--select">
				<inputs-select :value="chosenGeneration"
				               :options="generations"
				               @input="select( $event, 'generation')" />
			</label>
			<div class="button button--filter"
			     @click="onFilter">
				Применить
			</div>
		</div>
	</vue-slide-toggle>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import onlyFilters from '@/apollo/queries/offer/onlyFilters'

export default {
	data() {
		return {
			filters: {},
			chosenGenerationSlug: ''
		}
	},
	computed: {
		...mapGetters({
			showFilters: 'filters/filters/showFilters'
		}),
		marks() {
			return this.filters?.mark
		},
		chosenMark() {
			return this.filters?.chosen?.mark?.[0] || 'Марка'
		},
		folders() {
			return this.filters?.folder || []
		},
		chosenFolder() {
			return this.filters?.chosen?.folder?.[0] || 'Модель'
		},
		generations() {
			return this.filters?.generation || []
		},
		chosenGeneration() {
			return this.filters?.chosen?.generation?.[0] || 'Поколение'
		}
	},
	methods: {
		...mapActions({
			request: 'request'
		}),
		async select(slug, type) {
			switch (type) {
				case 'mark':
					this.chosenGenerationSlug = ''
					await this.getFilters({
						category: this.$route.params.category,
						mark_slug_array: [slug]
					})
					break
				case 'folder':
					this.chosenGenerationSlug = ''
					await this.getFilters({
						category: this.$route.params.category,
						mark_slug_array: [this.chosenMark.slug],
						folder_slug_array: [slug]
					})
					break
				case 'generation':
					this.chosenGenerationSlug = slug
					break
			}
		},
		async onFilter() {
			let category = this.$route.params.category
			let route = '/' + category
			if (this.chosenMark.slug) {
				route += '/' + this.chosenMark.slug
			}
			if (this.chosenFolder.slug) {
				route += '/' + this.chosenFolder.slug
			}
			if (this.chosenGenerationSlug) {
				route += '/' + this.chosenGenerationSlug
			}
			await this.$router.push(route)
		},
		async getFilters(assignVariables) {
			let variables = {}
			let params = {...assignVariables, ...variables}
			try {
				let response = await this.request({query: onlyFilters, variables: params})
				this.filters = response.data.offerFilters
			} catch (error) {
				console.log(error)
			}
		}
	},
	async mounted() {
		await this.getFilters({
			url: this.$route.fullPath
		})
	}
}
</script>