<template>
  <div class="catalog__title-wrap">
    <h3 class="catalog__heading">
      <a :href="isForm ? '' : url" @click.prevent="$emit('click')" class="catalog__title-link">
        <span class="catalog__title">{{ offer.mark.title }} {{ offer.folder.title }}</span>
        <span> {{ offer.engine_volume | engineVolume }}</span>
        <span>  {{ offer.gearbox.title_short }}</span>
        <span class="catalog__title-line">
          <span class="catalog__year">{{ offer.engine_power }} л.с.</span>
           <span class="catalog__year">{{ offer.year }}</span>
           <span class="catalog__run">{{ offer.run | run }} км</span>
        </span>

      </a>
    </h3>
    <button-favorite :active="likesArray.some(id => id === String(offer.external_id))" @click="like()"/>
  </div>
</template>
<script>
import filters from "~/mixins/filters";
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  mixins: [filters],
  methods: {
    ...mapActions({
      liked: 'favorite/favorite/liked'
    }),
    async like() {
      await this.liked(this.offer.external_id)
    }
  },
  computed: {
    ...mapGetters({
      likesArray: 'favorite/favorite/likesArray',
    }),
    currentCategory() {
      return this.offer.category_enum;
    },
    currentMark() {
      return this.offer.mark.slug;
    },
    currentFolder() {
      return this.offer.folder.slug;
    },
    currentId() {
      return this.offer.external_id;
    },
  },
  props: {
    isForm: {
      type: Boolean,
      default: false,
    },
    url: String,
    small: {
      type: Boolean,
      default: false,
    },
    offer: {
      type: Object,
      default: () => {
      },
    },
  },
};
</script>
