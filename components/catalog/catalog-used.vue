<template>
  <div class="grid grid--container">
    <section class="page-main__catalog catalog grid">
      <benefits catalog :benefits="benefitsCatalog"/>
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
      benefitsCatalog: "benefits/benefits",
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
