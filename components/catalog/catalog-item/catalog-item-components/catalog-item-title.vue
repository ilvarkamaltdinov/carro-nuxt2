<template>
  <div class="catalog__title-wrap">
    <div class="catalog__title">
      <h3 class="catalog__heading">
        <nuxt-link event="" @click.native="linkClick()"
                   :to="`/used/${offer.mark.slug}/${offer.folder.slug}/${offer.external_id}`"
                   class="catalog__title-link">
     <span class="catalog__title">
      {{ offer.mark.title }} {{ offer.folder.title }}
     </span>
          <span class="catalog__year">
      {{offer.year}}
     </span>
        </nuxt-link>
      </h3>
    </div>
  </div>
</template>
<script>
import filters from "~/mixins/filters";
import {mapMutations} from "vuex";

export default {
  mixins: [filters],
  methods: {
    ...mapMutations({
      setLastUsedPage: 'filters/filters/SET_LAST_USED_PAGE'
    }),
    async linkClick(){
      await this.setLastUsedPage('car')
      await this.$router.push(`/used/${this.offer.mark.slug}/${this.offer.folder.slug}/${this.offer.external_id}`)
    }
  },
  props: {
    offer: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>
