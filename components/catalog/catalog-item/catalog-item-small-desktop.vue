<template>
	<article class="catalog__item catalog__item--vertical"
	         :class="{'grid__col-4':!slide, 'swiper-slide':slide}">
		<catalog-item-hover-slider @click="linkClick"
		                           :has-links="hasLinks"
		                           :url="currentUrl"
		                           :offer="offer" />
		<div class="catalog__info">
			<catalog-item-title @click="linkClick"
			                    :has-links="hasLinks"
			                    :url="currentUrl"
			                    :offer="offer" />
			<catalog-item-price :price="offer.price" />
		</div>
		<div class="catalog__tech"
		     :class="{'catalog__tech--no-buttons':!hasButtons}">
			<tippy arrow>
				<div class="tippy__text">
					Рейтинг автомобиля
				</div>
				<template v-slot:trigger>
					<rating-car @click="ratingClick"
					            :rating="offer.rating" />
				</template>
			</tippy>
			<catalog-item-tech-list :offer="offer" />
		</div>
		<catalog-item-buttons :choose="choose"
		                      v-if="hasButtons"
		                      :offer="offer" />
	</article>
</template>
<script>
import filters from "~/mixins/filters";
import cardClick from "~/mixins/cardClick";

export default {
	mixins: [filters, cardClick],
	props: {
		hasLinks: {
			type: Boolean,
			default: true
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
