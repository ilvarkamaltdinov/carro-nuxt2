<template>
  <section class="page-main__dealers dealers grid">
    <div class="heading-group heading-group--h1">
      <div class="heading-group__wrap">
        <h1 class="heading heading--h1">{{ pageTitle }}
          <span class="heading__promo"></span>
        </h1>
        <span class="heading-group__label">Партнеры carro.ru</span>
      </div>
    </div>
    <div class="dealers__item grid__col-12"
         v-for="dealer in dealers"
         :key="dealer.id">
      <div class="dealers__features features">
        <div class="heading-group">
          <div class="heading-group__wrap">
            <h2 class="heading heading--h2">{{ dealer.title }}</h2>
            <span class="heading-group__label">{{ dealer.short_description }}</span>
          </div>
          <rating v-tippy="{
							content:`<div class='tippy__text'>Рейтинг дилера</div>`,
							animation:'scale',
							arrow: true,
					}"
                  :rating="dealer.rating"
                  :max="5"/>
        </div>
        <div class="features__group">
          <h3 class="heading heading--h3">Адрес:</h3>
          <ul class="features__list">
            <li class="features__item">{{ dealer.address }}</li>
            <li v-if="dealer.metro"
                class="features__item">м. {{ dealer.metro }}
            </li>
          </ul>
        </div>
        <div class="features__group" v-if="dealer.phone">
          <h3 class="heading heading--h3">Телефон:</h3>
          <ul class="features__list">
            <li class="features__item">
              <a :href="`tel:${ dealer.phone.replace(/[^+\d]/g, '')}`"> {{ dealer.phone }}</a>
            </li>
          </ul>
        </div>
        <div class="features__group">
          <h3 class="heading heading--h3">Режим работы:</h3>
          <ul class="features__list">
            <li class="features__item">{{ dealer.schedule }}</li>
          </ul>
        </div>
        <button-typical v-if="dealer.slug === $route.params.dealer"
                        @click="showMore(dealer.slug)"
                        text="Подробнее о дилере"
                        class="button--show"/>
        <button-typical v-else
                        :link="`/contact/${dealer.slug}`"
                        text="Подробнее о дилере"
                        class="button--show"/>
        <a v-if="dealer.site"
           class="button button--show button--show-link"
           :href="`${dealer.site}`"
           target="_blank">Сайт автоцентра
        </a>
      </div>
      <div class="dealers__item-img-wrap">
        <picture-component
          v-if="dealer.images[0]"
          classes="dealers__item-img lazyload"
          :small="dealer.images[0].small | replaceApiUrl(api)"
          :small-webp="dealer.images[0].small_webp | replaceApiUrl(api)"
          :big="dealer.images[0].medium | replaceApiUrl(api)"
          :big-webp="dealer.images[0].medium_webp | replaceApiUrl(api)"/>
      </div>
    </div>
  </section>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import dealers from "@/apollo/queries/dealer/dealers";
import dealer from "@/apollo/queries/dealer/dealer";
import filters from "~/mixins/filters";

export default {
  mixins: [
    filters
  ],
  props: {
    pageTitle: String
  },
  computed: {
    ...mapGetters({
      siteId: 'site_id',
      api: 'api',
      dealers: 'dealers/dealers'
    })
  },
  methods: {
    ...mapMutations({
      setDealers: 'dealers/SET_DEALERS'
    }),
    ...mapActions({
      request: 'filters/filters/request',
      openModal: 'modal/modal-main/openModal',
    }),
    async showMore(dealerSlug) {
      try {
        let dealerData = await this.request({query: dealer, variables: {slug: dealerSlug}})
        dealerData = dealerData.data.dealer
        let payload = {
          modal_data: dealerData,
          modal_component: 'modal-dealer',
          modal_title: `Автоцентр «${dealerData.title}»`,
          modal_sub_title: `${dealerData.short_description}`
        }
        await this.openModal(payload)
      } catch (error) {
        console.log(error)
        return this.$nuxt.error({statusCode: 404, message: '404'})
      }
    }
  },
  async fetch() {
    if (!this.dealers.length) {
      try {
        let response = await this.request({query: dealers})
        this.setDealers(response.data.dealers)
      } catch (error) {
        console.log(error)
      }
    }
    if (this.$route.params.dealer) {
      await this.showMore(this.$route.params.dealer)
    }
  },
}
</script>
