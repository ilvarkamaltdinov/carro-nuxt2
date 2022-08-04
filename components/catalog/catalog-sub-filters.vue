<template>
	<div class="grid__col-12"
	     v-if="showFoldersTabs || showGenerationsTabs">
		<catalog-folders v-if="showFoldersTabs"
		                 :folders="folders"
		                 :is-all="showAll" />
		<catalog-generations v-if="showGenerationsTabs"
		                     :generations="filters.generation"
		                     :is-all="showAll" />

		<div class="catalog__more-buttons"
		     v-if="$device.isMobile">
			<div class="catalog__more-buttons-wrap">
				<button-typical :text="'Цена до: ' + (this.chosenPrice ? Number(chosenPrice).toLocaleString('ru') + ' ₽' : 'выбрать')"
				                :class="'button--show button--show-price'" />
				<select class="select select--hidden"
				        @change="sortPrice($event.target.value)">
					<option value="Цена до">
						Цена до
					</option>
					<option :selected="item === chosen.priceTo"
					        v-for="item in priceRange"
					        :value="item">
						До {{ item | toCurrency }}
					</option>
				</select>
			</div>
			<button-typical
					v-if="showAllButton"
					@click="onToggleAll"
					:text="currentAllText"
					:class="{'button--show-active': showAll }"
					class="button--show" />
		</div>
	</div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import filters from "@/mixins/filters";
import seoTags from "@/apollo/queries/seoTags";
import folders from "@/apollo/queries/folder/folders";

export default {
	mixins: [filters],
	data() {
		return {
			showAll: false
		}
	},
	computed: {
		...mapGetters({
			folders: "folders/folders/folders",
			filters: 'filters/filters/filters',
			chosen: 'filters/filters/chosen'
		}),
		isFolders() {
			return this.$route.name === 'category-mark'
		},
		isGenerations() {
			return this.chosen.folder?.length === 1
		},
		currentAllText() {
			if (this.showAll) {
				if (this.isFolders) {
					return 'Меньше моделей'
				} else if (this.isGenerations) {
					return 'Меньше поколений'
				}
			} else {
				if (this.isFolders) {
					return 'Больше моделей'
				} else if (this.isGenerations) {
					return 'Больше поколений'
				}
			}
		},
		showAllButton() {
			if (this.isFolders) {
				return this.folders?.length >= 3
			} else if (this.isGenerations) {
				return this.filters.generation?.length >= 2
			}
		},
		chosenPrice() {
			return this.chosen.priceTo ? this.chosen.priceTo : null
		},
		priceRange() {
			if (this.filters.price) {
				return this._.range(this.filters.price[0] + 100000, this.filters.price[1] + 100000, 100000)
			}
		},
		showFoldersTabs() {
			return this.folders.length && this.$route.name === 'category-mark'
		},
		showGenerationsTabs() {
			return this.filters.generation && !this.showFoldersTabs && this.$route.name !== 'category'
		}
	},
	methods: {
		...mapMutations({
			setFilterClick: 'filters/filters/SET_IS_FILTER_CLICK'
		}),
		async sortPrice(value) {
			if (value !== 'Цена до') {
				this.setFilterClick(true)
				await this.$router.push({
					path: this.$route.fullPath,
					query: {price_from: this.filters.price[0], price_to: value}
				});
			}
		},
		async onToggleAll() {
			await setTimeout(function () {window.scrollTo(0, -100);}, 1);
			this.showAll = !this.showAll
		},
	}
}
</script>
