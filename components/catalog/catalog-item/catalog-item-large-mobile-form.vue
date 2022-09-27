<template>
	<article class="catalog__item catalog__item--form">
		<div class="catalog__offer">
			<catalog-item-price :vin="offer.vin" :price="offer.price" />
		</div>
		<div class="catalog__img">
			<catalog-item-img @click="linkClick"
			                  :url="currentUrl"
			                  :has-fancy="true"
			                  :img="img.small_webp"
			                  :original="img.original"
			                  v-for="img in offer.images"
			                  :key="img.small_webp" />
			<catalog-item-call-card v-if="!isForm"
			                        :dealer="offer.dealer"
			                        :image="offer.images[0].small_webp" />
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
	</article>
</template>
<script>
import filters from "~/mixins/filters";
import {mapActions, mapMutations} from "vuex";
import cardClick from "@/mixins/cardClick";

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
