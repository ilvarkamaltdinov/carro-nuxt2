<template>
  <div class="grid grid--container">
    <section class="page-main__catalog catalog grid">
      <div class="benefits grid__col-12 benefits--mobile">
        <ul class="benefits__list">
          <li class="benefits__item">
            <div class="benefits__link">
              <img src="~/assets/img/autoteka.svg" alt="Эмблема Автотеки — carro.ru" height="16" width="16" class="benefits__icon icon"/>
              <div class="benefits__text">
                Все автомобили
                <div class="benefits__text-strong">
                  Проверены в Автотеке
                </div>
              </div>
            </div>
          </li>
          <li class="benefits__item">
            <nuxt-link to="/credit" class="benefits__link">
              <svg-icon class="benefits__icon icon" name="icon-credit-card"/>
              <div class="benefits__text">
                Скидка до 150 000 ₽
                <div class="benefits__text-strong">
                  при покупке авто в кредит
                </div>
              </div>
            </nuxt-link>
          </li>
          <li class="benefits__item">
            <div class="benefits__link">
              <svg-icon class="benefits__icon icon" name="icon-insurance"/>
              <div class="benefits__text">
                ОСАГО в подарок
                <div class="benefits__text-strong">
                  за заявку на автокредит
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="heading-group heading-group--h1 grid__col-12">
        <div class="heading-group__wrap">
          <h1 class="heading heading--h1">{{ pageTitle }}</h1>
          <catalog-marks v-if="showMarks" />
        </div>
      </div>
      <catalog-offers v-if="offers" />
      <catalog-folders v-if="showFolderTabs" />
      <div class="grid__col-4" v-if="!$device.isMobile">
        <filter-desktop />
      </div>
      <div class="grid__col-8">
        <filter-sort />
        <component
          :is="
            $device.isMobile
              ? 'catalog-list-used-mobile'
              : 'catalog-list-used-desktop'
          "
        />
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import capitalizeFirstLetter from "~/mixins/capitalizeFirstLetter";
import benefits from '../benefits/benefits.vue';

export default {
  components: { benefits },
  mixins: [capitalizeFirstLetter],
  mounted() {
    this.$nextTick(() => {
      if (
        localStorage.foldersTabsLeft &&
        this.$device.isMobile &&
        this.$refs.tabs
      ) {
        this.$refs.tabs.scrollLeft = Number(localStorage.foldersTabsLeft);
      }
    });
  },
  props: {
    pageTitle: String,
    offers: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      chosen: "filters/filters/chosen",
      folders: "folders/folders/folders",
    }),
    showMarks() {
      return this.$route.params.category === "used" && !this.$route.params.mark;
    },
    showFolderTabs() {
      return (
        this.chosen?.mark?.length === 1 &&
        !this.$route.query.folder_slug_array &&
        !this.showMarks
      );
    },
  },
  methods: {
    scrollFolders() {
      localStorage.foldersTabsLeft = event.target.scrollLeft;
    },
  },
};
</script>
