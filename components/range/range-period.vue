<template>
	<div class="form__block form__block--range range">
		<label class="form__range-wrap">
			<span class="form__range-name">{{ text }}</span>
			<span class="form__range-value">{{ period }}</span>
		</label>
		<client-only>
			<range-slider
					range-class="range-period"
					:options="options"
					@input="changePeriod">
			</range-slider>
		</client-only>
	</div>
</template>
<script>
export default {
	data() {
		return {
			options: {
				grid: true,
				values: this.values.map(val => {
					return val
				}),
				from: this.values.indexOf(this.value),
			}
		}
	},
	props: {
		text: String,
		values: Array,
		value: String,
		period: String,
	},
	methods: {
		changePeriod(value) {
			this.$emit('changePeriod', value)
		},
	}
}
</script>