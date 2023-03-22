<template>
  <div class="car__info-group car__info-group--options">
    <div class="heading-group">
      <div class="heading-group__wrap">
        <h2 class="heading heading--h2">
          Описание
        </h2>
        <span class="heading-group__label" v-html="pageTitle"></span>
      </div>
    </div>
    <p class="text__p"
       v-html="offer.description"></p>
  </div>
</template>

<script>
import filters from "@/mixins/filters";
import {mapActions} from "vuex";

export default {
  mixins: [filters],
  props: {
    offer: Object,
    pageTitle: String
  }
}
</script>
