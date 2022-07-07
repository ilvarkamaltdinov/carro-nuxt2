<template>
	<article class="catalog__item catalog__item--desktop-l grid__col-8">
		<catalog-item-swiper :slider-id="offer.external_id"
		                     :offer="offer" />
		<div class="catalog__info-wrap" :class="{'catalog__info-wrap--no-buttons':!hasButtons}">
			<div class="catalog__info">
				<catalog-item-title :offer="offer" />
				<catalog-item-price :offer="offer" />
			</div>
			<div class="catalog__tech">
				<rating @click="ratingClick"
				        :rating="offer.rating"
				        :max="5" />
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
import AOS from "aos";
import {mapActions} from "vuex";

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
	},
	methods: {
		...mapActions({
			openModal: 'modal/modal-main/openModal'
		}),
		ratingClick() {
			let payload = {
				modal_data: this.offer,
				modal_component: 'modal-rating',
				modal_title: ' Состояние автомобиля',
				modal_sub_title: this.offer.name
			}
			this.openModal(payload)
		}
	}
}
</script>