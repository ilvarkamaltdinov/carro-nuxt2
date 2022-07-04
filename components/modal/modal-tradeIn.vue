<template>
	<div class="modal__wrap">
		<div class="application application--modal grid__col-12 grid grid--application grid--application-modal">
			<div class="application__form grid__col-4">
				<form-trade-in :is-modal="true" :has-chose="false" :offer="modalData"/>
			</div>
			<div class="application__catalog application__catalog--modal catalog grid__col-4">
				<component :is="component" :has-buttons="false" :offer="modalData"/>
			</div>
			<application-banks class="grid__col-4"/>
		</div>
		<benefits-modal />
	</div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters({
			modalData: 'modal/modal-main/modalData'
		}),
		component(){
			return  this.$device.isMobile ? 'catalog-item-large-mobile' : 'catalog-item-small-desktop'
		}
	},
}
</script>