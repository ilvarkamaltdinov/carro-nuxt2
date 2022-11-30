<template>
	<div class="car__info-group car__info-group--terms">
		<h2 class="visually-hidden">Преимущества покупки</h2>
		<ul class="car__terms-list">
			<li class="car__terms-item">
				<div class="car__terms-element">Ставка</div>
        <div class="car__terms-element">{{ settings.credit_percent }}</div>
			</li>
      <li class="car__terms-item">
				<div class="car__terms-element">Первый взнос</div>
        <div class="car__terms-element">от 0%</div>
			</li>
      <li class="car__terms-item">
				<div class="car__terms-element">Кредит</div>
        <div class="car__terms-element">{{ settings.credit_sum }}</div>
			</li>
      <li class="car__terms-item">
				<div class="car__terms-element">Срок кредита</div>
        <div class="car__terms-element">от 6 месяцев до 7 лет</div>
			</li>
      <li class="car__terms-item">
				<div class="car__terms-element">Скидка за кредит</div>
        <div class="car__terms-element">{{ settings.sale_credit }}</div>
			</li>
      <li class="car__terms-item">
				<div class="car__terms-element">Оформление</div>
        <div class="car__terms-element">30 минут</div>
			</li>
      <li class="car__terms-item">
				<div class="car__terms-element">Одобрение</div>
        <div class="car__terms-element">По паспорту и правам</div>
			</li>
      <li class="car__terms-item">
				<div class="car__terms-element">Досрочное погашение</div>
        <div class="car__terms-element">Без штрафов</div>
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
    })
  }
}
</script>
