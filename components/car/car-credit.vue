<template>
  <div class="car__credit-wrap application grid__col-12 grid grid--application">
    <div class="application__form grid__col-4">
      <form-installment :has-chose="false"
                        :offer="offer"/>
    </div>
    <div class="application__catalog catalog grid__col-8" v-if="!$device.isMobile">
      <catalog-item-large-desktop :has-buttons="false"
                                  :is-form="true"
                                  :disabled-click="true"
                                  :offer="offer"/>
    </div>
    <application-banks class="grid__col-5"/>
    <application-terms installment class="grid__col-3"/>

  </div>
</template>
<script>
export default {
  props: {
    offer: Object
  }
}
</script>
