<template>
	<div class="modal__wrap">
		<div class="modal__choose-group">
			<h3 class="heading heading--h2">Поколение</h3>
			<makes-generations/>
		</div>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters({
		
		})
	}
}
</script>