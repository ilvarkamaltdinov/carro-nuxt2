<template>
	<input :class="rangeClass" />
</template>
<script>
export default {
	props: {
		options: {
			type: Object,
			default: () => {}
		},
		rangeClass: {
			type: String,
			default: ''
		}
	},
	mounted() {
		this.$rangeSlider = ionRangeSlider.ionRangeSlider('.' + this.rangeClass, this.options);
		let selector = document.querySelector('.' + this.rangeClass);
		selector.addEventListener('input', (event) => this.$emit('input', event.target.value))
	},
	// destroyed() {
	// 	this.$rangeSlider.destroy()
	// }
}
</script>
