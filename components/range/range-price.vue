<template>
	<div class="form__block form__block--range range">
		<div class="form__range-wrap">
			<label class="form__field-wrap form__field-wrap--range">
				<input class="form__field"
				       placeholder="Цена от"
				       type="tel"
				       name="date"
				       inputmode="numeric"
				       @change="changePriceFrom"
				       :value="from | toCurrency" />
			</label>
			<label class="form__field-wrap form__field-wrap--range">
				<input class="form__field"
				       placeholder="Цена до"
				       type="tel"
				       name="date"
				       @change="changePriceTo"
				       inputmode="numeric"
				       :value="to | toCurrency" />
			</label>
		</div>
		<client-only>
			<range-slider
					range-class="range-period"
					:options="getPriceOptions"
          ref="range-price">
			</range-slider>
		</client-only>
	</div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";
import filters from "@/mixins/filters";
import seoTags from "@/apollo/queries/seoTags";

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
			if (this.filters) {
				return this.filters.price
			}
		},
		getPriceOptions() {
			return {
				type: 'double',
				grid: false,
				realTime: true,
				step: 100000,
				from: this.from,
				to: this.to,
				min: this.filterPrice?.[0],
				max: this.filterPrice?.[1],
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
			this.to =this.filterPrice?.[1]
		}
	},
	methods: {
		...mapMutations({
			setIsFilterClick: 'filters/filters/SET_IS_FILTER_CLICK'
		}),
		changePriceFrom(e) {
			this.from = Number(e.target.value.replace(/[^+\d]/g, ''))
      this.$refs["range-price"].slider.update({
        from: this.from
      })
			this.sendPrice()
		},
		changePriceTo(e) {
			this.to = Number(e.target.value.replace(/[^+\d]/g, ''))
      this.$refs["range-price"].slider.update({
        to: this.to
      })
			this.sendPrice()
		},
		async sendPrice() {
			this.setIsFilterClick(true)
			await this.$router.push({path: this.$route.fullPath, query: {price_from: this.from, price_to: this.to}});
		},
		changePrice(event) {
			this.from = event.from
			this.to = event.to
		}
	}
}
</script>
