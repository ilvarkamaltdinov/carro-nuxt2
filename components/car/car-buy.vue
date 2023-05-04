<template>
  <div class="car__buy-wrap">
    <div class="car__buy">
      <div class="car__price-block">
        <div
          v-if="$route.params.category === 'europe'"
          class="car__price-europe visually-hidden"
        >
          32 456 €
        </div>
        <div class="car__price">
          {{ offer.price | toCurrency }}
        </div>
        <!-- <tippy-question text="Цена актуальна при покупке в кредит" /> -->
        <div class="car__price-old">
          {{ offer.price | toCurrency }}
        </div>
        <div class="car__price-payment">
          {{ offer.price | access_acredit }} / мес.
        </div>
      </div>
      <div v-if="offer.is_active" class="car__buy-block">
        <div
          v-if="$route.params.category === 'europe'"
          class="car__actions-buttons"
        >
          <button-autoteka
            v-if="$route.params.category !== 'europe'"
            @click="autoteka(offer)"
          />
          <button-favorite
            v-if="offer.is_active"
            :active="likesArray.some((id) => id === String(offer.external_id))"
            @click="like()"
          />
          <!--<button-compare />-->
          <button-call
            v-if="offer.is_active && offer.dealer.phone"
            :phone="offer.dealer.phone"
            @click="callback(offer)"
          />
        </div>
        <button
          v-if="$route.params.category !== 'europe'"
          @click.prevent="installmentClick(offer)"
          class="button button--credit-pay button--link"
        >
          Рассрочка
        </button>
        <button
          v-if="showTradeIn"
          @click.prevent="tradeInClick(offer)"
          class="button button--trade-in button--link"
        >
          Trade-In
        </button>
        <button
          v-if="$route.params.category === 'europe'"
          @click.prevent="creditClick(offer)"
          class="button button--credit button--credit-europe"
        >
          Рассчитать кредит
        </button>
        <button
          v-else
          @click.prevent="creditClick(offer)"
          class="button button--credit"
        >
          Купить в кредит
        </button>
      </div>
      <div
        v-if="$route.params.category !== 'europe'"
        class="car__actions-block"
      >
        <rating-car
          v-tippy="{
            content: `<div class='tippy__text'>Рейтинг автомобиля</div>`,
            animation: 'scale',
            arrow: true,
          }"
          @click="ratingClick"
          :rating="offer.rating"
        />
        <div class="car__actions-buttons">
          <button-autoteka
            v-if="$route.params.category !== 'europe'"
            @click="autoteka(offer)"
          />
          <button-favorite
            v-if="offer.is_active"
            :active="likesArray.some((id) => id === String(offer.external_id))"
            @click="like()"
          />
          <!--<button-compare />-->
          <button-call
            v-if="offer.is_active && offer.dealer.phone"
            :phone="offer.dealer.phone"
            @click="callback(offer)"
          />
        </div>
      </div>
      <div class="car__stock" v-if="offer.category_enum === 'europe'">
        Под заказ в автоцентре
        <a
          href="#"
          @click.prevent="moreInfoDiller(offer.dealer.slug)"
          class="car__stock-dealer"
        >
          «{{ offer.dealer.title }}»
        </a>
        <div class="car__stock-promo">
          г. {{ offer.dealer.city }}, {{ offer.dealer.address }}
        </div>
      </div>
      <div class="car__stock" v-else-if="offer.is_active && !offer.is_stock">
        В наличии в автоцентре
        <a
          href="#"
          @click.prevent="moreInfoDiller(offer.dealer.slug)"
          class="car__stock-dealer"
        >
          «{{ offer.dealer.title }}»
        </a>
        <div class="car__stock-promo">
          г. {{ offer.dealer.city }}, {{ offer.dealer.address }}
        </div>
      </div>
      <div
        v-else-if="offer.is_active && offer.is_stock"
        class="car__stock car__stock--no"
      >
        Автомобиль находится на центральной стоянке
      </div>
      <div v-else class="car__stock car__stock--no">Нет в наличии</div>
    </div>
    <car-terms
      v-if="!$device.isMobile"
      class="swiper-slide car__info-group--options"
    />
  </div>
</template>
<script>
import filters from "~/mixins/filters";
import { mapActions, mapGetters } from "vuex";
import dealer from "@/apollo/queries/dealer/dealer";

export default {
  mixins: [filters],
  computed: {
    ...mapGetters({
      offer: "catalog/catalog-cars/offer",
      likesArray: "favorite/favorite/likesArray",
      settings: "settings/settings/settings",
    }),
    showTradeIn() {
      if (this.$route.params.category === "europe") {
        if (this.$device.isMobile) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
  },
  methods: {
    ...mapActions({
      liked: "favorite/favorite/liked",
      openModal: "modal/modal-main/openModal",
      request: "request",
    }),
    async moreInfoDiller(dealerSlug) {
      try {
        let dealerData = await this.request({
          query: dealer,
          variables: { slug: dealerSlug },
        });
        dealerData = dealerData.data.dealer;
        let payload = {
          modal_data: dealerData,
          modal_component: "modal-dealer",
          modal_title: `Автоцентр «${dealerData.title}»`,
          modal_sub_title: `${dealerData.short_description}`,
        };
        await this.openModal(payload);
      } catch (e) {
        console.log(e);
      }
    },
    async like() {
      await this.liked(this.offer.external_id);
    },
    creditClick(carInfo) {
      let payload = {
        modal_data: carInfo,
        modal_component: "modal-credit",
        modal_title: `Автокредит от <span class="heading__promo">${this.settings.credit_percent}</span>`,
        modal_sub_title: "",
      };
      this.openModal(payload);
    },
    callback(carInfo) {
      let payload = {
        modal_data: carInfo,
        modal_component: "modal-callback",
        modal_title: "Остались вопросы? Перезвоним Вам!",
        modal_sub_title: carInfo.name,
      };
      this.openModal(payload);
    },
    ratingClick() {
      let payload = {
        modal_data: this.offer,
        modal_component: "modal-rating",
        modal_title: " Состояние автомобиля",
        modal_sub_title: this.offer.name,
      };
      this.openModal(payload);
    },
    tradeInClick(carInfo) {
      let payload = {
        modal_data: carInfo,
        modal_component: "modal-tradeIn",
        modal_title: "Заявка на Trade-In",
        modal_sub_title: "",
      };
      this.openModal(payload);
    },
    installmentClick(carInfo) {
      let payload = {
        modal_data: carInfo,
        modal_component: "modal-installment",
        modal_title: `Рассрочка <span class="heading__promo">0 %</span>`,
        modal_sub_title: "",
      };
      this.openModal(payload);
    },
    async autoteka(carInfo) {
      let payload = {
        modal_data: carInfo,
        modal_component: "modal-autoteka",
        modal_title: "Отчет «Автотеки» от " + carInfo.createdAt,
        modal_sub_title: carInfo.name,
      };
      await this.openModal(payload);
    },
  },
};
</script>
