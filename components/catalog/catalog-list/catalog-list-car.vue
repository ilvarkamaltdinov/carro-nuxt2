<template>
  <section class="catalog__list"
           v-if="offers && offers.data.length">
    <div class="grid grid--container">
      <heading-h2 class="grid__col-12">Похожие автомобили</heading-h2>
    </div>
    <div class="catalog__list grid grid__col-12">
      <component :is="component"
                 v-for="offer in offers.data"
                 :offer="offer"
                 :key="offer.id"/>
    </div>
    <div class="grid grid--container">
      <button-typical @click="moreOffers"
                      v-if="offers && offers.last_page > 1 && offers.current_page < offers.last_page"
                      text="Показать больше"
                      class="button--link button--more grid__col-12"/>
    </div>

  </section>
</template>
<script>
import {mapActions} from "vuex";
import offers from "@/apollo/queries/offer/offers";

export default {
  data() {
    return {
      offers: null
    }
  },
  props: {
    offer: Object
  },
  computed: {
    component() {
      if (this.$device.isTablet) {
        return 'catalog-item-large-mobile'
      } else {
        return this.$device.isMobile ? 'catalog-item-large-mobile' : 'catalog-item-small-desktop'
      }

    },
  },
  methods: {
    ...mapActions({
      request: 'request'
    }),
    async moreOffers() {
      try {
        await this.offersRequest({
          page: Number(this.offers.current_page + 1),
          limit: 6,
          except_external_id: Number(this.offer.external_id),
          mark_slug_array: [this.offer.mark.slug],
          folder_slug_array: [this.offer.folder.slug],
          generation_slug_array: [this.offer.generation.slug],
          engine_type_id_array: [Number(this.offer.engineType.id)],
          gearbox_id_array: [Number(this.offer.gearbox.id)]
        })
      } catch (error) {
        console.log(error)
      }
    },
    async offersRequest(assignVariables) {
      try {
        let response = await this.request({query: offers, variables: assignVariables})
        if (this.offers) {
          this.offers.data = [...this.offers.data, ...response.data.offers.data]
          this.offers.current_page = response.data.offers.current_page
        } else {
          this.offers = response.data.offers
        }

      } catch (error) {
        console.log(error)
        return this.$nuxt.error({statusCode: 404, message: '404'})
      }
    },
  },
  async mounted() {
    try {
      await this.offersRequest({
        page: 0,
        limit: 6,
        except_external_id: Number(this.offer.external_id),
        mark_slug_array: [this.offer.mark.slug],
        folder_slug_array: [this.offer.folder.slug],
        generation_slug_array: [this.offer.generation.slug],
        engine_type_id_array: [Number(this.offer.engineType.id)],
        gearbox_id_array: [Number(this.offer.gearbox.id)]
      })
    } catch (error) {
      console.log(error)
    }

  }
}
</script>
