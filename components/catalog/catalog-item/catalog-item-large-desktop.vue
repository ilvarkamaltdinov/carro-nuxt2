<template>
	<article class="catalog__item catalog__item--desktop-l grid__col-8">
		<catalog-item-swiper :slider-id="offer.external_id"
		                     :images="offer.images" />
		<div class="catalog__info-wrap" :class="{'catalog__info-wrap--no-buttons':!hasButtons}">
			<div class="catalog__info">
				<catalog-item-title :offer="offer" />
				<catalog-item-price :offer="offer" />
			</div>
			<div class="catalog__tech">
				<rating :max="100" :rating="100" />
				<catalog-item-tech-list :offer="offer" />
			</div>
		</div>
		<catalog-item-buttons :choose="choose"
		                      v-if="hasButtons"
		                      :offer="offer" />
	</article>
</template>
<script>
import filters from "~/mixins/filters";
import AOS from "aos";

export default {
	mixins: [filters],
	props: {
		choose: {
			type: Boolean,
			default: false
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