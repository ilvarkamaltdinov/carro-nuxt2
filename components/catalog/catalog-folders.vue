<template>
  <div class="grid__col-12">
    <div class="tabs" v-if="folders.length">
      <ul
        class="tabs__list tabs__list--all tabs__list--all-models"
        ref="tabs"
        @scroll="scrollFolders"
      >
        <li
          role="presentation"
          v-for="(tab, index) in sortedFoldersByCount"
          :key="tab.slug"
          :ref="'tab' + index"
          :class="{ 'tabs__item--active': tab.slug === $route.params.model }"
          class="tabs__item"
        >
          <nuxt-link
            class="tabs__link"
            :to="`/${$route.params.category}/${$route.params.mark}/${tab.slug}`"
          >
            <span class="tabs__text">
              {{ tab.title }}
            </span>

            <span class="tabs__count">
              {{ tab.offers_count }}
            </span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import filters from "@/mixins/filters";
import sortBy from 'lodash/sortBy'
export default {
  watch: {
    isAll() {
      this.$nextTick(() => {
        this.$refs.tabs.scrollLeft = 0;
      });
    },
  },
  props: {
    folders: Array,
    isAll: Boolean,
  },
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
  computed: {
    // showLimit(){
    // 	return this.sortedFoldersByCount.length < 8 ? this.sortedFoldersByCount.length : 8
    // 	// return this.isAll ? this.folders.length : 8
    // },
    sortedFoldersByCount() {
      let sorted = sortBy(this.folders, [
        (folder) => {
          return folder.offers_count;
        },
      ]).reverse();
      if (this.$device.isMobile) {
        sorted = sorted.slice(0, this.isAll ? sorted.length : 8);
      }
      return sorted;
    },
  },

  beforeDestroy() {
    localStorage.generationsTabsLeft = 0;
  },
  methods: {
    scrollFolders() {
      localStorage.foldersTabsLeft = event.target.scrollLeft;
    },
  },
};
</script>
