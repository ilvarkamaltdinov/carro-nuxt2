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
			<catalog-item-price :category-enum="offer.category_enum" :is-stock="offer.is_stock" :vin="offer.vin" :price="offer.price" :isNew="isNew" :price-old="offer.price_old"/>
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

export default {
	mixins: [filters, cardClick],
  computed: {
    isNew() {
      return this.offer.run <= 100 && this.offer.owner.number <= 1;
    }
  },
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
