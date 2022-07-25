<template>
	<div class="swiper-slide">
		<a v-if="slide.target" :href="slide.link" :target="slide.target" class="slider-index__item">
			<div class="slider-index__media-wrap">
				<div class="slider-index__media">
					<picture>
						<source type="image/webp"
						        :data-srcset="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@1x.webp`)} 1x, ${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@2x.webp`)} 2x`" />
						<source media="(min-width: 768px)"
						        :data-srcset="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@1x.png`)} 1x, ${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@2x.png`)} 2x`" />
						<img class="slider-index__media slider-index__media--element lazyload"
						     :data-src="require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@2x.png`)"
						     alt=""
						     data-aos="fade-up"
						     data-aos-duration="750"
						     data-aos-easing="ease-in-out" />
					</picture>
					<picture>
						<source type="image/webp"
						        :data-srcset="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@1x.webp`)} 1x, ${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@2x.webp`)} 2x`" />
						<source media="(min-width: 768px)"
						        :data-srcset="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@1x.png`)} 1x, ${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@2x.png`)} 2x`" />
						<img class="slider-index__media slider-index__media--car lazyload"
						     :data-src="require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@2x.png`)"
						     alt=""
						     data-aos="fade-right"
						     data-aos-duration=" 750"
						     data-aos-easing="ease-in-out"
						     data-aos-mirror="true" />
					</picture>
				</div>
			</div>
			<div class="slider-index__text-wrap">
				<div class="slider-index__circle"
				     data-aos="fade-up-left"
				     data-aos-duration="750"
				     data-aos-easing="ease-in-out"
				     data-aos-mirror="true"></div>
				<div class="slider-index__text">
					<div class="slider-index__heading">{{ slide.heading }}</div>
					<div class="slider-index__content">{{ slide.content }}</div>
				</div>
			</div>
		</a>
		<nuxt-link v-else :to="slide.link" class="slider-index__item">
			<div class="slider-index__media-wrap">
				<div class="slider-index__media">
					<picture>
						<source type="image/webp"
						        :data-srcset="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@1x.webp`)} 1x, ${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@2x.webp`)} 2x`" />
						<source media="(min-width: 768px)"
						        :data-srcset="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@1x.png`)} 1x, ${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@2x.png`)} 2x`" />
						<img class="slider-index__media slider-index__media--element lazyload"
						     :data-src="require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@2x.png`)"
						     alt=""
						     data-aos="fade-up"
						     data-aos-duration="750"
						     data-aos-easing="ease-in-out" />
					</picture>
					<picture>
						<source type="image/webp"
						        :data-srcset="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@1x.webp`)} 1x, ${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@2x.webp`)} 2x`" />
						<source media="(min-width: 768px)"
						        :data-srcset="`${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@1x.png`)} 1x, ${require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@2x.png`)} 2x`" />
						<img class="slider-index__media slider-index__media--car lazyload"
						     :data-src="require(`~/assets/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@2x.png`)"
						     alt=""
						     data-aos="fade-right"
						     data-aos-duration=" 750"
						     data-aos-easing="ease-in-out"
						     data-aos-mirror="true" />
					</picture>
				</div>
			</div>
			<div class="slider-index__text-wrap">
				<div class="slider-index__circle"
				     data-aos="fade-up-left"
				     data-aos-duration="750"
				     data-aos-easing="ease-in-out"
				     data-aos-mirror="true"></div>
				<div class="slider-index__text">
					<div class="slider-index__heading">{{ slide.heading }}</div>
					<div class="slider-index__content">{{ slide.content }}</div>
				</div>
			</div>
		</nuxt-link>
	</div>
</template>
<script>
export default {
	props: {
		slide: Object
	}
}
</script>