<template>
	<div class="car__info grid__col-6" v-if="offer">
		<div class="car__info-tabs">
			<tabs-list-tech />
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
								{{ offer.gearbox.title }}
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
								{{ offer.driveType.title  }}
							</div>
						</li>
						<!--TODO Цвет в карточке авто-->
						<!--<li class="car__tech-item">-->
						<!--	<div class="car__tech-icon-wrap">-->
						<!--		<svg-icon class="car__tech-icon"-->
						<!--		          name="icon-color" />-->
						<!--	</div>-->
						<!--	<div class="car__tech-content">-->
						<!--		Белый-->
						<!--	</div>-->
						<!--</li>-->
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-owners" />
							</div>
							<div class="car__tech-content">
								{{offer.owner.title}}
							</div>
						</li>
					</ul>
				</div>
				<div v-if="equipment_group_list.length" class="swiper-slide car__info-group car__info-group--options">
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
						<div v-if="index === 0" class="features__group" v-for="(group, index) in equipment_group_list" :key="group.title">
							<h3 class="heading heading--h3">{{group.title}}</h3>
							<ul class="features__list">
								<li class="features__item" v-for="value in group.values" :key="value">
									{{value}}
								</li>
							</ul>
						</div>
					</div>
					<button-typical @click="moreInfo(offer)" text="Показать больше" class="button--show"/>
				</div>
				<div class="swiper-slide car__info-group car__info-group--options">
					<div class="heading-group">
						<div class="heading-group__wrap">
							<h2 class="heading heading--h2">
								Информация о дилере
							</h2>
							<span class="heading-group__label">
								Автоцентр «АвтоГрадъ»
							</span>
						</div>
						<rating-dealer />
					</div>
					<div class="car__info-options features">
						<div class="features__group">
							<h3 class="heading heading--h3">Адрес:</h3>
							<ul class="features__list">
								<li class="features__item">г. Москва, Варшавское шоссе, д. 170Е</li>
								<li class="features__item">м. Аннино</li>
							</ul>
						</div>
						<div class="features__group">
							<h3 class="heading heading--h3">Телефон:</h3>
							<ul class="features__list">
								<li class="features__item">
									<a href="tel:+78007002211">+7 (800) 700-22-11</a>
								</li>
							</ul>
						</div>
						<div class="features__group">
							<h3 class="heading heading--h3">Режим работы:</h3>
							<ul class="features__list">
								<li class="features__item">c 9:00 до 21:00 без выходных</li>
							</ul>
						</div>
						<button-typical text="Подробнее о дилере" class="button--show"/>
					</div>
				</div>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>
<script>
import filters from "~/mixins/filters";
import {mapActions, mapGetters} from "vuex";
import ButtonTypical from "@/components/button/button-typical";
export default {
	components: {ButtonTypical},
	mixins: [filters],
	computed:{
		...mapGetters({
			offer: 'catalog/catalog-cars/offer'
		}),
		equipment_group_list(){
			return this.offer.equipment_groups
		}
		
	},
	methods:{
		...mapActions({
			openModal: 'modal/modal-main/openModal'
		}),
		moreInfo(carInfo){
			let payload = {
				modal_data: carInfo,
				modal_component: 'modal-complect',
				modal_title: 'Комплектация',
				modal_sub_title: carInfo.name
			}
			this.openModal(payload)
		},
	}
}
</script>