<template>
	<div>
		<div class="modal__options">
			<img class="modal__logo"
			     :src="require(`~/assets/img/dealers/logos/logo-${modalData.slug}.svg`)"
			     loading="lazy"
			     alt="" />
			<div class="modal__buttons">
				<button-callback />
				<button-call-modal :phone="modalData.phone" />
			</div>
		</div>
		<div class="modal__wrap">
			<div class="features">
				<div class="features__group">
					<h3 class="heading heading--h3">Контактные данные:</h3>
					<ul class="features__list">
						<li class="features__item">
							<div class="features__item-type">Город:</div>
							<div class="features__item-content">{{ modalData.city }}</div>
						</li>
						<li class="features__item">
							<div class="features__item-type">Адрес:</div>
							<div class="features__item-content">{{ modalData.address }}</div>
						</li>
						<li class="features__item">
							<div class="features__item-type">Метро:</div>
							<div class="features__item-content">{{ modalData.metro }}</div>
						</li>
						<li class="features__item">
							<div class="features__item-type">Режим работы:</div>
							<div class="features__item-content">{{ modalData.schedule }}</div>
						</li>
						<li class="features__item">
							<div class="features__item-type">Телефон автоцентра:</div>
							<div class="features__item-content">
								<a class="features__link"
								   href="tel:+78007002211">{{ modalData.phone }}
								</a>
							</div>
						</li>
					</ul>
				</div>
				<div class="features__group">
					<h3 class="heading heading--h3">Об автоцентре:</h3>
					<p class="features__item">{{ modalData.description }}
					</p>
				</div>
			</div>
			<div class="modal__dealer-photos">
				<h3 class="heading heading--h3">Фотографии автоцентра:</h3>
				<div class="dealer">
					<div class="swiper swiper--dealer dealer__slider"
					     v-if="modalData.images">
						<div class="swiper-wrapper">
							<div class="dealer__item swiper-slide"
							     v-for="(item, index) in modalData.images"
							     :key="index">
								<div class="dealer__link">
									<picture>
										<source type="image/webp"
										        media="(min-width: 768px)"
										        :data-srcset="`${item.small_webp} 1x, ${item.medium_webp} 2x`" />
										<img class="dealer__img lazyload"
										     :data-src="item.small"
										     :data-srcset="`${item.medium} 2x`"
										     loading="lazy"
										     alt="" />
									</picture>
								</div>
							</div>
						</div>
					</div>
					<button class="swiper-button swiper-button-prev">
						<svg-icon class="icon swiper-button__icon"
						          name="icon-arrow" />
					</button>
					<button class="swiper-button swiper-button-next">
						<svg-icon class="icon swiper-button__icon"
						          name="icon-arrow" />
					</button>
				</div>
			</div>
			<div class="modal__dealer-map">
				<h3 class="heading heading--h3">Автоцентр на карте:</h3>
				<div class="map map--dealer">
					<map-dealer :settings="{coordinates:modalData.coordinates}" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
	mounted() {
		const sliderStories = new swiper.default('.dealer__slider.swiper', {
			modules: [swiper.Navigation, swiper.Pagination, swiper.Autoplay],
			loop: true,
			autoplayDisableOnInteraction: false,
			autoplay: true,
			slidesPerView: 1.1,
			centeredSlides: true,
			spaceBetween: 8,
			navigation: {
				nextEl: '.modal__dealer-photos .swiper-button-next',
				prevEl: '.modal__dealer-photos .swiper-button-prev',
			},
			breakpoints: {
				768: {
					spaceBetween: 24,
				}
			}
		});
	},
	computed: {
		...mapGetters({
			modalData: 'modal/modal-main/modalData'
		})
	},
}
</script>