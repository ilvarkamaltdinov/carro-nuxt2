<template>
  <div class="modal__wrap">

    <benefits :has-modal="false" modal v-if="$route.params.category === 'europe'" class="car__benefits"
      :benefits="benefitsEurope" />
    <benefits :has-modal="false" modal v-else-if="isNew" class="car__benefits" :benefits="benefitsNew" />
    <benefits :has-modal="false" modal v-else class="car__benefits" :benefits="benefitsCar" />

    <div class="application application--modal grid__col-12 grid grid--application grid--application-modal">
      <div class="application__form grid__col-4">
        <form-credit calculator :has-chose="false" :offer="modalData" />
      </div>
      <div class="application__catalog application__catalog--modal catalog grid__col-4">
        <component v-if="!$device.isMobile"
          :is="$device.isMobileOrTablet ? 'catalog-item-large-mobile':'catalog-item-small-desktop'" :is-form="true"
          :has-buttons="false" :offer="modalData" />
      </div>
      <car-terms v-if="$device.isMobile" />
      <application-banks class="grid__col-4" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      modalData: 'modal/modal-main/modalData',
      benefitsCredit: 'benefits/benefitsCredit',
      benefitsNew: 'benefits/benefitsNew',
      benefitsCar: 'benefits/benefitsCar',
      benefitsEurope: 'benefits/benefitsEurope',
    }),
    isNew() {
      return this.modalData.run <= 100 && this.modalData.owner.number <= 1;
    }
  },
}
</script>
