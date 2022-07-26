<template>
	<article class="catalog__item catalog__item--vertical grid__col-4">
		<div class="catalog__offer">
			<catalog-item-title :has-links="hasLinks" @click="linkClick" :url="currentUrl" :offer="offer" />
			<catalog-item-price :price="offer.price" />
		</div>
		<div class="catalog__img">
			<catalog-item-img @click="linkClick"
			                  :url="currentUrl"
			                  :img="img.thumb" v-for="img in offer.images"
			                  :key="img.thumb" />
			<catalog-item-call-card :dealer="offer.dealer" :image="offer.images[0].thumb"/>
		</div>
		<div class="catalog__tech"
		     :class="{'catalog__tech--no-buttons':!hasButtons}">
			<tippy arrow>
				<div class="tippy__text">
					Рейтинг автомобиля
				</div>
				<template v-slot:trigger>
					<rating-car @click="ratingClick"
					            :rating="offer.rating"/>
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
import {mapActions, mapMutations} from "vuex";
import cardClick from "@/mixins/cardClick";

export default {
	mixins: [filters, cardClick],
	props: {
		offer: {
			type: Object,
			default: () => {
			}
		},
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
		}
	}
}
</script>
