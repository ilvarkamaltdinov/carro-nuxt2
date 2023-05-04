<template>
	<article class="catalog__item catalog__item--small">
		<div class="catalog__img">
			<a :href="!isForm ? currentUrl: ''"
			   @click.prevent="linkClick"
			   class="catalog__img-link"
         title="Подробнее об автомобиле"
         aria-label="Подробнее об автомобиле">
				<img :data-src="offer.images[0].small_webp" class="ls-is-cached lazyload">
			</a>
		</div>
		<div class="catalog__info">
			<catalog-item-title :is-form="isForm"
			                    :small="true"
			                    :url="currentUrl"
			                    @click="linkClick"
			                    :offer="offer" />
			<catalog-item-price :vin="offer.vin" :price="offer.price" :price-old="offer.price_old" :is-stock="offer.is_stock"/>
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
