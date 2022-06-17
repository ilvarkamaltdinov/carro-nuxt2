<template>
	<article class="catalog__item catalog__item--vertical grid__col-4">
		<div class="catalog__offer">
			<catalog-item-title :offer="offer"/>
			<catalog-item-price :offer="offer"/>
		</div>
		<div class="catalog__img">
			<catalog-item-img v-for="img in offer.images" :key="img.thumb" :img="img.thumb"/>
		</div>
		<div class="catalog__tech">
			<rating />
			<catalog-item-tech-list :offer="offer"/>
		</div>
		<catalog-item-buttons :offer="offer" />
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
		}
	}
}
</script>