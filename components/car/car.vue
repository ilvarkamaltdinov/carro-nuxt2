<template>
  <div v-if="offer">
    <section class="page-main__car car" v-show="carPageLoaded">
      <div class="grid grid--container" v-if="$device.isMobile">
        <benefits class="car__benefits" :benefits="benefitsCar" />
      </div>
      <div class="grid grid--container">
        <div class="heading-group heading-group--h1 grid__col-6">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1" v-html="pageTitle"></h1>
            <span
              class="heading-group__label heading-group__label--car"
              v-if="offer.generation"
            >
              <span class="heading-group__year">
                {{ offer.year }}
              </span>
              {{ offer.generation.name }}
              <span
                class="car__vin vin"
                v-tippy="{
                  content: `<div class='tippy__text'>VIN-номер проверен на предмет нахождения в розыске, угоне, залоге, использования в такси, попадания в ДТП, соответствия количества владельцев.</div>`,
                  animation: 'scale',
                  arrow: true,
                }"
                v-if="offer.vin"
              >
                <svg-icon name="icon-check" />
                VIN
              </span>
	            <span v-if="offer.vin">
		            {{ offer.vin }}
	            </span>
            </span>
          </div>
        </div>
        <div class="car__top-buttons grid__col-6" v-if="offer.is_active">
          <button-typical
            @click="callback"
            text="Обратный звонок"
            class="button--icon button--link"
            icon="icon-callback"
          />
          <button-call-modal :phone="offer.dealer.phone" />
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
        <car-info />
      </div>
      <div class="grid grid--container">
        <benefits class="car__benefits car__benefits--desktop" :benefits="benefitsCar" />
        <car-credit v-if="offer && offer.is_active" :offer="offer" />
      </div>
    </section>
    <catalog-list-car v-show="carPageLoaded" />
    <skeleton-car v-show="!carPageLoaded" />
  </div>
  <skeleton-car v-else />
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import offer from "@/apollo/queries/offer/offer";
import seoTags from "@/mixins/seoTags";
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
      jsonType: "car",
      showFixed: false,
    };
  },
  mounted() {
    setTimeout(function () {
      window.scrollTo(0, -100);
    }, 1);
    this.setBackButton(this.currentBackButton);
  },
  async fetch() {
    if (Number(this.$route.params.car)) {
      let variables = {
        site_id: this.site_id,
        mark_slug: this.$route.params.mark,
        folder_slug: this.$route.params.model,
        dateFormat: "j F Y года.",
        external_id: Number(this.$route.params.car),
      };
      let response = await this.request({ query: offer, variables: variables });
      if (!this.validateCategoryOffer(response.data.offer.category_enum)) {
        return this.$nuxt.error({ statusCode: 404 });
      }
      await this.setOffer(response.data.offer);
      await this.setDealerPhone(response.data.offer.dealer.phone);
      await this.sendYandexCommercial();
      await this.sendMyTarget();
    }
  },
  computed: {
    ...mapGetters({
      domain: "domain",
      site_id: "site_id",
      offer: "catalog/catalog-cars/offer",
      carPageLoaded: "catalog/catalog-cars/carPageLoaded",
      benefitsCar: "benefits/benefitsCar",
      marks: "marks/marks/allMarks",
      folders: "folders/folders/folders",
      focusShowFixed: "car/car/focusShowFixed",
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
    }),
    ...mapActions({
      request: "filters/filters/request",
      openModal: "modal/modal-main/openModal",
    }),
    validateCategoryOffer(category) {
      return this.$route.params.category === category;
    },
    sendMyTarget() {
      if (process.client) {
        _tmr.push({
          type: "itemView",
          productid: this.offer.external_id,
          pagetype: "product",
          list: "1",
          totalvalue: this.offer.price,
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
