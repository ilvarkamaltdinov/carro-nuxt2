<template>
	<h2 class="heading heading--h1"
	    :class="{'heading--h1-index':isHeadingIndex}">
		<slot>
		
		</slot>
	</h2>
</template>
<script>
export default {
	props: {
		isHeadingIndex: {
			type: Boolean,
			default: false
		}
	}
}
</script>