<template>
	<div class="rating"
	     @click="$emit('click')"
	     :style="`--rating-number:${ratingValue}; --rating-color:${ratingColor};`">
		{{ ratingText }}{{ percent ? '%' : '' }}
	</div>
</template>
<script>
export default {
	props: {
		rating: Number,
		max: Number,
		percent: Boolean,
		bank: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		ratingText() {
			if (this.max === 100) {
				return this.bank ? parseFloat(this.rating).toFixed(1) : this.rating
			} else {
				return parseFloat(this.rating).toFixed(1)
			}
		},
		ratingValue() {
			if (this.max === 100) {
				return this.rating
			} else {
				return this.rating * 20
			}
		},
		ratingColor() {
			if (this.max === 100) {
				if (this.rating >= 70) {
					return '#0DC268'
				}
				if (this.rating >= 50 && this.rating < 70) {
					return '#ED7B29'
				}
				if (this.rating < 50) {
					return '#ED2939'
				}
			} else {
				if (this.rating >= 4) {
					return '#0DC268'
				}
				if (this.rating >= 3 && this.rating < 4) {
					return '#ED7B29'
				}
				if (this.rating < 3) {
					return '#ED2939'
				}
			}
		}
	}
}
</script>