<template>
  <div class="default__wrapper"
       @keyup.esc="closeModals"
       tabindex="0">
    <LazyHydrate when-visible>
      <Header/>
    </LazyHydrate>
    <client-only>
      <modal-wrap/>
      <modal-stories/>
      <modal-benefits/>
    </client-only>
    <transition :name="hasRouteTransition ? 'page' : ''">
      <Nuxt/>
    </transition>
    <LazyHydrate when-visible>
      <Footer/>
    </LazyHydrate>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
// import capitalizeFirstLetter from "~/mixins/capitalizeFirstLetter";
import offerFilters from "@/apollo/queries/offer/offerFilters";
import offers from "@/apollo/queries/offer/offers";
import offerUrl from "@/apollo/queries/offer/offerUrl";
import isEmpty from "lodash/isEmpty";
import utm from "@/mixins/utm";
import metrika from "@/mixins/metrika";

import LazyHydrate from 'vue-lazy-hydration';

export default {
  components: {
    LazyHydrate,
    Header: () => import(/* webpackChunkName: "header" */ '~/components/Header'),
    // Crumbs: () => import(/* webpackChunkName: "crumbs" */ '~/components/Crumbs'),

    // Footer: () => import(/* webpackChunkName: "footer" */ '~/components/Footer'),
    // ModalMain: () => import(/* webpackChunkName: "modal-main" */ '~/components/Modal/Main'),
    // CookieModal: () => import(/* webpackChunkName: "cookie-modal" */ '~/components/Cookie/Modal'),
    // CallbackModal: () => import(/* webpackChunkName: "callback-modal" */ '~/components/Callback/Modal'),
  },
  mixins: [utm, metrika],
  watch: {
    '$route'() {
      if (this.urlValidate) {
        this.checkUrl()
      }
    }
  },
  async fetch() {
    if (this.urlValidate) {
      await this.checkUrl()
    }
  },
  computed: {
    ...mapGetters({
      isFilterClick: 'filters/filters/isFilterClick',
      isOfferClick: 'filters/filters/isOfferClick',
      sort: 'filters/filters/sort'
    }),
    hasRouteTransition() {
      return this.$route.name !== 'category-mark-model-car'
    },
    urlValidate() {
      return this.$route.params.category === 'used'
        || this.$route.params.category === 'commercial'
        || this.$route.params.category === 'europe'
        || this.$route.name === 'Best-moscow-autosalon'
        || this.$route.name === 'best-moscow-autosalon'
        || this.$route.name === 'best-autosalon'
        || this.$route.name === 'Best-autosalon'
    }
  },
  methods: {
    ...mapMutations({
      setComponentCatalog: 'filters/filters/SET_COMPONENT_CATALOG',
      setIsFilterClick: 'filters/filters/SET_IS_FILTER_CLICK',
      setIsOfferClick: 'filters/filters/SET_IS_OFFER_CLICK',
      setLoadingRange: 'filters/filters/SET_LOADING_RANGE',
      setModalMenu: 'modal/modal-menu/setModalMenu',
      setModalMarks: 'modal/modal-marks/setModalMarks',
    }),
    ...mapActions({
      request: 'filters/filters/request',
      closeStories: 'stories/stories/closeStories',
      closeModal: 'modal/modal-main/closeModal',
    }),
    closeModals() {
      this.closeStories()
      this.closeModal()
      this.setModalMenu(false)
      this.setModalMarks(false)
    },
    async offersRequest(assignVariables) {
      try {
        let response = await this.request({query: offers, variables: assignVariables})
        await this.changingOffers(response.data.offers)
      } catch (error) {
        console.log(error)
        // return this.$nuxt.error({statusCode: 404, message: '404'})
      }
    },
    async filterRequest(assignVariables) {
      try {
        let response = await this.request({query: offerFilters, variables: assignVariables})
        await this.changingFilters(response.data.offerFilters)
      } catch (error) {
        console.log(error)
        return this.$nuxt.error({statusCode: 404, message: '404'})
      }
    },
    async changingFilters(payload) {
      await this.$store.commit('filters/filters/SET_FILTERS', payload)
      await this.$store.commit('filters/filters/SET_ALL_CHOSEN', payload.chosen)
    },
    async changingOffers(payload) {
      await this.$store.commit('filters/filters/SET_OFFERS', payload)
      await this.$store.commit('filters/filters/SET_FILTERED_TOTAL', payload.total)
      await this.$store.commit('filters/filters/SET_LOADING', false)
    },
    async checkUrl() {
      if (!this.isFilterClick) {
        await this.setLoadingRange(true)
      }
      // Если клик по объявлению, сразу показываем компонент объявления
      if (this.isOfferClick) {
        this.setComponentCatalog('car')
        this.setIsOfferClick(false)
        return
      }
      await this.$store.commit('filters/filters/SET_LOADING', true)
      // всегда компонент каталога
      await this.setComponentCatalog('catalog-used')
      //Запрос на определение, что это, когда 4 элемента в урл и нет клика по фильтру
      if (this.$route.params.car && !this.isFilterClick) {
        try {
          let response = await this.request({query: offerUrl, variables: {url: this.$route.path}})
          let typeName = response.data.offerUrl.__typename
          let assignVariables = response.data.offerUrl
          let queries = {
            engine_type_id_array: this.$numberToArray(this.$route.query.engine_type_id_array),
            gearbox_id_array: this.$numberToArray(this.$route.query.gearbox_id_array),
            drive_type_id_array: this.$numberToArray(this.$route.query.drive_type_id_array),
            body_type_id_array: this.$numberToArray(this.$route.query.body_type_id_array),
            price_from: Number(this.$route.query.price_from),
            dateFormat: 'j F Y года.',
            price_to: Number(this.$route.query.price_to),
            year_from: Number(this.$route.query.year_from),
            year_to: Number(this.$route.query.year_to),
            sort: this.$route.query.sort || this.sort,
            limit: 16,
            page: Number(this.$route.query.page) || 1,
          }

          delete assignVariables.__typename;
          if (typeName === 'OfferUrlFilterPaginationType') {
            // Если это результат для фильтра, отправляем запрос
            let variables = {...assignVariables, ...queries}
            await this.offersRequest(variables)
            await this.filterRequest(variables)
          } else if (typeName === 'OfferUrlType') {
            // Если это авто, просто показываем компонент, запрос отправится в компоненте
            this.setComponentCatalog('car')
          }
        } catch (error) {
          console.log(error)
          this.$nuxt.error({statusCode: 404})
        }
      } else {
        let variables = { // TODO очищаю от пустых значений
          url: this.$route.path === '/best-moscow-autosalon' || this.$route.path === '/best-autosalon' ? '/used' : this.$route.path,
          page: Number(this.$route.query.page) || 1,
          dateFormat: 'j F Y года.',
          mark_slug_array: this.$stringToArray(this.$route.query.mark_slug_array),
          folder_slug_array: this.$stringToArray(this.$route.query.folder_slug_array),
          generation_slug_array: this.$stringToArray(this.$route.query.generation_slug_array),
          engine_type_id_array: this.$numberToArray(this.$route.query.engine_type_id_array),
          gearbox_id_array: this.$numberToArray(this.$route.query.gearbox_id_array),
          drive_type_id_array: this.$numberToArray(this.$route.query.drive_type_id_array),
          body_type_id_array: this.$numberToArray(this.$route.query.body_type_id_array),
          price_from: Number(this.$route.query.price_from),
          price_to: Number(this.$route.query.price_to),
          year_from: Number(this.$route.query.year_from),
          year_to: Number(this.$route.query.year_to),
          sort: this.$route.query.sort || this.sort,
          limit: 8
        }
        await this.offersRequest(variables)
        await this.filterRequest(variables)
        this.setIsFilterClick(false)
      }
      if (!this.isFilterClick) {
        await this.setLoadingRange(false)
      }
    },
  }
}
</script>
