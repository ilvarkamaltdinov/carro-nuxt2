<template>
	<div class="grid__col-12">
		<div class="tabs">
			<ul :class="{'tabs__list--all':allFolders}"
			    class="tabs__list"
			    ref="tabs"
			    @scroll="scrollFolders">
				<li role="presentation"
				    v-for="(tab, index) in sortFolders"
				    :ref="'tab' + index"
				    :class="{'tabs__item--active':tab.slug === $route.params.model}"
				    class="tabs__item">
					<nuxt-link class="tabs__link"
					           :to="`/${$route.params.category}/${$route.params.mark}/${tab.slug}`">
						{{ tab.title }}
						<span class="tabs__count">
							{{ tab.offers_count }}
						</span>
					</nuxt-link>
				</li>
			</ul>
		</div>
		<div class="catalog__more-buttons">
			<div class="catalog__more-buttons-wrap"
			     v-if="$device.isMobile">
				<button-typical :text="'Цена до: ' + (this.chosenPrice ? Number(chosenPrice).toLocaleString('ru') + ' ₽' : 'выбрать')"
				                :class="'button--show button--show-price'" />
				<select class="select select--hidden"
				        @change="sortPrice($event.target.value)">
					<option value="Цена до">
						Цена до
					</option>
					<option :selected="item === chosen.priceTo" v-for="item in priceRange"
					        :value="item">
						До {{ item | toCurrency }}
					</option>
				</select>
			</div>
			
			<button-typical
					v-if="$device.isMobile && sortFolders.length > 3"
					@click="clickAllFolders"
					:text="allFolders ? 'Меньше моделей' :'Больше моделей'"
					:class="{'button--show-active': allFolders }"
					class="button--show" />
		</div>
	</div>
</template>
<script>
import {mapGetters} from "vuex"
import filters from "@/mixins/filters";

export default {
	mixins: [filters],
	data() {
		return {
			allFolders: false,
		}
	},
	mounted() {
		this.$nextTick(() => {
			if (localStorage.foldersTabsLeft && this.$device.isMobile && this.$refs.tabs) {
				this.$refs.tabs.scrollLeft = Number(localStorage.foldersTabsLeft)
			}
		})
	},
	props: {
		offers: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		...mapGetters({
			folders: 'folders/folders/folders',
			filters: 'filters/filters/filters',
			chosen: 'filters/filters/chosen'
		}),
		chosenPrice() {
			return this.chosen.priceTo ? this.chosen.priceTo : null
		},
		priceRange() {
			if (this.filters.price) {
				return this._.range(this._.round(this.filters.price[0], -5) + 100000, this._.round(this.filters.price[1], -5) + 100000, 100000)
			}
		},
		sortFolders() {
			return this.$_.sortBy(this.folders, [function (folder) {
				return folder.offers_count;
			}]).reverse();
		}
	},
	beforeDestroy() {
		localStorage.generationsTabsLeft = 0
	},
	methods: {
		async sortPrice(value) {
			if (value !== 'Цена до') {
				await this.$router.push({
					path: this.$route.fullPath,
					query: {price_from: this.filters.price[0], price_to: value}
				});
			}
		},
		async clickAllFolders() {
			await window.scrollTo(0, 0)
			this.allFolders = !this.allFolders
			this.$refs.tabs.scrollLeft = 0
		},
		scrollFolders() {
			localStorage.foldersTabsLeft = event.target.scrollLeft
		},
	},
}
</script>
