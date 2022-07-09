<template>
	<input :class="rangeClass" />
</template>
<script>
export default {
	props: {
		options: {
			type: Object,
			default: () => {
			}
		},
		rangeClass: {
			type: String,
			default: ''
		}
	},
	// watch:{
	// 	options(){
	// 		const selector = document.querySelector('.' + this.rangeClass);
	// 		console.log(selector)
	// 	}
	// },
	mounted() {
		ionRangeSlider.ionRangeSlider('.' + this.rangeClass, this.options);
		let selector = document.querySelector('.' + this.rangeClass);
		selector.addEventListener('input', (event) => {
			this.$emit('input', event.target.value)
		})
	},
	// destroyed() {
	// 	console.log(111111111111)
	// 	this.$rangeSlider.destroy()
	// }
}
</script>
