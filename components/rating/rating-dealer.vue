<template>
	<div class="rating"
	     :style="`--rating-number:${rating*20}; --rating-color:${ratingColor};`"> {{ rating }}
	</div>
</template>
<!--//- green: #0DC268;-->
<!--//- orange: #ED7B29;-->
<!--//- red: #ED2939;-->
<script>
export default {
	props: {
		rating: Number
	},
	computed: {
		ratingColor() {
			if (this.rating >= 4) {
				return '#0DC268'
			}
			// if (this.rating >= 50 && this.rating < 70) {
			// 	return '#ED7B29'
			// }
			// if (this.rating < 50) {
			// 	return '#ED2939'
			// }
		}
	}
}
</script>