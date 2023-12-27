<template>
  <footer class="page-footer">
    <div class="page-footer__top"></div>
    <div class="page-footer__logo lazyload">
      <picture-component classes="page-footer__logo-img lazyload" :small="`${require(`~/assets/img/logo-footer@1x.png`)}`"
        :small-webp="`${require(`~/assets/img/logo-footer@1x.webp`)}`"
        :big="`${require(`~/assets/img/logo-footer@2x.png`)}`"
        :big-webp="`${require(`~/assets/img/logo-footer@2x.webp`)}`" />
    </div>
    <div class="page-footer__wrap grid grid--footer">


      <div class="page-footer__contacts grid__col-12">
        <div class="page-footer__social">
          <social />
          <div class="page-footer__contacts-list">
            <a class="page-footer__contacts-item" v-show="settings.phone && !isNight"
              :href="`tel:${settings.phone.replace(/[^+\d]/g, '')}`">{{ settings.phone }}
            </a>
            <span v-show="settings.phone && isNight" class="page-footer__contacts-item" @click="callback">
              {{ settings.phone }}
            </span>
            <a class="page-footer__contacts-item" v-if="settings.email" :href="`mailto:${settings.email}`">{{
              settings.email }}
            </a>
          </div>
          <footer-regions />
          <div class="page-footer__credits">
            <div class="page-footer__contacts-item">© 2016 - {{ new Date().getFullYear() }} CARRO.RU</div>
          </div>
        </div>
      </div>


      <div class="page-footer__links grid__col-12">
        <ul class="page-footer__links-list">
          <li class="page-footer__links-item">
            <nuxt-link to="/about" class="page-footer__link">О портале
            </nuxt-link>
          </li>
          <li class="page-footer__links-item" v-if="showBlog">
            <nuxt-link to="/blog" class="page-footer__link">Блог
            </nuxt-link>
          </li>
          <li class="page-footer__links-item">
            <nuxt-link to="/contacts" class="page-footer__link">Контакты
            </nuxt-link>
          </li>
          <li class="page-footer__links-item">
            <nuxt-link to="/contact" class="page-footer__link">Автосалоны-партнеры
            </nuxt-link>
          </li>
          <!--<li class="page-footer__links-item">-->
          <!--	<a class="page-footer__link">-->
          <!-- Вакансии-->
          <!--	</a>-->
          <!--</li>-->
          <li class="page-footer__links-item">
            <nuxt-link to="/privacy" class="page-footer__link">
              Пользовательское соглашение
            </nuxt-link>
          </li>
          <!--<li class="page-footer__links-item">-->
          <!--	<nuxt-link to="/sitemap"-->
          <!--	           class="page-footer__link">-->
          <!--		Карта сайта-->
          <!--	</nuxt-link>-->
          <!--</li>-->
        </ul>
      </div>
      <div class="page-footer__cars grid__col-12">
        <div class="page-footer__cars-stock">
          Автомобилей в наличии:
          <nuxt-link to="/used" class="page-footer__cars-stock-number">{{ allMarksCount | numberFormat }}
          </nuxt-link>
        </div>
        <footer-marks />
      </div>
      <div class="page-footer__legal grid__col-12">
        <ul class="page-footer__legal-list">
          <li class="page-footer__legal-item">
            <span class="page-footer__legal-item-label">Юридическое лицо:</span>
            ООО «РИ-АДВАНС»
          </li>
          <li class="page-footer__legal-item">
            <span class="page-footer__legal-item-label">ОГРН:</span>
            1187746783047
          </li>
          <li class="page-footer__legal-item">
            <span class="page-footer__legal-item-label">ИНН/КПП:</span>
            7724451970/772401001
          </li>
          <li class="page-footer__legal-item">
            <span class="page-footer__legal-item-label">Юридический адрес:</span>
            117405, г. Москва, ул. Кирпичные Выемки, д. 2к1, эт. 4, п. XII, оф. 412
          </li>
          <li class="page-footer__legal-item">
            <span class="page-footer__legal-item-label">Физический адрес:</span>
            117405, г. Москва, Варшавское шоссе, д. 170Г
          </li>
        </ul>
      </div>
      <div class="page-footer__disclaimer grid__col-12">
        <p class="page-footer__disclaimer-p">
          Годовая ставка автокредита варьируется от {{ settings.credit_percent }} до {{ settings.credit_max_percent }} и
          зависит от конкретного банка, суммы займа и
          кредитной
          программы. Минимальный срок погашения от 61 дня, максимальный - 96 месяцев. При этом любые дополнительные
          комиссии
          автопорталом CARRO не взимаются.
        </p>

        <p class="page-footer__disclaimer-p">
          В случае невозвращения в условленный срок суммы автокредита или суммы процентов по автокредиту банк-партнер
          оставляет за собой право начислить штраф за просрочку платежа в среднем размере 0,1% от первоначальной суммы
          автокредита. При несоблюдении условий погашения автокредита данные о нарушителе могут быть переданы в
          специальный реестр должников и коллекторское агентство для взыскания задолженности.
        </p>

        <p class="page-footer__disclaimer-p">
          Данный Интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной
          офертой, определяемой положениями Статьи 437 Гражданского кодекса РФ. Для получения подробной информации о
          наличии и стоимости указанных товаров и (или) услуг, пожалуйста, обращайтесь к менеджерам
          автосалонов-партнеров.
        </p>

        <p class="page-footer__disclaimer-p">
          Кредит предоставляется банком АО «Тинькофф Банк».
          <a class="page-footer__link"
            href="https://acdn.tinkoff.ru/static/documents/d7f200ac-6949-4baa-ab9b-186b11d6b168.pdf"
            target="_blank">Лицензия ЦБ РФ № 2673 от 11.04.2022.
          </a>
        </p>

        <p class="page-footer__disclaimer-p">
          <span>Обязательное страхование гражданской ответственности владельцев транспортных средств осуществляется АО
            «Тинькофф Страхование»
          </span>
          <img class="page-footer__insurance-logo lazyload" alt="tinkoff"
            :data-src="require('~/assets/img/tinkoff-logo.svg')" />
          <span>по лицензии ОС № 0191-03 от 19.05.2015 г.</span>
          <a class="page-footer__link" rel="nofollow"
            href="https://acdn.tinkoffinsurance.ru/static/documents/417d017c-904c-4477-a106-e8bf32008054.pdf"
            target="_blank"> Правовая информация.
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import filters from "@/mixins/filters";

export default {
  mixins: [filters],
  computed: {
    ...mapGetters({
      allMarksCount: 'marks/marks/allMarksCount',
      settings: 'settings/settings/settings',
      isMoscow: 'isMoscow',
      showBlog: 'showBlog',
      isNight: 'isNight'
    })
  },
  methods: {
    ...mapActions({
      openModal: 'modal/modal-main/openModal',
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
  }
}
</script>
