<template>
  <div v-if="modalLoad">
    <div class="modal__options">
      <img class="modal__logo"
           src="~/assets/img/logo-autoteka.svg"
           loading="lazy"
           alt=""/>
      <div class="modal__buttons">
        <button-download @click="download"
                         :preloader="preloader"/>
        <!-- <button-share /> -->
      </div>
    </div>
    <div class="modal__wrap"
         v-if="modalData">
      <div class="features">
        <div class="features__group">
          <h3 class="heading heading--h3 features__indicator features__indicator--clean">Технические характеристики:
          </h3>
          <ul class="features__list features__list--column">
            <li class="features__item">
              <div class="features__item-type">VIN:</div>
              <div class="features__item-content">{{ modalData.vin }}</div>
            </li>
            <li class="features__item">
              <div class="features__item-type">Госномер:</div>
              <div class="features__item-content">Отсутствует</div>
            </li>
            <li class="features__item">
              <div class="features__item-type">№ кузова:</div>
              <div class="features__item-content">{{ modalData.vin }}</div>
            </li>
            <li class="features__item">
              <div class="features__item-type">Год выпуска:</div>
              <div class="features__item-content">{{ modalData.year }}</div>
            </li>
            <li class="features__item">
              <div class="features__item-type">Тип ТС:</div>
              <div class="features__item-content">{{ modalData.bodyType.title }}</div>
            </li>
            <li class="features__item">
              <div class="features__item-type">Цвет:</div>
              <div class="features__item-content">{{ modalData.color.title }}</div>
            </li>
            <li class="features__item">
              <div class="features__item-type">Объём двигателя:</div>
              <div class="features__item-content">{{ modalData.engine_volume | engineVolume }}</div>
            </li>
            <li class="features__item">
              <div class="features__item-type">Мощность:</div>
              <div class="features__item-content">{{ modalData.engine_power }} л.с.</div>
            </li>
            <li class="features__item">
              <div class="features__item-type">Последний пробег:</div>
              <div class="features__item-content">{{ modalData.run | run }} км</div>
            </li>
          </ul>
        </div>
        <div class="features__group"
             v-for="item in items"
             :key="item.title">
          <h3 class="heading heading--h3 features__indicator features__indicator--clean">
            {{ item.title }}
          </h3>
          <p class="features__item">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="modal__wrap">
    <div class="loader"></div>
  </div>
</template>
<script>
import filters from "@/mixins/filters";

import {mapGetters} from "vuex";

export default {
  data() {
    return {
      modalLoad: false,
      preloader: false
    }
  },
  mixins: [filters],
  computed: {
    ...mapGetters({
      modalData: 'modal/modal-main/modalData',
      domain: 'domain',
      api: 'api'
    }),
    items() {
      return [
        {
          title: 'Не найдены ограничения на регистрацию',
          text: 'Запрет регистрационных действий на машину накладывается, если у автовладельца есть неоплаченные штрафы и налоги, либо если имущество стало предметом спора.',
          isOpen: false,
        },
        {
          title: 'Нет сведений о розыске',
          text: 'Покупка разыскиваемого автомобиля грозит тем, что его отберут в ГИБДД при регистрации, и пока будет идти следствие, а это может затянуться на долгий срок, автомобиль будет стоять на штрафплощадке.',
          isOpen: false,
        },
        {
          title: 'Залог не найден',
          text: 'Мы проверили базы данных Федеральной нотариальной палаты (ФНП) и Национального бюро кредитных историй (НБКИ).',
          isOpen: false,
        },
        {
          title: `${this.modalData.owner.title} по ПТС`,
          text: '',
          isOpen: false
        },
        {
          title: 'ДТП не найдены',
          text: 'В отчёт не попадут аварии, которые произошли раньше 2015 года или не оформлялись в ГИБДД.',
          isOpen: false,
        },
        {
          title: 'Не найдены расчёты стоимости ремонта',
          text: 'Мы проверяем, во сколько эксперты страховых компаний оценили восстановление автомобиля после ДТП. Расчёт не означает, что машину ремонтировали.',
          isOpen: false,
        },
        {
          title: 'Не найдено разрешение на работу в такси',
          text: 'Данные представлены из региональных баз по регистрации автомобиля в качестве такси.',
          isOpen: false,
        },
        {
          title: 'Не найдены сведения об использовании в каршеринге',
          text: 'На каршеринговых авто ездят практически круглосуточно. Они много времени проводят в пробках — от этого двигатель и сцепление быстро изнашиваются. Салон тоже страдает от большого количества водителей и пассажиров.',
          isOpen: false,
        },
        {
          title: 'Не найдены сведения о диагностике',
          text: 'В блоке представлены данные по оценке состояния автомобиля по результатам офлайн диагностики. В ходе диагностики специалисты проверяют состояние ЛКП, всех конструкций автомобиля, состояние салона, фактическую комплектацию и проводят небольшой тест-драйв.',
          isOpen: false,
        },
        {
          title: 'Не найдены сведения о техосмотрах',
          text: 'В данном блоке отображаются данные о прохождении техосмотра на основании данных диагностических карт ТС. Срок прохождения технического осмотра для автомобилей категории «B»: — первые четыре года — не требуется; — возраст от 4 до 10 лет — каждые 2 года; — старше 10 лет — ежегодно.',
          isOpen: false,
        },
        {
          title: 'Нет сведений о ввозе из-за границы',
          text: 'Данные из таможенной декларации, которую заполняет компания, осуществляющая ввоз транспортного средства на территорию РФ.',
          isOpen: false,
        },
        {
          title: 'Нет полиса ОСАГО',
          isOpen: false,
        },
        {
          title: 'Не найдены сведения об отзывных кампаниях',
          text: 'Для данного автомобиля не проводилось или нет действующих отзывных кампаний. Отзыв автомобиля представляет собой устранение выявленного брака. Практически все автомобильные производители периодически отзывают свои продукты для устранения дефектов.',
          isOpen: false,
        },
      ]
    }
  },
  methods: {
    download() {
      if (!this.preloader) {
        this.preloader = true
        this.$axios({
          responseType: 'blob',
          method: "POST",
          url: 'https://' + this.api + '/pdf/autoteka',
          params: {
            offer_external_id: this.modalData.external_id
          }
        }).then(response => {
          let fileURL = window.URL.createObjectURL(new Blob([response.data]));
          let fURL = document.createElement('a');

          fURL.href = fileURL;
          fURL.setAttribute('download', `Отчет автотеки ${this.modalData.mark.title} ${this.modalData.folder.title} ${this.modalData.modification.name}, ${this.modalData.year}.pdf`);
          document.body.appendChild(fURL);

          fURL.click();
          this.preloader = false
        }).catch(error => {
          console.log(error)
        })
      }

    }
  },
  mounted() {
    setTimeout(() => {
      this.modalLoad = true
    }, 2000)
  }
}
</script>
