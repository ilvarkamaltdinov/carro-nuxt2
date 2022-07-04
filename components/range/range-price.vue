<template>
	<div class="form__block form__block--range range">
		<div class="form__range-wrap">
			<label class="form__field-wrap form__field-wrap--range">
				<inputs-input placeholder="Цена от"
				              v-model="from"
				              mask="money"
				              type="tel" />
			</label>
			<label class="form__field-wrap form__field-wrap--range">
				<inputs-input placeholder="Цена до"
				              v-model="to"
				              mask="money"
				              type="tel" />
			</label>
		</div>
		<range-slider
				v-if="filterPrice"
				range-class="range-period"
				:options="getPriceOptions">
		</range-slider>
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
			to: ''
		}
	},
	watch: {
		filters() {
			this.from = String(this.filters.price[0])
			this.to = String(this.filters.price[1])
		}
	},
	computed: {
		...mapGetters({
			filters: 'filters/filters/filters',
			chosen: 'filters/filters/chosen'
		}),
		filterPrice() {
			return this.filters.price
		},
		getPriceOptions() {
			return {
				type: 'double',
				grid: false,
				step: 100000,
				min: String(this.filterPrice?.[0]),
				max: String(this.filterPrice?.[1]),
				onFinish: (event) => this.sendPrice(event),
				onChange: (event) => this.changePrice(event)
			}
		}
	},
	mounted() {
		this.from = String(this.filterPrice?.[0])
		this.to = String(this.filterPrice?.[1])
	},
	methods: {
		sendPrice() {
			this.$emit('change', [this.from, this.to])
		},
		changePrice(event) {
			this.from = String(event.from)
			this.to = String(event.to)
			
		}
	}
}
</script>