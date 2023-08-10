<template>
  <div class="car__info-group car__info-group--terms">
    <h2 class="visually-hidden" v-if="$device.isMobile">Преимущества</h2>
    <h2 class="heading heading--h2" v-if="!$device.isMobile">Преимущества</h2>
    <ul class="car__terms-list" v-if="$route.params.category === 'europe'">
      <li class="car__terms-item" v-for="item in termsEurope" :key="item.slug">
        <div class="car__terms-element">{{ item.title }}</div>
        <div class="car__terms-element" v-if="item.slug">
          {{ item.slug }}
        </div>
      </li>
    </ul>
    <ul class="car__terms-list" v-else>
      <li class="car__terms-item" v-for="item in terms" :key="item.slug">
        <div class="car__terms-element">{{ item.title }}</div>
        <div class="car__terms-element" v-if="settings[item.slug]">
          {{ settings[item.slug] }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import filters from "@/mixins/filters";
import { mapGetters } from "vuex";

export default {
  mixins: [filters],
  computed: {
    ...mapGetters({
      settings: "settings/settings/settings",
    }),
    terms() {
      return [
        {
          title: "Ставка",
          slug: "credit_percent",
        },
        {
          title: "Первый взнос",
          slug: "first_installment",
        },
        {
          title: "Кредит",
          slug: "credit_sum",
        },
        {
          title: "Срок кредита",
          slug: "credit_period",
        },
        {
          title: "Скидка за кредит",
          slug: "sale_credit",
        },
        {
          title: "Оформление",
          slug: "credit_registration",
        },
        {
          title: "Одобрение",
          slug: "credit_approve",
        },
        {
          title: "Досрочное погашение",
          slug: "credit_repayment",
        },
      ];
    },
    termsEurope() {
      return [
        {
          title: "Доставка из Европы",
          slug: "Бесплатно",
        },
        {
          title: "Задаток",
          slug: "Не требуется",
        },
        {
          title: "Техосмотр",
          slug: "в Европе за наш счет",
        },
        {
          title: "Транспортировка",
          slug: "10-14 дней",
        },
        {
          title: "Пакет документов",
          slug: "Подготовим",
        },
        {
          title: "Страхование перевозки",
          slug: "За наш счет",
        },
        {
          title: "Возможность автокредита",
          slug: "Есть",
        },
      ];
    },
  },
};
</script>
