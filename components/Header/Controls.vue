<template>
  <ul class="page-header__buttons">
    <li class="page-header__buttons-item">
      <nuxt-link to="/favorites"
                 class="page-header__buttons-link"
                 title="Избранное"
                 aria-label="Избранное">
				<span v-show="likesArray.length"
              class="page-header__favorites-count">{{ likesArray.length }}
				</span>
        <svg-icon
          name="icon-favorites"/>
      </nuxt-link>
    </li>
    <li class="page-header__buttons-item"
        v-if="$device.isMobile">
      <div @click="searchClick"
           class="page-header__buttons-link">
        <svg-icon
          name="icon-search"/>
      </div>
    </li>
    <li class="page-header__buttons-item page-header__buttons-item--call">
      <a class="page-header__buttons-link page-header__buttons-link--phone"
         v-show="settings.phone && !isNight"
         :href="`tel:${currentPhone.replace(/[^+\d]/g, '')}`"
         title="Бесплатный звонок"
         aria-label="Бесплатный звонок">
        <svg-icon
          name="icon-call"/>
        <span class="page-header__buttons-phone">{{ currentPhone }}</span>
      </a>
      <div v-show="settings.phone && isNight" @click="callback"
           class="page-header__buttons-link page-header__buttons-link--phone">
        <svg-icon
          name="icon-call"/>
        <span class="page-header__buttons-phone">{{ currentPhone }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  computed: {
    ...mapGetters({
      settings: 'settings/settings/settings',
      likesArray: 'favorite/favorite/likesArray',
      dealerPhone: 'header/header/dealerPhone',
      isNight: 'isNight'
    }),
    currentPhone() {
      return this.dealerPhone ? this.dealerPhone : this.settings.phone
    }
  },
  methods: {
    ...mapActions({
      openModal: 'modal/modal-main/openModal',
      getLikes: 'favorite/favorite/getLikes'
    }),
    ...mapMutations({
      setModalMenu: 'modal/modal-menu/setModalMenu',
      setModalMarks: 'modal/modal-marks/setModalMarks',
      setModalSearch: 'modal/modal-search/setModalSearch',
      setMobileSearch: 'modal/modal-search/setMobileSearch',
      setHeaderFilterClick: 'click/SET_HEADER_FILTER_CLICK'
    }),
    callback() {
      let payload = {
        modal_data: {},
        modal_component: "modal-callback",
        modal_title: "Остались вопросы? Перезвоним Вам!",
        modal_sub_title: '',
      };
      this.openModal(payload);
    },
    async searchClick() {
      await this.setHeaderFilterClick(true)
      if (!this.$route.params.category) {
        await this.$router.push('/used')
      }
      let payload = {
        modal_component: 'modal-filter-mobile',
        modal_data: 'filter-mobile',
        modal_title: 'Фильтр',
      }
      await this.openModal(payload)
    }
  }
}
</script>
