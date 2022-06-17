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
		<range-slider
				v-if="filterYear"
				range-class="range-year"
				:options="getYearOptions">
		</range-slider>
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
	watch: {
		filters() {
			this.from = this.filters.year[0]
			this.to = this.filters.year[1]
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
				min: String(this.filterYear?.[0]),
				max: String(this.filterYear?.[1]),
				onFinish: (event) => this.sendYear(event),
				onChange: (event) => this.changeYear(event)
			}
		}
	},
	mounted() {
		this.from = this.filterYear?.[0]
		this.to = this.filterYear?.[1]
	},
	methods: {
		...mapActions({
			getFilters: 'filters/filters/getFilters'
		}),
		...mapMutations({
			setChosen: 'filters/filters/SET_CHOSEN'
		}),
		async sendYear() {
			this.setChosen({key: 'yearFrom', value: this.from})
			this.setChosen({key: 'yearTo', value: this.to})
			await this.getFilters()
		},
		changeYear(event) {
			this.from = event.from
			this.to = event.to
		}
	}
}
</script>