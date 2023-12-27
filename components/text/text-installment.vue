<template>
  <section class="page-main__text text grid__col-12">
    <h2 class="heading heading--h2">Об услуге</h2>
    <div class="grid">
      <div class="text__wrap text__wrap--figure grid__col-12">
        <div class="text__figure figure">
          <picture-component
            classes="text__figure-img lazyload"
            :small="`${require(`~/assets/img/figures/figure-2@1x.png`)}`"
            :small-webp="`${require(`~/assets/img/figures/figure-2@1x.webp`)}`"
            :big="`${require(`~/assets/img/figures/figure-2@2x.png`)}`"
            :big-webp="`${require(`~/assets/img/figures/figure-2@2x.webp`)}`"/>
        </div>
        <div class="text__content">
          <p class="text__p">
            На CARRO вы можете приобрести автомобиль в рассрочку без любых переплат и процентов.
            <!--						Единственным требованием станет первоначальный взнос в размере не менее 10% от стоимости-->
            <!--						автомобиля.-->
          </p>
          <p class="text__p">
            Рассрочка является удобным способом покупки транспортного средства с пробегом, учитывая,
            что процентная ставка не начисляется. Рассрочка станет идеальным решением в случае
            погашения стоимости автомобиля за срок до 3 лет. Если же выплата всей суммы за 3 года
            обременительна для семейного бюджета, оптимальным решением станет
            <nuxt-link to="/credit">автокредит</nuxt-link>
            {{ settings.credit_percent }} со
            скидкой {{ settings.sale_credit }}.
          </p>
          <p class="text__p">
            Окончательное решение о предоставлении рассрочки принимается банками-партнерами CARRO.
          </p>
          <p class="text__p">
            Преимущества рассрочки carro.ru:
          </p>
          <ul class="text__list">
            <li class="text__list-item">Ставка 0%</li>
            <li class="text__list-item">Без первоначального взноса</li>
            <li class="text__list-item">Комплект резины в подарок</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      settings: 'settings/settings/settings'
    })
  }
}
</script>
