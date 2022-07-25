<template>
	<div class="page-header__search page-header__search--form form"
	     :class="{'page-header__search--form-visible':mobileSearch}">
		<label class="form__field-wrap form__field-wrap--search"
		       for="filter-search">
			<input class="form__field"
			       id="filter-search"
			       type="search"
			       @input="onSearch"
			       v-model="search"
			       placeholder="Поиск по маркам" />
			<svg-icon v-if="search === ''"
			          class="form__icon-search icon"
			          name="icon-search" />
			<svg-icon v-else
			          class="form__icon-search icon"
			          @click="clearSearch"
			          name="icon-close-s" />
		</label>
	</div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
	data() {
		return {
			search: ''
		}
	},
	watch: {
		clearSearchValue() {
			this.search = ''
		}
	},
	computed: {
		...mapGetters({
			marks: 'marks/marks/allMarks',
			clearSearchValue: 'modal/modal-search/clearSearchValue',
			mobileSearch: 'modal/modal-search/mobileSearch'
		})
	},
	methods: {
		...mapMutations({
			setModalSearch: 'modal/modal-search/setModalSearch',
			setSearchResult: 'modal/modal-search/setSearchResult'
		}),
		clearSearch(){
			this.search = ''
			this.setModalSearch(false)
		},
		async onSearch() {
			let result = []
			result = this.marks.filter(mark => {
				return mark.title.toLowerCase().includes(this.search.toLowerCase())
			})
			await this.setSearchResult(result)
			if (this.search.length >= 3) {
				await this.setModalSearch(true)
			} else {
				await this.setModalSearch(false)
			}
		}
	}
}
</script>