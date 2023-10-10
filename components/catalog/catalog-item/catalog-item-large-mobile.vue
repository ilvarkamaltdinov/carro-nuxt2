<template>
	<article class="catalog__item catalog__item--vertical grid__col-4">
		<div class="catalog__offer">
			<catalog-item-title :is-form="isForm"
			                    @click="linkClick"
			                    :url="currentUrl"
			                    :offer="offer" />
			<catalog-item-price :isNew="isNew" :category-enum="offer.category_enum" :is-stock="offer.is_stock" :vin="offer.vin" :price="offer.price" :price-old="offer.price_old"/>
		</div>
		<div class="catalog__img">
			<catalog-item-img @click="linkClick"
			                  :url="currentUrl"
			                  :is-form="isForm"
			                  :img="img.small_webp"
			                  v-for="img in offer.images"
			                  :key="img.small_webp" />
			<catalog-item-call-card
					v-if="!isForm"
          @click="callback"
					:dealer="offer.dealer"
					:image="offer.images[0].small_webp" />
		</div>
		<div class="catalog__tech"
		     :class="{'catalog__tech--no-buttons':!hasButtons}">
			<rating-car v-tippy="{
							content:`<div class='tippy__text'>Рейтинг автомобиля</div>`,
							animation:'scale',
							arrow: true,
					}"
			            @click="ratingClick"
			            :rating="offer.rating" />
			<catalog-item-tech-list :offer="offer" />
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
import {mapActions} from "vuex";
import cardClick from "@/mixins/cardClick";

export default {
	mixins: [filters, cardClick],
  computed: {
    isNew() {
      return this.offer.run <= 100 && this.offer.owner.number <= 1;
    }
  },
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
	},
  methods: {
    ...mapActions({
      openModal: 'modal/modal-main/openModal',
    }),
    async callback() {
      let payload = {
        modal_data: this.offer,
        modal_component: 'modal-callback',
        modal_title: 'Остались вопросы? Перезвоним Вам!',
        modal_sub_title: this.offer.name
      }
      await this.openModal(payload)
    },
  }
}
</script>
