<template>
  <div v-if="dealer.phone">
    <a class="catalog__call-card"
       v-if="!isNight"
       :href="`tel:${dealer.phone.replace(/[^+\d]/g, '')}`">
      <div class="catalog__call">
        <svg-icon name="icon-call"
                  class="catalog__call-icon"/>
        <span class="catalog__call-title">Бесплатный звонок</span>
        <span class="catalog__call-dealer">Автоцентр {{ dealer.title }}</span>
      </div>
      <div class="catalog__call-img">
        <img class="lazyload"
             :data-src="image"/>
      </div>
    </a>
    <div class="catalog__call-card"
         v-else
         @click.prevent="$emit('click')">
      <div class="catalog__call">
        <svg-icon name="icon-call"
                  class="catalog__call-icon"/>
        <span class="catalog__call-title">Бесплатный звонок</span>
        <span class="catalog__call-dealer">Автоцентр {{ dealer.title }}</span>
      </div>
      <div class="catalog__call-img">
        <img class="lazyload"
             :data-src="image"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props: {
    isForm: {
      type: Boolean,
      default: false
    },
    dealer: Object,
    image: String
  },
  computed: {
    ...mapGetters({
      isNight: 'isNight'
    })
  }
}
</script>
