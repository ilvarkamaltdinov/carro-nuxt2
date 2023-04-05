<template>
  <div class="swiper swiper--article">
    <div class="swiper-wrapper">
      <a class="swiper-slide"
         v-for="(img, index) in images"
         :data-src="`${img.src}`"
         data-fancybox="gallery"
         :key="index">
        <img :data-src="`${img.src}`"
             class="lazyload"
             alt="slider-image">
      </a>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import {Fancybox} from "@fancyapps/ui";

export default {
  props: {
    images: Array
  },
  mounted() {
    Fancybox.bind("[data-fancybox]", {
      Hash: false,
      contentClick: "iterateZoom",
      Images: {
        protected: true,
      }
    })
    const sliderIndexSwiper = new swiper.default(".swiper--article", {
      modules: [swiper.Navigation, swiper.Pagination, swiper.Autoplay],
      loop: false,
      autoplayDisableOnInteraction: false,
      autoplay: true,
      slidesPerView: 1,
      autoHeight: true,
      watchSlidesProgress: true,
      scrollbar: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets"
      },
    });
  },
}
</script>
