<template>
	<div class="form__block form__block--range range">
		<div class="form__range-wrap">
			<label class="form__field-wrap form__field-wrap--range">
				<input class="form__field"
				       placeholder="Цена от"
				       v-model="minValue"
				       type="tel"/>
			</label>
			<label class="form__field-wrap form__field-wrap--range">
				<input class="form__field"
				       placeholder="Цена до"
				       v-model="maxValue"
				       type="tel" />
			</label>
		</div>
		<range-slider
				range-class="range-period"
				:options="getPriceOptions()"
				@input="changePrice">
		</range-slider>
	</div>
</template>
<script>
export default {
	data(){
		return{
			min:'235000',
			max:'2500000',
			
			minValue:'',
			maxValue:'',
		}
	},
	methods: {
		changePrice(value){
			console.log(111111, value)
			// this.$emit('changePeriod', value)
		},
		getPriceOptions() {
			// const startFromPeriod = this.creditRange.indexOf(this.value);
			return {
				type:'double',
				grid: false,
				min: this.min,
				max: this.max,
				from: "0",
				to: "1250000",
			};
		}
	}
}
</script>