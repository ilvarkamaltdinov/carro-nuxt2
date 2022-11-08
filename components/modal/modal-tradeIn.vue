<template>
	<div class="modal__wrap">
		<benefits :has-modal="false" modal :benefits="benefitsTradeIn"/>
		<div class="application application--modal grid__col-12 grid grid--application grid--application-modal">
			<div class="application__form grid__col-4">
				<form-trade-in :is-modal="true" :has-chose="false" :offer="modalData"/>
			</div>
			<div class="application__catalog application__catalog--modal catalog grid__col-4">
				<component v-if="!$device.isMobile" :is="component" :is-form="true" :offer="modalData"/>
			</div>
			<application-banks class="grid__col-4"/>
		</div>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters({
			modalData: 'modal/modal-main/modalData',
			benefitsTradeIn: 'benefits/benefitsTradeIn'
		}),
		component(){
			return  this.$device.isMobile ? 'catalog-item-large-mobile' : 'catalog-item-small-desktop'
		}
	},
}
</script>
