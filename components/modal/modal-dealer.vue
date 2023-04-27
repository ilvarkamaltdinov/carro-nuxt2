<template>
  <div>
    <div class="modal__options">
      <img class="modal__logo"
           :src="modalData.image_logo | replaceApiUrl(api)"
           alt=""/>
      <div class="modal__buttons">
        <button-callback @click="callback"/>
        <button-call-modal v-if="modalData.phone" :phone="modalData.phone"/>
      </div>
    </div>
    <div class="modal__wrap">
      <div class="features features--dealer">
        <div class="features__group">
          <h3 class="heading heading--h3">Контактные данные:</h3>
          <ul class="features__list">
            <li class="features__item">
              <div class="features__item-type">Город:</div>
              <div class="features__item-content">{{ modalData.city }}</div>
            </li>
            <li class="features__item">
              <div class="features__item-type">Адрес:</div>
              <div class="features__item-content">{{ modalData.address }}</div>
            </li>
            <li class="features__item"
                v-if="modalData.metro">
              <div class="features__item-type">Метро:</div>
              <div class="features__item-content">{{ modalData.metro }}</div>
            </li>
            <li class="features__item">
              <div class="features__item-type">Режим работы:</div>
              <div class="features__item-content">{{ modalData.schedule }}</div>
            </li>
            <li class="features__item" v-if="modalData.phone">
              <div class="features__item-type">Телефон автоцентра:</div>
              <div class="features__item-content">
                <a class="features__link"
                   :href="`tel:${modalData.phone.replace(/[^+\d]/g, '')}`">{{ modalData.phone }}
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div class="features__group">
          <h3 class="heading heading--h3">Об автоцентре:</h3>
          <p class="about-dealer__text"
             v-html="modalData.description "></p>
        </div>
      </div>
      <div class="modal__dealer-photos">
        <h3 class="heading heading--h3">Фотографии автоцентра:</h3>
        <dealers-slider :images="modalData.images"/>
      </div>
      <div class="modal__dealer-map">
        <h3 class="heading heading--h3">Автоцентр на карте:</h3>
        <div class="map map--dealer">
          <map-dealer :settings="{coordinates:modalData.coordinates}"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import filters from "@/mixins/filters";

export default {
  mixins: [filters],
  computed: {
    ...mapGetters({
      modalData: 'modal/modal-main/modalData',
      api: 'api'
    })
  },
  methods: {
    ...mapActions({
      openModal: 'modal/modal-main/openModal'
    }),
    async callback() {
      let modalData = this.modalData
      modalData.dealerModal = true
      let payload = {
        modal_data: modalData,
        modal_component: 'modal-callback',
        modal_title: 'Остались вопросы? Перезвоним Вам!',
        modal_sub_title: 'Автосалон ' + this.modalData.title
      }
      await this.openModal(payload)
    }
  }
}
</script>
