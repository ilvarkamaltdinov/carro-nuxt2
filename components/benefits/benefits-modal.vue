<template>
  <div class="stories stories--modal stories--benefit">
    <div class="stories__modal-wrap">
      <button class="stories__close" @click="closeBenefit">
        <svg-icon class="stories__close-icon" name="icon-close-s" />
      </button>
      <div class="stories__modal">
        <div class="stories__offer">
          <h2 class="heading heading--h2">{{ benefit.text }} {{ benefit.text_strong }}</h2>
          <p class="stories__modal-text">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      benefit: 'benefits/benefit'
    })
  },
  methods: {
    ...mapActions({
      closeBenefit: 'benefits/closeBenefit'
    })
  }
}
</script>
