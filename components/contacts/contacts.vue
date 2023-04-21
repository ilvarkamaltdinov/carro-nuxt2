<template>

  <section class="page-main__about about grid">
    <div class="heading-group heading-group--h1">
      <div class="heading-group__wrap">
        <h1 class="heading heading--h1">{{ pageTitle }}
          <span class="heading__promo"></span>
        </h1>
        <span class="heading-group__label">Свяжитесь с нами</span>
      </div>
    </div>
    <div class="about__block grid__col-12 grid text">
      <div class="grid__col-7 text__wrap text__wrap--figure">
        <div class="text__figure figure">
          <picture-component
            classes="text__figure-img lazyload"
            :small="`${require(`~/assets/img/figures/figure-5@1x.png`)}`"
            :small-webp="`${require(`~/assets/img/figures/figure-5@1x.webp`)}`"
            :big="`${require(`~/assets/img/figures/figure-5@2x.png`)}`"
            :big-webp="`${require(`~/assets/img/figures/figure-5@2x.webp`)}`"/>
        </div>
        <div class="text__content">
          <div class="text__contacts-group" v-if="settings.phone">
            <div class="text__contacts-label">Вопросы о портале:</div>
            <a class="text__contacts-item"
               :href="`tel:${settings.phone}`">{{ settings.phone }}
            </a>
          </div>
          <div class="text__contacts-group">
            <div class="text__contacts-label">Вопросы сотрудничества:</div>
            <a class="text__contacts-item"
               :href="`mailto:${settings.email}`">{{ settings.email }}
            </a>
          </div>
          <div class="text__contacts-group" v-if="dealers.length">
            <div class="text__contacts-label">
              {{ dealers.length === 1 ? 'Филиал' : 'Филиалы' }}
              в
              {{
                settings.in_city
              }}:
            </div>
            <p class="text__p" v-for="dealer in dealers" :key="dealer.id">
              {{ dealer.address }}
            </p>
          </div>
        </div>
      </div>
      <div class="grid__col-5 text__wrap">
        <div class="text__content">
          <h2 class="heading heading--h2">Юридическая информация</h2>
          <div class="text__contacts-label">Юридический адрес:</div>
          <p class="text__p"> 115487, г. Москва, ул. Нагатинская, 16/9</p>
          <div class="text__contacts-label">Физический адрес:</div>
          <p class="text__p">117405, г. Москва, Варшавское шоссе, 170Г</p>
          <ul class="text__list">
            <li class="text__list-item">ООО «Ю-СТАЙЛ»</li>
            <li class="text__list-item">ИНН: 7724398974</li>
            <li class="text__list-item">ОГРН: 1177746078916</li>
            <li class="text"></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

</template>
<script>
import {mapActions, mapGetters} from "vuex";
import dealersContact from "@/apollo/queries/dealer/dealersContact";

export default {
  data() {
    return {
      dealers: []
    }
  },
  props: {
    pageTitle: String
  },
  computed: {
    ...mapGetters({
      settings: 'settings/settings/settings',
      isMoscow: 'isMoscow',
    })
  },
  methods: {
    ...mapActions({
      request: 'request'
    })
  },
  async fetch() {
    let variables = {}
    try {
      let response = await this.request({
        query: dealersContact,
        variables: variables
      });
      if (this.isMoscow) {
        this.dealers = response.data.dealers.splice(0, 2)
      } else {
        this.dealers = response.data.dealers
      }
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
