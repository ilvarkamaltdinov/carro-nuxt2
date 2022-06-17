<template>
	<article class="catalog__item catalog__item--vertical"
	         :class="{'grid__col-4':!slide, 'swiper-slide':slide}">
		<catalog-item-hover-slider :images="offer.images" />
		<div class="catalog__info">
			<catalog-item-title :offer="offer" />
			<catalog-item-price :offer="offer" />
		</div>
		<div class="catalog__tech">
			<rating />
			<catalog-item-tech-list :offer="offer" />
		</div>
		<catalog-item-buttons v-if="hasButtons"
		                      :offer="offer" />
	</article>
</template>
<script>
import filters from "~/mixins/filters";

export default {
	mixins: [filters],
	props: {
		hasButtons: {
			type: Boolean,
			default: true
		},
		slide: {
			type: Boolean,
			default: false
		},
		offer: {
			type: Object,
			default: () => {
			}
		}
	}
}
</script>