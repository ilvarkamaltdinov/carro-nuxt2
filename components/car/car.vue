<template>
  <div v-if="offer">
    <section class="page-main__car car" v-show="carPageLoaded">
      <div class="grid grid--container" v-if="$device.isMobile">
        <benefits v-if="$route.params.category === 'europe'" class="car__benefits"
          :benefits="benefitsEurope" />
        <benefits v-else-if="isNew" class="car__benefits" :benefits="benefitsNew" />
        <benefits v-else class="car__benefits" :benefits="benefitsCar" />
      </div>
      <div class="grid grid--container">
        <div class="heading-group heading-group--h1 grid__col-6">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1 heading--h1-car" v-html="pageTitle"></h1>
            <span class="heading-group__label heading-group__label--car" v-if="offer.generation">
              <span class="heading-group__year">
                {{ offer.year }}
              </span>
              <span class="heading-group__generation">
                {{ offer.generation.name }}
              </span>
              <span v-if="offer.vin" class="vin__wrapper-car">
                <span class="car__vin vin" v-tippy="{
                  content: `<div class='tippy__text'>VIN-номер проверен на предмет нахождения в розыске, угоне, залоге, использования в такси, попадания в ДТП, соответствия количества владельцев.</div>`,
                  animation: 'scale',
                  arrow: true,
                }">
                  <svg-icon name="icon-check" />
                  VIN
                </span>
                <span> {{ offer.vin }}</span>
              </span>
            </span>
          </div>
        </div>
        <div class="car__top-buttons grid__col-6" v-if="offer.is_active">
          <button-typical @click="callback" text="Обратный звонок" class="button--icon button--link"
            icon="icon-callback" />
          <button-call-modal @click="callback" v-if="offer.dealer.phone" :phone="offer.dealer.phone" />
        </div>
      </div>
      <div class="car__slider-wrap">
        <div class="grid grid--container">
          <car-slider />
        </div>
      </div>
      <div class="grid grid--car grid--container grid__col-12">
        <car-buy />
        <transition name="slide-fade">
          <car-fixed v-if="showFixed && focusShowFixed" />
        </transition>
        <car-info :page-title="pageTitle" />

        <car-complectation v-if="$device.isMobile" :offer="offer" class="swiper-slide car__info-group--complectation" />

        <car-description v-if="offer.description && $device.isMobile" :offer="offer" :page-title="pageTitle"
          class="swiper-slide car__info-group--description" />
      </div>
      <div class="grid grid--container">
        <benefits v-if="$route.params.category === 'europe'" class="car__benefits car__benefits--desktop"
          :benefits="benefitsEurope" />
        <benefits v-else-if="isNew" class="car__benefits car__benefits--desktop" :benefits="benefitsNew" />
        <benefits v-else class="car__benefits car__benefits--desktop" :benefits="benefitsCar" />
        <car-credit v-if="offer && offer.is_active" :offer="offer" />
      </div>
    </section>
    <catalog-list-visited :offer="offer" v-if="visitedIsLoading" />
    <catalog-list-car :offer="offer" v-show="carPageLoaded" />
    <skeleton-car v-show="!carPageLoaded" />
  </div>
  <skeleton-car v-else />
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import offer from "@/apollo/queries/offer/offer";
import jsonld from "@/mixins/jsonld";

export default {
  mixins: [jsonld],
  props: {
    pageTitle: String,
    description: String,
    crumbs: Array,
  },
  data() {
    return {
      visitedIsLoading: false,
      offer_external_id: null,
      jsonType: "car",
      showFixed: false,
    };
  },
  mounted() {
    setTimeout(function () {
      window.scrollTo(0, -100);
    }, 1);
    this.setBackButton(this.currentBackButton);

    if (this.offer_external_id) {
      //добавляю тачку в посещаемые если загрузилась на сервере
      this.setVisited(this.offer_external_id)
      this.visitedIsLoading = true
    }
  },
  async fetch() {
    try {
      if (Number(this.$route.params.car)) {
        let variables = {
          site_id: this.site_id,
          mark_slug: this.$route.params.mark,
          folder_slug: this.$route.params.model,
          dateFormat: "j F Y года.",
          external_id: Number(this.$route.params.car),
        };
        let response = await this.request({ query: offer, variables: variables });
        if (this.$route.params.category && !this.validateCategoryOffer(response.data.offer.category_enum)) {
          console.log(123, 'error in car.vue')
          return this.$nuxt.error({ statusCode: 404 });
        }
        await this.setOffer(response.data.offer);
        await this.setDealerPhone(response.data.offer.dealer.phone);
        // записываю посещенную тачку в локальное хранилище
        if (process.client) {
          this.setVisited(this.offer.external_id)
          this.visitedIsLoading = true
        } else {
          // если на сервере, то чуть другая логика завязанная на хуке mounted
          this.offer_external_id = this.offer.external_id
        }
        if (this.offer.external_id) {
          await this.sendYandexCommercial();
          await this.sendVkAds();
        }

      }
    } catch (error) {
      console.log(error)
    }
  },
  computed: {
    ...mapGetters({
      domain: "domain",
      site_id: "site_id",
      offer: "catalog/catalog-cars/offer",
      carPageLoaded: "catalog/catalog-cars/carPageLoaded",
      benefitsCar: "benefits/benefitsCar",
      benefitsNew: "benefits/benefitsNew",
      benefitsEurope: "benefits/benefitsEurope",
      marks: "marks/marks/allMarks",
      folders: "folders/folders/folders",
      focusShowFixed: "car/car/focusShowFixed",
      settings: 'settings/settings/settings'
    }),
    currentBackButton() {
      let long =
        this.crumbs[2].title === "Mercedes-Benz" ||
        this.crumbs[2].title === "Land Rover";
      return {
        title:
          "Все " +
          (!long ? this.crumbs[2].title + " " : "") +
          this.crumbs[3].title,
        link: this.crumbs[3].link,
      };
    },
    currentMark() {
      return this.marks.filter(
        (item) => this.$route.params.mark === item.slug
      )[0];
    },
    currentFolder() {
      return this.folders.filter(
        (item) => this.$route.params.model === item.slug
      )[0];
    },
    isNew() {
      return this.offer.run <= 100 && this.offer.owner.number <= 1;
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.setDealerPhone(null);
    window.removeEventListener("scroll", this.handleScroll);
    this.setBackButton({});
  },
  destroyed() {
    this.setComponentCatalog("");
    this.setOffer(null);
  },
  methods: {
    ...mapMutations({
      setOffer: "catalog/catalog-cars/SET_OFFER",
      setFilterClick: "filters/filters/SET_IS_FILTER_CLICK",
      setIsOfferClick: "filters/filters/SET_IS_OFFER_CLICK",
      setComponentCatalog: "filters/filters/SET_COMPONENT_CATALOG",
      setBackButton: "header/header/SET_BACK_BUTTON",
      setDealerPhone: "header/header/SET_DEALER_PHONE",
      setVisited: "visited/visited/SET_VISITED",
    }),
    ...mapActions({
      request: "filters/filters/request",
      openModal: "modal/modal-main/openModal",
    }),
    validateCategoryOffer(category) {
      if (this.$route.params.category) {
        return this.$route.params.category === category;
      }
    },
    sendVkAds() {
      if (process.client) {
        let _tmr = window._tmr || (window._tmr = []);
        _tmr.push({
          type: 'reachGoal',
          id: this.settings.vk_ads,
          value: this.offer.price,
          goal: 'viewProduct',
          params: {
            product_id: this.offer.external_id
          }
        });
      }
    },
    sendYandexCommercial() {
      if (process.client) {
        dataLayer.push({
          ecommerce: {
            detail: {
              products: [
                {
                  id: this.offer.external_id,
                  name: `${this.offer.mark.title} ${this.offer.folder.title}, ${this.offer.year} года, ${this.offer.gearbox.title} ${this.offer.price} руб. - ${this.offer.external_id}`,
                  price: this.offer.price,
                  brand: this.offer.mark.title,
                  category: `'С пробегом/${this.offer.mark.title}/${this.offer.folder.title}/${this.offer.name}`,
                  quantity: 1,
                },
              ],
            },
          },
        });
      }
    },
    callback() {
      let payload = {
        modal_data: this.offer,
        modal_component: "modal-callback",
        modal_title: "Остались вопросы? Перезвоним Вам!",
        modal_sub_title: this.offer.name,
      };
      this.openModal(payload);
    },
    handleScroll() {
      this.showFixed =
        process.client && this.$device.isMobile && window.scrollY > 499;
    },
  },
};
</script>
