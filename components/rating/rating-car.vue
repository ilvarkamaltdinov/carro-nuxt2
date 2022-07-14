<template>
	<div class="rating"
	     @click="$emit('click')"
	     :style="`--rating-number:${ratingValue}; --rating-color:${ratingColor};`">
		{{ ratingText }}
	</div>
</template>
<script>
export default {
	props: {
		rating: Object
	},
	computed: {
		ratingText() {
			return parseFloat(this.rating.rating_total).toFixed(1)
		},
		ratingValue() {
			return this.rating.rating_total * 20
		},
		ratingColor() {
			if (this.rating.rating_total >= 4) {
				return '#0DC268'
			}
			if (this.rating.rating_total >= 3 && this.rating.rating_total < 4) {
				return '#ED7B29'
			}
			if (this.rating.rating_total < 3) {
				return '#ED2939'
			}
		}
	}
}
</script>