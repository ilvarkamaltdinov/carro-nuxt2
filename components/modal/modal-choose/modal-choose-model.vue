<template>
	<div class="modal__wrap">
		<div class="modal__choose-group">
			<h3 class="heading heading--h2">Модель</h3>
			<makes-models />
		</div>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters({
			currentModel: 'modal/modal-choose/currentModel'
		})
	}
}
</script>