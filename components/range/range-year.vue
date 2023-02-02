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
					:options="getYearOptions"
          ref="range-year">
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
	watch: {
		chosen() {
			this.setFromTo();
			this.$refs["range-year"].slider.update({
				from: Number(this.from),
				to: Number(this.to),
				min: this.min,
				max: this.max
			});
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
		min() {
			return Number(this.filterYear?.[0]);
		},
		max() {
			return Number(this.filterYear?.[1]);
		},
		getYearOptions() {
			return {
				type: "double",
				grid: false,
				step: 1,
				from: Number(this.from),
				to: Number(this.to),
				min: this.min,
				max: this.max,
				onFinish: (event) => this.sendYear(event),
				onChange: (event) => this.changeYear(event)
			};
		}
	},
	mounted() {
		this.setFromTo();
	},
	methods: {
		...mapMutations({
			setIsFilterClick: 'filters/filters/SET_IS_FILTER_CLICK'
		}),
		setFromTo() {
			if (this.$route.query.year_from && this.$route.query.year_to) {
				this.from = Number(this.$route.query.year_from);
				this.to = Number(this.$route.query.year_to);
			} else if (this.chosen.yearFrom || this.chosen.yearTo) {
				this.from = this.chosen.yearFrom || this.filterYear?.[0];
				this.to = this.chosen.yearTo || this.filterYear?.[1];
			} else {
				this.from = this.filterYear?.[0];
				this.to = this.filterYear?.[1];
			}
		},
		async sendYear() {
			this.setIsFilterClick(true)
			await this.$router.push({path: this.$route.fullPath, query: {year_from: this.from, year_to: this.to}});
		},
		changeYearFrom(e) {
			this.from = Number(e.target.value.replace(/[^+\d]/g, ''))
      this.$refs["range-year"].slider.update({
          from: this.from
      })
			this.sendYear()
		},
		changeYearTo(e) {
			this.to = Number(e.target.value.replace(/[^+\d]/g, ''))
      this.$refs["range-year"].slider.update({
        to: this.to
      })
			this.sendYear()
		},
		changeYear(event) {
			this.from = event.from
			this.to = event.to
		}
	}
}
</script>
