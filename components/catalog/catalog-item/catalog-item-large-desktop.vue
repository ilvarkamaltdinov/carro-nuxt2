<template>
	<article class="catalog__item catalog__item--desktop-l grid__col-8">
		<catalog-item-swiper :slider-id="offer.external_id" :images="offer.images"/>
		<div class="catalog__info-wrap">
			<div class="catalog__info">
				<catalog-item-title :offer="offer" />
				<catalog-item-price :offer="offer" />
			</div>
			<div class="catalog__tech">
				<rating />
				<catalog-item-tech-list :offer="offer" />
			</div>
		</div>
		<catalog-item-buttons :offer="offer"/>
	</article>
</template>
<script>
import filters from "~/mixins/filters";
import AOS from "aos";

export default {
	mixins: [filters],
	props: {
		offer: {
			type: Object,
			default: () => {
			}
		}
	}
}
</script>