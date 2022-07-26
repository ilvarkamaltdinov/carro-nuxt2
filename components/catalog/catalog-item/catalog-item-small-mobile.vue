<template>
	<article class="catalog__item catalog__item--small">
		<div class="catalog__img">
			<a :href="!isForm ? currentUrl: ''"
			   @click.prevent="linkClick"
			   class="catalog__img-link">
				<picture>
					<source type="image/webp"
					        media="(min-width: 768px)"
					        :data-srcset="offer.images[0].thumb">
					<source media="(min-width: 768px)"
					        :data-srcset="offer.images[0].thumb">
					<img class="ls-is-cached lazyload"
					     :data-src="offer.images[0].thumb"
					     :data-srcset="offer.images[0].thumb"
					     alt="">
				</picture>
			</a>
		</div>
		<div class="catalog__info">
			<catalog-item-title :is-form="isForm"
			                    :small="true"
			                    :url="currentUrl"
			                    @click="linkClick"
			                    :offer="offer" />
			<catalog-item-price :price="offer.price" />
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