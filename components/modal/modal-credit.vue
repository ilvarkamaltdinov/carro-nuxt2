<template>
	<div class="modal__wrap">
		<div class="application application--modal grid__col-12 grid grid--application grid--application-modal">
			<div class="application__form grid__col-4">
				<form-credit :has-chose="false"
				             :offer="modalData" />
			</div>
			<div class="application__catalog application__catalog--modal catalog grid__col-4">
				<component v-if="!$device.isMobile" :is="$device.isMobileOrTablet ? 'catalog-item-large-mobile':'catalog-item-small-desktop'"
				           :is-form="true"
				           :has-buttons="false"
				           :offer="modalData" />
			</div>
			<application-banks class="grid__col-4" />
		</div>
		<benefits :has-modal="false" modal :benefits="benefitsCredit"/>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters({
			modalData: 'modal/modal-main/modalData',
			benefitsCredit: 'benefits/benefitsCredit'
		})
	},
}
</script>