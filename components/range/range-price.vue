<template>
	<div class="form__block form__block--range range">
		<div class="form__range-wrap">
			<label class="form__field-wrap form__field-wrap--range">
				<input class="form__field"
				       placeholder="Цена от"
				       v-model="from"
				       type="tel" />
			</label>
			<label class="form__field-wrap form__field-wrap--range">
				<input class="form__field"
				       placeholder="Цена до"
				       v-model="to"
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

export default {
	data() {
		return {
			from: '',
			to: ''
		}
	},
	watch: {
		filters() {
			this.from = this.filters.price[0]
			this.to = this.filters.price[1]
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
		this.from = this.filterPrice?.[0]
		this.to = this.filterPrice?.[1]
	},
	methods: {
		sendPrice() {
			console.log(this.from, this.to)
		},
		changePrice(event) {
			this.from = event.from
			this.to = event.to
		}
	}
}
</script>