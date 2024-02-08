<template>
  <div class="car__fixed-wrap">
    <div class="car__buy car__buy--fixed">
      <!--<div class="car__price-block">-->
      <!--	<div class="car__price">-->
      <!--		{{ offer.price | toCurrency }}-->
      <!--	</div>-->
      <!--	<tippy-question text="Цена актуальна при покупке в кредит"/>-->
      <!--	<div class="car__price-payment">-->
      <!--		В кредит от {{ offer.price | access_acredit }} / мес.-->
      <!--	</div>-->
      <!--</div>-->
      <div class="car__buy-block">
        <div class="car__actions-buttons">
          <!--					<button-favorite :active="likesArray.some(id => id === String(offer.external_id))"-->
          <!--					                 @click="like()" />-->
          <button @click.prevent="creditClick(offer)" class="button button--credit">
            В кредит за {{ creditPrice(offer.price) }}
          </button>
          <button-call class="button--call-green" :phone="offer.dealer.phone" @click="callback(offer)"/>
        </div>
        <!--				<button @click.prevent="callback(offer)"-->
        <!--				        class="button button&#45;&#45;link">-->
        <!--					Обратный звонок-->
        <!--				</button>-->
      </div>
    </div>
  </div>
</template>

<script>
import {creditPrice} from "@/helpers/creditPrice";
import filters from "~/mixins/filters";
import {mapActions, mapGetters} from "vuex";

export default {
  mixins: [filters],
  computed: {
    ...mapGetters({
      offer: 'catalog/catalog-cars/offer',
      likesArray: 'favorite/favorite/likesArray'
    })
  },
  methods: {
    creditPrice,
    ...mapActions({
      liked: 'favorite/favorite/liked',
      openModal: 'modal/modal-main/openModal'
    }),
    async like() {
      await this.liked(this.offer.external_id)
    },
    async callback(carInfo) {
      let payload = {
        modal_data: carInfo,
        modal_component: 'modal-callback',
        modal_title: 'Остались вопросы? Перезвоним Вам!',
        modal_sub_title: carInfo.name
      }
      await this.openModal(payload)
    },
    creditClick(carInfo) {
      let payload = {
        modal_data: carInfo,
        modal_component: 'modal-credit',
        modal_title: 'Заявка на автокредит',
        modal_sub_title: carInfo.name
      }
      this.openModal(payload)
    }
  }
}
</script>
