<template>
	<div class="rating"
	     :style="'--rating-number:'+ratingRange+'; --rating-color:#0DC268;'">4.8
	</div>
</template>
<script>
export default {
	data() {
		return {
			ratingRange: 90
		}
	},
	// computed: {
	// 	rating() {
	// 		return this.ratingRange
	// 	}
	// },
	// mounted() {
	// 	const interval = setInterval(()=>{
	// 		if(this.ratingRange < 80){
	// 			this.ratingRange += 4
	// 		} else{
	// 			clearInterval(interval)
	// 		}
	// 	},24)
	// }
}
</script>
<!--//- green: #0DC268;-->
<!--//- orange: #ED7B29;-->
<!--//- red: #ED2939;-->