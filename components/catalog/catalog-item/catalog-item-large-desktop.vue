<template>
	<article class="catalog__item catalog__item--desktop-l grid__col-8">
		<catalog-item-swiper :dealer="offer.dealer"
		                     :images="offer.images"
		                     :has-fancy="hasFancy"
		                     :is-form="isForm"
		                     :url="currentUrl"
		                     @click="linkClick"
		                     :slider-id="offer.external_id" />
		<div class="catalog__info-wrap"
		     :class="{'catalog__info-wrap--no-buttons':!hasButtons}">
      <!--<div class="catalog__vin vin" v-if="offer.vin"  v-tippy="{-->
			<!--	content:`<div class='tippy__text'>VIN-номер проверен на предмет нахождения в розыске, угоне, залоге, использования в такси, попадания в ДТП, соответствия количества владельцев.</div>`,-->
			<!--	animation:'scale',-->
			<!--	arrow: true,-->
			<!--}">-->
      <!--  <svg-icon name="icon-check"/>-->
      <!--  VIN-->
      <!--</div>-->
			<div class="catalog__info">
				<div class="catalog__title-wrap">
					<div class="catalog__info">
						<catalog-item-title @click="linkClick"
						                    :is-form="isForm"
						                    :url="currentUrl"
						                    :offer="offer" />
						<catalog-item-price :category-enum="offer.category_enum" :is-stock="offer.is_stock" :isNew="isNew" :vin="offer.vin" :price="offer.price" :price-old="offer.price_old" />
					</div>
				</div>
			</div>
<!--			<div class="catalog__tech">-->
<!--&lt;!&ndash;				<rating-car v-tippy="{&ndash;&gt;-->
<!--&lt;!&ndash;							content:`<div class='tippy__text'>Рейтинг автомобиля</div>`,&ndash;&gt;-->
<!--&lt;!&ndash;							animation:'scale',&ndash;&gt;-->
<!--&lt;!&ndash;							arrow: true,&ndash;&gt;-->
<!--&lt;!&ndash;					}"&ndash;&gt;-->
<!--&lt;!&ndash;				            @click="ratingClick"&ndash;&gt;-->
<!--&lt;!&ndash;				            :rating="offer.rating" />&ndash;&gt;-->
<!--&lt;!&ndash;				<catalog-item-tech-list :offer="offer" />&ndash;&gt;-->
<!--			</div>-->
		</div>
		<catalog-item-buttons :choose="choose"
		                      :is-form="isForm"
		                      :long="true"
		                      v-if="hasButtons"
		                      :offer="offer"
                          :isNew="currentStock" />
	</article>
</template>
<script>
import filters from "~/mixins/filters";
import cardClick from "~/mixins/cardClick";

export default {
	mixins: [filters, cardClick],
  computed: {
    isNew() {
      return this.offer.run <= 100 && this.offer.owner.number <= 1;
    }
  },
	props: {
		hasFancy:{
			type: Boolean,
			default: false
		},
		isForm: {
			type: Boolean,
			default: false
		},
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
