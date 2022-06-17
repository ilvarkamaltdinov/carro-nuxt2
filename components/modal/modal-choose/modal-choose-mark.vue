<template>
	<div class="modal__wrap" v-if="isMobile">
		<makes for-chose-modal/>
	</div>
	<div class="modal__wrap" v-else>
		<makes-letters />
		<makes-modal-desktop/>
	</div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			isMobile: 'isMobile'
		})
	}
}
</script>