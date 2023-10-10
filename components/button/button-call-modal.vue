<template>
  <a class="button button--action button--text button--link"
     v-if="!isNight"
     :href="`tel:${phone.replace(/[^+\d]/g, '')}`">
    <svg-icon class="button__icon"
              name="icon-call"/>
    <span class="button__text">{{ phone }}</span>
  </a>
  <button v-else
          class="button button--action button--text button--link"
          @click.prevent="$emit('click')">
    <svg-icon class="button__icon"
              name="icon-call"/>
    {{ phone }}
  </button>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  props: {
    phone: String
  },
  computed: {
    ...mapGetters({
      isNight: 'isNight'
    })
  }
}
</script>
