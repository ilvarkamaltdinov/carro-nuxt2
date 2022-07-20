<template>
	<transition name="fade">
		<div v-if="benefitModal"
		     class="stories__modal_wrapper-wrap">
			<div @click="closeBenefit"
			     class="overlay"></div>
			<benefits-modal />
		</div>
	</transition>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			benefitModal: 'benefits/benefitModal'
		})
	},
	methods: {
		...mapActions({
			closeBenefit: 'benefits/closeBenefit'
		})
	}
}
</script>