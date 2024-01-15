<template>
  <section class="page-main__slider-index slider-index grid__col-8">
    <!-- Slider main container-->
    <div class="swiper swiper--progress swiper--index">
      <!-- Additional required wrapper-->
      <div class="swiper-wrapper">
        <!-- Slides-->
        <slider-index-slide v-for="slide in slides" :slide="slide" :key="slide.id" />
      </div>
      <!-- If we need pagination-->
      <div class="swiper-pagination"></div>
      <!-- If we need navigation buttons-->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- If we need scrollbar-->
      <div class="swiper-scrollbar"></div>
    </div>
  </section>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { mapGetters } from "vuex";

export default {
  mounted() {
    const sliderIndexSwiper = new swiper.default(".slider-index .swiper", {
      modules: [swiper.Navigation, swiper.Pagination, swiper.Autoplay],
      loop: true,
      autoplayDisableOnInteraction: false,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 1,
      autoHeight: true,
      watchSlidesProgress: true,
      scrollbar: false,
      on: {
        sliderMove: this.sliderMove,
        slideChangeTransitionStart: this.slideChangeTransitionStart,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        renderBullet: function (index, className) {
          return (
            '<span class="' +
            className +
            '">' +
            '<span class="swiper-pagination-bar"></span>' +
            '<span class="swiper-pagination-progress"></span>' +
            "</span>"
          );
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    //console.log(555555, 'aos is initing')
    AOS.init({
      once: true,
    });
  },
  methods: {
    sliderMove() {
      document
        .querySelectorAll(".swiper-slide-next .slider-index__media")
        .forEach((val) => {
          // val.style.display = 'none'
          // val.classList.remove("aos-init", "aos-animate");
          // AOS.init({
          // 	once: true
          // })
          // val.style.display = 'block'
        });
      document
        .querySelectorAll(".swiper-slide-next .slider-index__circle")
        .forEach((val) => {
          val.style.display = "none";
          val.classList.remove("aos-init", "aos-animate");
          val.style.display = "block";
          val.classList.add("aos-init", "aos-animate");
        });
      AOS.init();
    },
    slideChangeTransitionStart() {
      // document.querySelectorAll('.swiper-slide-active .slider-index__media').forEach((val) => {
      // 	val.style.display = 'none'
      // 	val.classList.remove("aos-init");
      // 	val.style.display = 'block'
      // })
      // document.querySelectorAll('.swiper-slide-next .slider-index__circle').forEach((val) => {
      // 	val.style.display = 'none'
      // 	val.classList.remove("aos-init");
      // 	val.style.display = 'block'
      // })
      // AOS.refreshHard()
    },
  },
  computed: {
    ...mapGetters({
      settings: "settings/settings/settings",
      isMoscow: 'isMoscow'
    }),
    slides() {
      let europeSlide = {
        id: 12,
        heading: "Автомобили из Европы на carro.ru",
        content: "Бесплатная доставка, особые условия по автокредиту",
        link: "/europe"
      }
      let slides = [
        // {
        //   id: 11,
        //   heading: "Новогодняя акция от carro.ru",
        //   content: "Зимняя резина и ОСАГО в подарок до 15 января при оставлении заявки на сайте!",
        //   link: "/credit",
        // },
        // {
        //   id: 13,
        //   heading: "ЧЕРНАЯ ПЯТНИЦА",
        //   content: " Скидки на все автомобили с 20.11 до 26.11",
        //   link: "/credit"
        // },
        {
          id: 6,
          heading: `Супер-автокредит от ${this.settings.credit_percent} годовых`,
          content:
            `Скидка ${this.settings.sale_credit} ₽, одобрение по паспорту и В/У, взнос от 0%`,
          link: "/credit",
        },
        {
          id: 7,
          heading: " Читайте наш Telegram-канал",
          content: "Последние поступления, акции, новости",
          telegram: true,
        },
        {
          id: 8,
          heading: "Обменяй авто по Trade-In",
          content: `Выгода ${this.settings.sale_tradein} ₽, рыночная цена, оформление 30 мин.`,
          link: "/exchange",
        },
        {
          id: 1,
          heading: "Рассрочка 0% от Совкомбанка",
          content: "Успей купить авто на выгодных условиях",
          link: "/rassrochka",
        },
        {
          id: 2,
          heading: "Автокредит ВТБ",
          content: "Лучшие условия для клиентов carro.ru",
          link: "/credit/vtb",
        },
        {
          id: 3,
          heading: "Рассрочка от Сбера и Драйв-Клик",
          content: "Лучшие условия для клиентов carro.ru",
          link: "/rassrochka",
        },
        {
          id: 4,
          heading: "Заморозили цены и ставки",
          content: "Успей купить автомобиль по старой цене",
          link: "/credit",
        },
        {
          id: 5,
          heading: "2-й комплект резины в подарок",
          content: "При покупке автомобиля в кредит",
          link: "/credit",
        },
      ]
      if (this.isMoscow) {
        slides.splice(1, 0, europeSlide)
      }
      return slides
    },
  },
};
</script>
