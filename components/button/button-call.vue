<template>
  <a :href="`tel:${currentPhone.replace(/[^+\d]/g, '')}`"
     v-if="onlyNumber && !isNight || $device.isMobile && !isNight"
     class="button button--call"
     :class="{'button--action':!onlyNumber, 'button--link':onlyNumber}"
     title="Бесплатный звонок"
     aria-label="Бесплатный звонок">
    <svg-icon class="button__icon"
              v-if="!onlyNumber"
              name="icon-call"/>
    <span v-else>{{ currentPhone }}</span>
  </a>
  <button v-else
          class="button button--call"
          :class="{'button--action':!onlyNumber, 'button--link':onlyNumber}"
          @click.prevent="$emit('click')">
    <svg-icon class="button__icon"
              v-if="!onlyNumber"
              name="icon-call"/>
    <span v-else>{{ currentPhone }}</span>
  </button>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  props: {
    onlyNumber: {
      type: Boolean,
      default: false
    },
    phone: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      settings: 'settings/settings/settings',
      isNight: 'isNight'
    }),
    currentPhone() {
      return this.phone === '' ? this.settings.phone : this.phone
    }
  }
}
</script>
