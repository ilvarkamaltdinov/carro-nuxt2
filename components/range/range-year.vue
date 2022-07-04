<template>
	<div class="form__block form__block--range range">
		<div class="form__range-wrap">
			<label class="form__field-wrap form__field-wrap--range">
				<input class="form__field"
				       placeholder="Дата рождения"
				       type="text"
				       name="date"
				       v-model="from" />
			</label>
			<label class="form__field-wrap form__field-wrap--range">
				<input class="form__field"
				       placeholder="Дата рождения"
				       type="text"
				       name="date"
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
			setChosen: 'filters/filters/SET_CHOSEN'
		}),
		async sendYear() {
			await this.$router.push({path: this.$route.fullPath, query: {year_from: this.from, year_to: this.to}});
		},
		changeYear(event) {
			this.from = event.from
			this.to = event.to
		}
	}
}
</script>