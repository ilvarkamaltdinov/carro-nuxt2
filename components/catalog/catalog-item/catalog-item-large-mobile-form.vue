<template>
	<article class="catalog__item catalog__item--form">
    <catalog-item-title :is-form="isForm"
                        @click="linkClick"
                        :url="currentUrl"
                        :offer="offer" />
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

export default {
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
