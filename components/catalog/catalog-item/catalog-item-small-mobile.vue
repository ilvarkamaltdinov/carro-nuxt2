<template>
	<article class="catalog__item catalog__item--small">
		<div class="catalog__img">
			<a :href="!isForm ? currentUrl: ''"
			   @click.prevent="linkClick"
			   class="catalog__img-link">
				<img :data-src="offer.images[0].small_webp" class="ls-is-cached lazyload">
			</a>
		</div>
		<div class="catalog__info">
			<catalog-item-title :is-form="isForm"
			                    :small="true"
			                    :url="currentUrl"
			                    @click="linkClick"
			                    :offer="offer" />
			<catalog-item-price :vin="offer.vin" :price="offer.price" />
			<div class="catalog__tech"
			     :class="{'catalog__tech--no-buttons':!hasButtons}">
				<catalog-item-tech-list small
				                        :offer="offer" />
			</div>
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
		offer: {
			type: Object,
			default: () => {
			}
		},
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
		}
	}
}
</script>