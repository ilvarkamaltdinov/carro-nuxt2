<template>
  <div class="top_slider">
    <div class="mobile_slider" v-if="$device.isMobile">
	    <nuxt-picture lazy v-for="(img,  index) in photos" :key="index" :src="img.thumb"/>
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
      limit: 7,
      photos: this.images,
      forceCoverPhoto: null,
      placeholderUrl: this.images[0].thumb
    }
  },
  computed: {
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
<style lang="scss" scoped>

.catalog__car_img {
	position: relative;
	width: 100%;
	height: 100%;
}
.mobile_slider{
	display: flex;
	width: 100vw;
	overflow-x: scroll;
	img{
		height: 200px;
		width: auto;
	}
}
.brazzers__button-container {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	/*left: 0;*/
	/*background-color: red;*/
	display: flex;
}

.brazzers:not(:hover) .brazzers__button {
	opacity: 0;
}

.brazzers__button {
	position: relative;
	flex: 1;
	min-height: 7px; /* другая ширина? */
	opacity: 1;
	transition: opacity .3s;
}

.brazzers__button:after {
	position: absolute;
	bottom: 8px;
	right: 1px;
	left: 1px;
	height: 3px;
	content: "";
	background: rgba(255, 255, 255, 0.7);
	transition: background-color .3s;
}
.brazzers img.load{
	filter: blur(5px);
	transition: filter .5s;
	will-change: filter;
}
.brazzers img.loaded{
	filter: blur(0);
}
.brazzers__button:hover:after {
	background-color: red;
}
img{
	width: 100%;
	aspect-ratio: 4 / 3;
	object-fit: cover;
}
</style>