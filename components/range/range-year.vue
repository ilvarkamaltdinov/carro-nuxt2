<template>
	<div class="form__block form__block--range range">
		<div class="form__range-wrap">
			<label class="form__field-wrap form__field-wrap--range">
				<input class="form__field"
				       placeholder="Год от"
				       type="tel"
				       name="date"
				       @change="changeYearFrom"
				       inputmode="numeric"
				       v-model="from" />
			</label>
			<label class="form__field-wrap form__field-wrap--range">
				<input class="form__field"
				       placeholder="Год до"
				       type="tel"
				       @change="changeYearTo"
				       name="date"
				       inputmode="numeric"
				       v-model="to" />
			</label>
		</div>
		<client-only>
			<range-slider
					v-if="filterYear"
					range-class="range-year"
					:options="getYearOptions">
			</range-slider>
		</client-only>
	</div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
	data() {
		return {
			from: '',
			to: ''
		}
	},
	computed: {
		...mapGetters({
			filters: 'filters/filters/filters',
			chosen: 'filters/filters/chosen'
		}),
		filterYear() {
			return this.filters.year
		},
		getYearOptions() {
			return {
				type: 'double',
				grid: false,
				step: 1,
				from: Number(this.from),
				to: Number(this.to),
				min: Number(this.filterYear?.[0]),
				max: Number(this.filterYear?.[1]),
				onFinish: (event) => this.sendYear(event),
				onChange: (event) => this.changeYear(event)
			}
		}
	},
	mounted() {
		if (this.$route.query.year_from && this.$route.query.year_to) {
			this.from = Number(this.$route.query.year_from)
			this.to = Number(this.$route.query.year_to)
		} else {
			this.from = this.filterYear?.[0]
			this.to = this.filterYear?.[1]
		}
	},
	methods: {
		...mapMutations({
			setIsFilterClick:'filters/filters/SET_IS_FILTER_CLICK'
		}),
		async sendYear() {
			this.setIsFilterClick(true)
			await this.$router.push({path: this.$route.fullPath, query: {year_from: this.from, year_to: this.to}});
		},
		changeYearFrom(e) {
			this.from = Number(e.target.value.replace(/[^+\d]/g, ''))
			this.sendYear()
		},
		changeYearTo(e) {
			this.to = Number(e.target.value.replace(/[^+\d]/g, ''))
			this.sendYear()
		},
		changeYear(event) {
			this.from = event.from
			this.to = event.to
		}
	}
}
</script>