<template>
	<div :class="{'swiper-slide':isSlide, 'grid__col-4':gridFour}">
		<article v-show="inline" class="catalog__item catalog__item--desktop-l catalog__item--desktop-form">
			<div class="catalog__img">
				<div class="swiper">
					<div class="swiper-wrapper">
						<catalog-item-img v-for="item in info.images"
						                  :key="item.thumb"
						                  :img="item.thumb" />
					</div>
				</div>
				<div class="swiper__buttons-wrapper">
					<button class="swiper-button swiper-button-next">
						<svg-icon class="swiper-button__icon" name="arrow"/>
					</button>
					<button class="swiper-button swiper-button-prev">
						<svg-icon class="swiper-button__icon" name="arrow"/>
					</button>
				</div>
			</div>
			<div class="catalog__info-wrap">
				<div class="catalog__info">
					<div class="catalog__title-wrap">
						<div class="catalog__title">
							<h3 class="catalog__heading">
								<a href=""
								   class="catalog__title-link">
									<span class="catalog__title"> Land Rover Range Rover Sport</span>
									<span class="catalog__year"> 2020</span>
								</a>
							</h3>
						</div>
						<vin/>
					</div>
					<div class="catalog__price-wrap">
						<div class="catalog__price">
							1 565 000 ₽
						</div>
						<div class="catalog__oldprice">
							1 585 000 ₽
						</div>
						<div class="catalog__credit-price">
							В кредит от 32 500 / мес.
						</div>
					</div>
				</div>
				<div class="catalog__tech">
					<rating/>
					<ul class="catalog__tech-list">
						<li class="catalog__tech-item">132 000 км</li>
						<li class="catalog__tech-item">5.5 л / 388 л.с.</li>
						<li class="catalog__tech-item">АКПП</li>
						<li class="catalog__tech-item">Бензин</li>
						<li class="catalog__tech-item">3 владельца</li>
						<li class="catalog__tech-item">Передний</li>
					</ul>
				</div>
			</div>
		</article>
		<article v-show="!inline"
		         class="catalog__item catalog__item--vertical"
		         :class="{'grid__col-4':!isSlide}">
			<div class="catalog__info">
				<div class="catalog__title-wrap">
					<div class="catalog__title">
						<h3 class="catalog__heading">
							<a class="catalog__title-link"
							   href="/">
								<span class="catalog__title">{{ info.mark.title }} {{ info.folder.title }}</span>
								<span class="catalog__year">{{ info.year }}</span>
							</a>
						</h3>
					</div>
					<vin />
				</div>
				<div class="catalog__price-wrap">
					<div class="catalog__price">{{ info.price | toCurrency }}</div>
					<div class="catalog__oldprice">1 585 000 ₽</div>
					<div class="catalog__credit-price">В кредит от {{ info.price | access_acredit }} / мес.</div>
				</div>
			</div>
			<div class="catalog__img">
				<catalog-item-hover-slider :images="info.images" />
				<a class="catalog__call-card"
				   href="tel:+74995191324">
					<div class="catalog__call">
						<svg-icon class="catalog__call-icon"
						          name="icon-call"></svg-icon>
						<span class="catalog__call-title">Бесплатный звонок</span>
						<span class="catalog__call-dealer">Автоцентр Prime</span>
					</div>
					<div class="catalog__call-img">
						<picture>
							<source type="image/webp"
							        media="(min-width: 768px)"
							        srcset="~/static/img/catalog/catalog-car-1@1x.webp 1x, ~/static/img/catalog/catalog-car-1@2x.webp 2x" />
							<source media="(min-width: 768px)"
							        srcset="~/static/img/catalog/catalog-car-1@1x.jpg 1x, ~/static/img/catalog/catalog-car-1@2x.jpg 2x" />
							<img class="lazyload"
							     src="~/static/img/catalog/catalog-car-1@1x.jpg"
							     srcset="~/static/img/catalog/catalog-car-1@2x.jpg 2x"
							     alt="" />
						</picture>
					</div>
				</a>
			</div>
			<div class="catalog__tech ">
				<rating />
				<ul class="catalog__tech-list">
					<li class="catalog__tech-item">{{ info.run | run }} км</li>
					<li class="catalog__tech-item">{{ info.engine_volume | engineVolume }} / {{ info.engine_power }} л.с.</li>
					<li class="catalog__tech-item">{{ info.gearbox.title }}</li>
					<li class="catalog__tech-item">{{ info.engineType.title }}</li>
					<li class="catalog__tech-item">{{ info.owner.title }}</li>
					<li class="catalog__tech-item">{{ info.driveType.title }}</li>
				</ul>
			</div>
			<slot name=buttons></slot>
		</article>
	</div>
</template>
<script>
import {mapMutations} from 'vuex'
import filters from "~/mixins/filters";

export default {
	mixins: [filters],
	data() {
		return {
			modalChooseCar: {
				component: 'modal-callback',
				visibility: true
			},
		}
	},
	props: {
		inline: {
			type: Boolean,
			default: false
		},
		info: {
			type: Object,
			default: () => {
			}
		},
		isSlide: {
			type: Boolean,
			default: false
		},
		gridFour: {
			type: Boolean,
			default: false
		},
		hasButtons: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		...mapMutations({
			setModalMain: 'modal/modal-main/SET_MODAL_MAIN'
		}),
		callback(info) {
			console.log(info)
			this.setModalMain(this.modalChooseCar)
		}
	},
	// async mounted() {
	// 	console.log(11111111)
	// 	if(this.info){
	// 		console.log(222222222)
	// 		const sliderCatalogImg = new swiper.default('.catalog__img .swiper', {
	// 			modules: [ swiper.Navigation, swiper.Autoplay ],
	// 			loop: true,
	// 			autoplayDisableOnInteraction: false,
	// 			autoplay: false,
	// 			slidesPerView: "auto",
	// 			centeredSlides: false,
	// 			watchSlidesProgress: true,
	// 			spaceBetween: 16,
	// 			navigation: {
	// 				nextEl: '.catalog__img .swiper-button-next',
	// 				prevEl: '.catalog__img .swiper-button-prev',
	// 			},
	// 		});
	// 	}
	// }
}
</script>