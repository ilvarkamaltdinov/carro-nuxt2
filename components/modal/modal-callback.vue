<template>
  <div>
    <div class="modal__options" v-if="modalData.mark">
      <img class="modal__logo" :src="modalData.dealer.image_logo" loading="lazy" alt=""/>
      <div class="modal__buttons" v-if="modalData.dealer.phone">
        <button-call-modal :phone="modalData.dealer.phone"/>
      </div>
    </div>
    <div class="modal__wrap">
      <benefits :has-modal="false" modal :benefits="benefitsCredit"/>
      <div class="application application--modal grid__col-12 grid grid--application grid--application-modal">
        <div class="application__form grid__col-4">
          <div class="text">
            <p v-show="!isNight" class="text__p text__p--modal">Оставьте заявку, и наши операторы свяжутся с вами в течение <span
              class="text__working-hours">5 минут!</span> </p>
            <p v-show="isNight" class="text__p text__p--modal">Операторы работают <span
              class="text__working-hours">с 9:00 до 21:00</span>. Оставьте заявку, и мы с радостью перезвоним вам в
              рабочее
              время!</p>
          </div>
          <div class="heading-group heading-group--form">
            <div class="heading-group__wrap">
              <h2 class="heading heading--h2">Обратный звонок</h2>
              <span class="heading-group__label">Перезвоним в течение 5 минут</span>
            </div>
          </div>
          <form-callback :offer="modalData"/>
        </div>
        <div class="application__catalog application__catalog--modal catalog grid__col-4" v-if="modalData">
          <component :is="$device.isMobile ? 'catalog-item-large-mobile':'catalog-item-small-desktop'"
                     v-if="!$device.isMobile && modalData.mark" :is-form="true" :has-buttons="false"
                     :offer="modalData"/>
          <div v-if="modalData.dealerModal">
            <div class="dealers__item-img-wrap">
              <picture-component classes="dealers__item-img lazyload" :small="modalData.images[0].small"
                                 :small-webp="modalData.images[0].small_webp" :big="modalData.images[0].medium"
                                 :big-webp="modalData.images[0].medium_webp"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      modalData: 'modal/modal-main/modalData',
      benefitsCredit: 'benefits/benefitsCredit',
      isNight: 'isNight'
    }),
  }
}
</script>
