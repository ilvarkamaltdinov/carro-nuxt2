<template>
  <form class="form"
        @submit.prevent="submitForm()">
    <div class="catalog form__catalog"
         v-if="$device.isMobile && offer.mark">
      <catalog-item-large-mobile-form :is-form="true"
                                      :offer="offer"/>
    </div>
    <fieldset class="form__fieldset">
      <label class="form__field-wrap"
             :class="nameClass">
        <inputs-input placeholder="Имя"
                      @input="handlerInput('name')"
                      v-model="form.name.value"
                      type="text"/>
      </label>
      <!--<label class="form__field-wrap"-->
      <!--       :class="dateClass">-->
      <!--	<inputs-input placeholder="Дата рождения"-->
      <!--	              @input="handlerInput('date')"-->
      <!--	              @dateMaskComplete="form.date.valid = true"-->
      <!--	              @onincomplete="form.date.valid = null"-->
      <!--	              v-model="form.date.value"-->
      <!--	              mask="date"-->
      <!--	              type="tel" />-->
      <!--</label>-->
      <label class="form__field-wrap"
             :class="phoneClass">
        <inputs-input placeholder="Телефон"
                      @input="handlerInput('phone')"
                      @phoneMaskComplete="form.phone.valid = true"
                      @onincomplete="form.phone.valid = null"
                      v-model="form.phone.value"
                      mask="phone"
                      type="tel"/>
      </label>
      <!--<checkbox-form @change="changeCheckbox($event,'agreeRf')"-->
      <!--               label="Подтверждаю наличие гражданства РФ" />-->
      <checkbox-form :error="error === 'agree'"
                     @change="changeCheckbox($event,'agree')"
                     label="Согласен на"
                     link="обработку личных данных"/>
    </fieldset>
    <button-typical :loading="buttonDisabled"
                    text="Перезвоните мне"
                    button-class="button--credit button--form"/>
  </form>
</template>
<script>
import {mapActions, mapMutations} from "vuex";
import formValidation from "@/mixins/formValidation";

export default {
  mixins: [formValidation],
  props: {
    offer: Object
  },
  methods: {
    ...mapMutations({
      setModalCount: 'modal/modal-main/SET_OPEN_MODAL_COUNT'
    }),
    ...mapActions({
      sendForm: 'form/form/sendForm',
      closeModal: 'modal/modal-main/closeModal'
    }),
    checkForm() {
      if (this.form.name.value.length < 2) {
        this.form.name.valid = false
        return false
      }
      // if (this.form.date.value === '' || this.form.date.value.split('_').length > 1) {
      // 	this.form.date.valid = false
      // 	return false
      // }
      if (!this.form.phone.valid) {
        this.form.phone.valid = false
        return false
      }
      if (!this.form.agree) {
        this.error = 'agree'
        return false
      }
      // if (!this.form.agreeRf) {
      // 	this.error = 'agreeRf'
      // 	return false
      // }
      return true;
    },
    async submitForm() {
      if (this.checkForm()) {
        let formData = {
          chosen_car: this.offer,
          type: 'callback',
          client_name: this.form.name.value,
          client_phone: this.form.phone.value,
          dealer: this.offer?.dealer?.slug
        }
        // utm
        if (localStorage.utm_source) {
          formData.utm_source = localStorage.utm_source
        }
        if (localStorage.utm_medium) {
          formData.utm_medium = localStorage.utm_medium
        }
        if (localStorage.utm_campaign) {
          formData.utm_campaign = localStorage.utm_campaign
        }
        if (localStorage.utm_term) {
          formData.utm_term = localStorage.utm_term
        }
        if (localStorage.utm_content) {
          formData.utm_content = localStorage.utm_content
        }
        if (this.offer.dealerModal) {
          formData.comment = this.offer.title
        } else {
          formData.external_id = this.offer.external_id
        }
        await this.setModalCount(1)
        await this.sendForm(formData)
        await this.closeModal()

      }
    },
  }
}
</script>
