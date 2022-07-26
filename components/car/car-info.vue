<template>
	<div class="car__info grid__col-6"
	     v-if="offer">
		<div class="car__info-tabs">
			<div class="tabs">
				<ul class="tabs__list"
				    id="tabs"
				    role="tablist">
					<li role="presentation"
					    class="tabs__item"
					    :ref="'tab' + index"
					    v-for="(tab, index) in tabs"
					    :key="index+1"
					    v-show="tab.showButton"
					    :class="{'tabs__item--active': activeTab === index+1}">
						<button @click="tabClick(index+1)"
						        class="tabs__link"
						        role="tab"
						        data-toggle="tab">
							{{ tab.title }}
						</button>
					</li>
				</ul>
			</div>
		</div>
		<div class="swiper swiper--car-info">
			<div class="car__info-groups swiper-wrapper">
				<div class="swiper-slide car__info-group car__info-group--tech">
					<h2 class="visually-hidden">Характеристики автомобиля</h2>
					<ul class="car__tech-list">
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-year" />
							</div>
							<div class="car__tech-content">
								{{ offer.year }}
							</div>
						</li>
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-gear" />
							</div>
							<div class="car__tech-content">
								{{ currentGerabox }}
							</div>
						</li>
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-mileage" />
							</div>
							<div class="car__tech-content">
								{{ offer.run | run }} км
							</div>
						</li>
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-volume" />
							</div>
							<div class="car__tech-content">
								{{ offer.engine_volume }} л
							</div>
						</li>
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-engine" />
							</div>
							<div class="car__tech-content">
								{{ offer.engine_power }} л.с.
							</div>
						</li>
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-fuel" />
							</div>
							<div class="car__tech-content">
								{{ offer.engineType.title }}
							</div>
						</li>
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-form" />
							</div>
							<div class="car__tech-content">
								{{ offer.bodyType.title }}
							</div>
						</li>
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-wd" />
							</div>
							<div class="car__tech-content">
								{{ offer.driveType.title }}
							</div>
						</li>
						<li class="car__tech-item car__tech-item--mobile">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-color" />
							</div>
							<div class="car__tech-content">
								Белый
							</div>
						</li>
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-owners" />
							</div>
							<div class="car__tech-content">
								{{ offer.owner.title }}
							</div>
						</li>
					</ul>
				</div>
				<div v-if="equipment_group_list.length"
				     class="swiper-slide car__info-group car__info-group--options">
					<div class="heading-group">
						<div class="heading-group__wrap">
							<h2 class="heading heading--h2">
								Комплектация
							</h2>
							<span class="heading-group__label">
								Active Plus
							</span>
						</div>
					</div>
					<div class="car__info-options features">
						<div v-if="index === 0"
						     class="features__group"
						     v-for="(group, index) in equipment_group_list"
						     :key="group.title">
							<h3 class="heading heading--h3">{{ group.title }}</h3>
							<ul class="features__list">
								<li class="features__item"
								    v-for="value in group.values"
								    :key="value">
									{{ value }}
								</li>
							</ul>
						</div>
					</div>
					<button-typical @click="moreInfoComplectation(offer)"
					                text="Показать больше"
					                class="button--show" />
				</div>
				<div class="swiper-slide car__info-group car__info-group--options">
					<div class="heading-group">
						<div class="heading-group__wrap">
							<h2 class="heading heading--h2">
								Информация о дилере
							</h2>
							<span class="heading-group__label">
								Автоцентр «{{ offer.dealer.title }}»
							</span>
						</div>
						<tippy arrow>
							<div class="tippy__text">
								Рейтинг дилера
							</div>
							<template v-slot:trigger>
								<rating :rating="offer.dealer.rating"
								        :max="5" />
							</template>
						</tippy>

					</div>
					<div class="car__info-options features">
						<div class="features__group">
							<h3 class="heading heading--h3">Адрес:</h3>
							<ul class="features__list">
								<li class="features__item">{{ offer.dealer.address }}</li>
								<li class="features__item">м. {{ offer.dealer.metro }}</li>
							</ul>
						</div>
						<div class="features__group">
							<h3 class="heading heading--h3">Телефон:</h3>
							<ul class="features__list">
								<li class="features__item">
									<a href="tel:+78007002211">{{ offer.dealer.phone }}</a>
								</li>
							</ul>
						</div>
						<div class="features__group">
							<h3 class="heading heading--h3">Режим работы:</h3>
							<ul class="features__list">
								<li class="features__item">{{ offer.dealer.schedule }}</li>
							</ul>
						</div>
						<button-typical @click="moreInfoDiller(offer.dealer.slug)"
						                text="Подробнее о дилере"
						                class="button--show" />
					</div>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>
<script>
import filters from "~/mixins/filters";
import {mapActions, mapGetters} from "vuex";
import dealer from '@/apollo/queries/dealer/dealer.gql'

export default {
	data() {
		return {
			carInfoSwiper: null,
			activeTab: 1,
			gearbox: {
				'mechanical': 'МКПП',
				'cvt': 'Вариатор',
				'robot': 'Робот',
				'automatic': 'АКПП',
			}
		}
	},
	mixins: [filters],
	computed: {
		...mapGetters({
			offer: 'catalog/catalog-cars/offer'
		}),
		tabs() {
			let tabs = [
				{
					title: 'Характеристики',
					showButton: true
				},
				{
					title: 'Комплектация',
					showButton: !!this.equipment_group_list.length
				},
				{
					title: 'О дилере',
					showButton: true
				}
			]
			return tabs.filter(item => item.showButton)
		},
		currentGerabox() {
			// return this.gearbox[this.offer.gearbox.name] || this.offer.gearbox.title
			return this.offer.gearbox.title_short_rus
		},
		equipment_group_list() {
			return this.offer.equipment_groups
		}
	},
	methods: {
		...mapActions({
			openModal: 'modal/modal-main/openModal',
			request: 'request'
		}),
		scrollTo(el) {
			const elLeft = el.offsetLeft + el.offsetWidth;
			const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth;
			// check if element not in view
			if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
				el.parentNode.scrollLeft = elLeft - elParentLeft;
			} else{
				el.parentNode.scrollLeft = 0;
			}
		},
		tabClick(tab) {
			this.activeTab = tab
			this.carInfoSwiper.slideTo(tab)
		},
		async moreInfoDiller(dealerSlug) {
			try {
				let dealerData = await this.request({query: dealer, variables: {slug: dealerSlug}})
				dealerData = dealerData.data.dealer
				let payload = {
					modal_data: dealerData,
					modal_component: 'modal-dealer',
					modal_title: `Автоцентр «${dealerData.title}»`,
					modal_sub_title: `${dealerData.short_description}`
				}
				await this.openModal(payload)
			} catch (e) {
				console.log(e)
			}
		},
		moreInfoComplectation(carInfo) {
			let payload = {
				modal_data: carInfo,
				modal_component: 'modal-complect',
				modal_title: 'Комплектация',
				modal_sub_title: carInfo.name
			}
			this.openModal(payload)
		},
	},
	mounted() {
		if (this.$device.isMobile) {
			this.carInfoSwiper = new swiper.default('.swiper--car-info.swiper', {
				modules: [swiper.Navigation, swiper.Pagination, swiper.Autoplay],
				loop: true,
				autoplayDisableOnInteraction: false,
				autoplay: false,
				autoHeight: true,
				on: {
					slideChange: (event) => {
						if (event.activeIndex === 4) {
							this.activeTab = 1
						} else if (event.activeIndex === 0) {
							this.activeTab = 3
						} else {
							this.activeTab = event.activeIndex
						}
						this.scrollTo(this.$refs['tab' + (this.activeTab - 1)][0])
						// console.log(this.$refs['tab' + (this.activeTab - 1)][0].parentNode.offsetLeft)
					}
				},
				spaceBetween: 24,
				pagination: {
					el: '.car__info .swiper-pagination',
					type: 'bullets',
				},
			})
		}
	}
}
</script>
