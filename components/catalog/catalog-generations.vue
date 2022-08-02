<template>
	<div class="grid__col-12">
		<div class="tabs">
			<ul :class="{'tabs__list--all':allGenerations}"
			    class="tabs__list"
			    ref="tabs"
			    @scroll="scrollGenerations">
				<li role="presentation"
				    v-for="(tab, index) in generations"
				    :ref="'tab' + index"
				    :class="{'tabs__item--active':tab.slug === $route.params.car}"
				    class="tabs__item">
					<nuxt-link class="tabs__link"
					           :to="`/${$route.params.category}/${$route.params.mark}/${$route.params.model}/${tab.slug}`">
						{{ tab.name }} [{{ tab.year_begin }} - {{ tab.year_end ? tab.year_end : 'н.в.' }}]
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
					v-if="$device.isMobile && generations.length > 3"
					@click="clickAllGenerations"
					:text="allGenerations ? 'Меньше поколений' :'Больше поколений '"
					:class="{'button--show-active': allGenerations }"
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
			allGenerations: false,
		}
	},
	mounted() {
		this.$nextTick(() => {
			if (localStorage.generationsTabsLeft && this.$device.isMobile && this.$refs.tabs) {
				this.$refs.tabs.scrollLeft = Number(localStorage.generationsTabsLeft)
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
			generations: 'generations/generations/generations',
			filters: 'filters/filters/filters',
			chosen: 'filters/filters/chosen'
		}),
		chosenPrice(){
			return this.chosen.priceTo ? this.chosen.priceTo : null
		},
		priceRange() {
			return this._.range(this._.round(this.filters.price[0], -5) + 100000, this._.round(this.filters.price[1], -5) + 100000, 100000)
		}
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
		async clickAllGenerations() {
			await window.scrollTo(0, 0)
			this.allGenerations = !this.allGenerations
			this.$refs.tabs.scrollLeft = 0
		},
		scrollGenerations() {
			localStorage.generationsTabsLeft = event.target.scrollLeft
		},
	},
}
</script>
