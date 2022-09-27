<template>
	<article class="catalog__item catalog__item--vertical"
	         :class="{'grid__col-4':!slide, 'swiper-slide':slide}">
		<catalog-item-hover-slider @click="linkClick"
		                           :is-form="isForm"
		                           :url="currentUrl"
		                           :offer="offer" />
		<div class="catalog__info">
			<catalog-item-title @click="linkClick"
			                    :is-form="isForm"
			                    :url="currentUrl"
			                    :offer="offer" />
			<catalog-item-price :vin="offer.vin"
			                    :price="offer.price" />
		</div>
		<div class="catalog__tech"
		     :class="{'catalog__tech--no-buttons':!hasButtons}">
			<rating-car v-tippy="{
				content:`<div class='tippy__text'>Рейтинг автомобиля</div>`,
				animation:'scale',
				arrow: true,
			}"
			            @click="ratingClick"
			            :rating="offer.rating" />
			<catalog-item-tech-list :offer="offer" />
		</div>
		<catalog-item-buttons
				:is-form="isForm"
				:choose="choose"
				v-if="hasButtons"
				:offer="offer" />
	</article>
</template>
<script>
import filters from "~/mixins/filters";
import cardClick from "~/mixins/cardClick";

const ratingCar = () => import('@/components/rating/rating-car')
const catalogItemButtons = () => import('@/components/catalog/catalog-item/catalog-item-components/catalog-item-buttons')
const catalogItemHoverSlider = () => import('@/components/catalog/catalog-item/catalog-item-components/catalog-item-hover-slider')
const catalogItemPrice = () => import('@/components/catalog/catalog-item/catalog-item-components/catalog-item-price')
const catalogItemTitle = () => import('@/components/catalog/catalog-item/catalog-item-components/catalog-item-title')
const catalogItemTechList = () => import('@/components/catalog/catalog-item/catalog-item-components/catalog-item-tech-list')
export default {
	components: {
		ratingCar, catalogItemButtons, catalogItemHoverSlider, catalogItemPrice,
		catalogItemTitle, catalogItemTechList
	},
	mixins: [filters, cardClick],
	props: {
		isForm: {
			type: Boolean,
			default: false
		},
		choose: {
			type: Boolean,
			default: false
		},
		hasButtons: {
			type: Boolean,
			default: true
		},
		slide: {
			type: Boolean,
			default: false
		},
		offer: Object
	}
}
</script>
