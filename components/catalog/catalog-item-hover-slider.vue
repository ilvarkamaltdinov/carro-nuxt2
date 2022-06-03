<template>
  <div class="top_slider">
    <div class="mobile_slider" v-if="isMobile">
      <img v-for="(img,  index) in photos" :key="index" :src="img.thumb"  alt="image"/>
    </div>
    <div class="catalog__car_img" v-else>
      <img :src="coverSrc" @load="onImgLoad" :class="class_name"  alt=""/>
      <div class="brazzers__button-container" @mouseleave="mouseLeave">
        <div
          class="brazzers__button"
          v-if="photos && photos.length > 0 && index <= limit"
          v-for="(photo, index) in photos"
          :key="index"
          @mouseover="mouseOver(photo.thumb)"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
 props: {
    images: {
        type: Array,
        default:()=> []
    },
  },
  data() {
    return{
      class_name: 'load',
      isLoaded: false,
      limit: 10,
      photos: this.images,
      forceCoverPhoto: null,
      placeholderUrl: this.images[0].thumb
    }
  },
  computed: {
    isMobile() {
      if (process.client) {
        return !window.matchMedia("(min-width: 576px)").matches;
      }
    },
   coverSrc() {
    return this.forceCoverPhoto
      ? this.forceCoverPhoto
      : this.photos.length > 0
        ? this.photos[0].thumb
        : this.placeholderUrl;
   }
  },
   methods:{
    onImgLoad () {
      this.class_name = 'loaded';
    },
    mouseOver(photo) {
      if(this.forceCoverPhoto !== null){
        this.class_name = 'load';
      }

      this.forceCoverPhoto = photo;
    },
    mouseLeave() {
      this.forceCoverPhoto = null;
      this.class_name = 'loaded';
    }
  }
}
</script>