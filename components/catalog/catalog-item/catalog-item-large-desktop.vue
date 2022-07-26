<template>
	<article class="catalog__item catalog__item--desktop-l grid__col-8">
		<catalog-item-swiper :dealer="offer.dealer"
		                     :images="offer.images"
		                     :has-links="hasLinks"
		                     :url="currentUrl"
		                     @click="linkClick"
		                     :slider-id="offer.external_id" />
		<div class="catalog__info-wrap"
		     :class="{'catalog__info-wrap--no-buttons':!hasButtons}">
			<div class="catalog__info">
				<div class="catalog__title-wrap">
					<div class="catalog__info">
						<catalog-item-title @click="linkClick"
						                    :has-links="hasLinks"
						                    :url="currentUrl"
						                    :offer="offer" />
						<catalog-item-price :price="offer.price" />
					</div>
				</div>
			</div>
			<div class="catalog__tech">
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
		</div>
		<catalog-item-buttons :choose="choose"
		                      :long="true"
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
		choose: {
			type: Boolean,
			default: false
		},
		hasLinks: {
			type: Boolean,
			default: true
		},
		offer: {
			type: Object,
			default: () => {
			}
		},
		hasButtons: {
			type: Boolean,
			default: true
		},
	}
}
</script>
