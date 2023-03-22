<template>
  <div class="car__info grid__col-6" v-if="offer">
    <div class="car__info-tabs">
      <div class="tabs">
        <ul class="tabs__list" id="tabs" role="tablist">
          <li
            role="presentation"
            class="tabs__item"
            :ref="'tab' + index"
            v-for="(tab, index) in tabs"
            :key="index + 1"
            :id="tab.id"
            v-show="tab.showButton"
            :class="{ 'tabs__item--active': activeTab === index + 1 }"
          >
            <button
              @click="tabClick(index + 1)"
              class="tabs__link"
              role="tab"
              data-toggle="tab"
            >
              {{ tab.title }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="swiper swiper--car-info">
      <div class="car__info-groups swiper-wrapper">
        <car-tech
          v-if="showTech"
          :offer="offer"
          class="swiper-slide car__info-group--tech"
        />
        <car-terms
          v-if="showTerms && $device.isMobile"
          class="swiper-slide car__info-group--options"
        />
        <car-complectation
          v-if="
            !$device.isMobile &&
            showComplectation &&
            equipment_group_list.length
          "
          :offer="offer"
          class="swiper-slide car__info-group--options"
        />
        <car-description
          v-if="offer.description && !$device.isMobile"
          :offer="offer"
          :page-title="pageTitle"
        />
        <car-dealer
          v-if="!$device.isMobile"
          :offer="offer"
          class="swiper-slide car__info-group--options"
        />
      </div>
      <!-- <div class="swiper-pagination"></div> -->
    </div>
  </div>
</template>
<script>
import filters from "~/mixins/filters";
import { mapActions, mapGetters } from "vuex";
import dealer from "@/apollo/queries/dealer/dealer.gql";

export default {
  data() {
    return {
      carInfoSwiper: null,
      activeTab: 1,
      gearbox: {
        mechanical: "МКПП",
        cvt: "Вариатор",
        robot: "Робот",
        automatic: "АКПП",
      },
    };
  },
  mixins: [filters],
  props: {
    pageTitle: String
  },
  computed: {
    ...mapGetters({
      offer: "catalog/catalog-cars/offer",
    }),
    tabs() {
      let tabs = [
        {
          title: "Характеристики",
          id: "tab-1",
          showButton: true,
        },
        {
          title: "Преимущества",
          id: "tab-2",
          showButton: !!this.equipment_group_list.length,
        },
      ];
      return tabs.filter((item) => item.showButton);
    },
    currentGerabox() {
      // return this.gearbox[this.offer.gearbox.name] || this.offer.gearbox.title
      return this.offer.gearbox.title_short_rus;
    },
    equipment_group_list() {
      return this.offer.equipment_groups;
    },

    showTech() {
      if (this.$device.isMobile) {
        return this.activeTab === 1;
      } else {
        return true;
      }
    },
    showTerms() {
      if (this.$device.isMobile) {
        return this.activeTab === 2;
      } else {
        return true;
      }
    },
    showComplectation() {
      if (this.$device.isMobile) {
        return this.activeTab === 2;
      } else {
        return true;
      }
    },
  },
  methods: {
    ...mapActions({
      openModal: "modal/modal-main/openModal",
      request: "request",
    }),
    // scrollTo(el) {
    // 	const elLeft = el.offsetLeft + el.offsetWidth;
    // 	const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth;
    // 	// check if element not in view
    // 	if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
    // 		el.parentNode.scrollLeft = elLeft - elParentLeft;
    // 	} else {
    // 		el.parentNode.scrollLeft = 0;
    // 	}
    // },
    changeTab(tab) {
      this.activeTab = tab + 1;
    },
    async tabClick(tab) {
      this.activeTab = tab;
      // await this.carInfoSwiper.slideTo(tab - 1)
    },
    async moreInfoDiller(dealerSlug) {
      try {
        let dealerData = await this.request({
          query: dealer,
          variables: { slug: dealerSlug },
        });
        dealerData = dealerData.data.dealer;
        let payload = {
          modal_data: dealerData,
          modal_component: "modal-dealer",
          modal_title: `Автоцентр «${dealerData.title}»`,
          modal_sub_title: `${dealerData.short_description}`,
        };
        await this.openModal(payload);
      } catch (e) {
        console.log(e);
      }
    },
    async moreInfoComplectation(carInfo) {
      let payload = {
        modal_data: carInfo,
        modal_component: "modal-complect",
        modal_title: "Комплектация",
        modal_sub_title: carInfo.name,
      };
      await this.openModal(payload);
    },
  },
  // mounted() {
  // 	if (this.$device.isMobile) {
  // 		this.carInfoSwiper = new swiper.default('.swiper--car-info.swiper', {
  // 			modules: [swiper.Navigation, swiper.Pagination, swiper.Autoplay],
  // 			autoplayDisableOnInteraction: false,
  // 			autoplay: false,
  // 			autoHeight: true,
  // 			on: {
  // 				slideChange: (event) => {
  // 					this.changeTab(event.activeIndex)
  // 					this.$scrollTo(`#tab-${this.activeTab}`, 500, {
  // 						container: ".tabs__list",
  // 						x: true,
  // 						offset: -16,
  // 						y: false
  // 					})
  // 				}
  // 			},
  // 			spaceBetween: 24,
  // 			pagination: {
  // 				el: '.car__info .swiper-pagination',
  // 				type: 'bullets',
  // 			},
  // 		})
  // 	}
  // }
};
</script>
