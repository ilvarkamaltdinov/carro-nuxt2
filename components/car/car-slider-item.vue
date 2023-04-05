<template>
  <div class="slider-car__item swiper-slide">
    <div class="slider-car__link"
         @click.right.prevent
         data-fancybox="gallery"
         :data-src="img.original"
         tabindex="0">
      <picture-component :small="img.small"
                         :small-webp="img.small_webp"
                         :big="img.medium"
                         :big-webp="img.medium_webp"
                         classes="slider__car-img lazyload"/>
    </div>
  </div>
</template>
<script>
import {Fancybox} from "@fancyapps/ui";

export default {
  mounted() {
    Fancybox.bind("[data-fancybox]", {
      Hash: false,
      contentClick: "iterateZoom",
      Images: {
        protected: true,
      }
    })
  },
  props: {
    img: Object
  }
}
</script>
