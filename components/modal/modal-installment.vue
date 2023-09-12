<template>
	<div class="modal__wrap">

    <benefits :has-modal="false" modal v-if="isNew" class="car__benefits" :benefits="benefitsInstallmentNew" />
    <benefits :has-modal="false" modal v-else class="car__benefits" :benefits="benefitsInstallment" />

		<div class="application application--modal grid__col-12 grid grid--application grid--application-modal">
			<div class="application__form grid__col-4">
				<form-installment :has-chose="false"
				             :offer="modalData" />
			</div>
			<div class="application__catalog application__catalog--modal catalog grid__col-4">
				<component :is="component"
				           :is-form="true"
				           :has-buttons="false"
				           :offer="modalData" />
			</div>
			<application-banks default-bank="sovcom" class="grid__col-4" />
		</div>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters({
			modalData: 'modal/modal-main/modalData',
			benefitsInstallment: 'benefits/benefitsInstallment',
      benefitsInstallmentNew: 'benefits/benefitsInstallmentNew'
		}),
    isNew() {
      return this.modalData.run <= 100 && this.modalData.owner.number <= 1;
    },
		component() {
			return this.$device.isMobile ? 'catalog-item-large-mobile' : 'catalog-item-small-desktop'
		}
	},
}
</script>
