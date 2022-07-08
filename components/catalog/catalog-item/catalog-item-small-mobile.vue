<template>
	<article class="catalog__item catalog__item--small">
		<div class="catalog__img">
			<a class="catalog__img-link"
			   href="">
				<!--<picture>-->
				<!--	<source type="image/webp"-->
				<!--	        media="(min-width: 768px)"-->
				<!--	        :srcset="offer.images[0].thumb">-->
				<!--	<source media="(min-width: 768px)"-->
				<!--	        :srcset="offer.images[0].thumb">-->
				<!--	<img class=" ls-is-cached lazyloaded"-->
				<!--	     :src="offer.images[0].thumb"-->
				<!--	     :srcset="offer.images[0].thumb"-->
				<!--	     alt="">-->
				<!--</picture>-->
				<img class=" ls-is-cached lazyloaded"
				     :src="offer.images[0].thumb"
				     :srcset="offer.images[0].thumb"
				     alt="">
			</a>
		</div>
		<div class="catalog__info">
			<catalog-item-title :offer="offer" />
			<catalog-item-price :offer="offer" />
			<div class="catalog__tech"
			     :class="{'catalog__tech--no-buttons':!hasButtons}">
				<catalog-item-tech-list small
				                        :offer="offer" />
			</div>
		</div>
		<catalog-item-buttons :choose="choose"
		                      v-if="hasButtons"
		                      :offer="offer" />
	</article>
</template>
<script>
import filters from "~/mixins/filters";

export default {
	mixins: [filters],
	props: {
		offer: {
			type: Object,
			default: () => {
			}
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