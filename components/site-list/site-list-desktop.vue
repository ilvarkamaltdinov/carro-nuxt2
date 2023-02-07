<template>
  <ul class="main-nav__list site-list site-list--desktop">
    <li class="site-list__item" v-for="item in nav" :key="item.link">
      <nuxt-link
        @click.native="closeModals"
        :to="item.link"
        :title="item.title"
        class="site-list__link"
      >
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      nav: [
        {
          title: "Рассрочка",
          link: "/rassrochka",
        },
        {
          title: "Автокредит",
          link: "/credit",
        },
        {
          title: "Trade-In",
          link: "/exchange",
        },
        {
          title: "В наличии",
          link: "/used",
        },
        {
          title: "О портале",
          link: "/about",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      showReviews: "showReviews",
      isMoscow: "isMoscow"
    }),
  },
  mounted() {
    this.showReviews
      ? this.nav.splice(4, 0, {
          title: "Отзывы",
          link: "/reviews-dealers",
        })
      : this.nav.splice(4, 0, {
          title: "Контакты",
          link: "/contacts",
        });
    // this.isMoscow
    //   ? this.nav.splice(1, 0, {
    //     title: "Из Европы",
    //     link: "/europe",
    //   })
    //   : '';
  },
  methods: {
    ...mapMutations({
      setModalMenu: "modal/modal-menu/setModalMenu",
      setModalMarks: "modal/modal-marks/setModalMarks",
      setModalSearch: "modal/modal-search/setModalSearch",
    }),
    closeModals() {
      this.setModalMenu(false);
      this.setModalMarks(false);
      this.setModalSearch(false);
    },
  },
};
</script>
