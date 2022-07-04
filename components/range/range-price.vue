<template>
	<div class="form__block form__block--range range">
		<div class="form__range-wrap">
			<label class="form__field-wrap form__field-wrap--range">
				<input class="form__field"
				       placeholder="Дата рождения"
				       type="text"
				       name="date"
				       :value="from | toCurrency" />
			</label>
			<label class="form__field-wrap form__field-wrap--range">
				<input class="form__field"
				       placeholder="Дата рождения"
				       type="text"
				       name="date"
				       :value="to | toCurrency" />
			</label>
		</div>
		<client-only>
			<range-slider
					v-if="filterPrice"
					range-class="range-period"
					:options="getPriceOptions">
			</range-slider>
		</client-only>
	</div>
</template>
<script>
import {mapGetters} from "vuex";
import filters from "@/mixins/filters";

export default {
	mixins: [filters],
	data() {
		return {
			from: '',
			to: '',
			minPrice: String(this.filterPrice?.[0]),
			maxPrice: String(this.filterPrice?.[1])
		}
	},
	computed: {
		...mapGetters({
			filters: 'filters/filters/filters',
			chosen: 'filters/filters/chosen'
		}),
		filterPrice() {
			if(this.filters){
				return this.filters.price
			}
		},
		getPriceOptions() {
			return {
				type: 'double',
				grid: false,
				step: 10000,
				from: Number(this.from),
				to: Number(this.to),
				min: Number(this.filterPrice?.[0]),
				max: Number(this.filterPrice?.[1]),
				onFinish: (event) => this.sendPrice(event),
				onChange: (event) => this.changePrice(event)
			}
		}
	},
	mounted() {
		if (this.$route.query.price_from && this.$route.query.price_to) {
			this.from = Number(this.$route.query.price_from)
			this.to = Number(this.$route.query.price_to)
		} else {
			this.from = this.filterPrice?.[0]
			this.to = this.filterPrice?.[1]
		}
	},
	methods: {
		async sendPrice() {
			await this.$router.push({path: this.$route.fullPath, query: {price_from: this.from, price_to: this.to}});
		},
		changePrice(event) {
			this.from = event.from
			this.to =  event.to
		}
	}
}
</script>