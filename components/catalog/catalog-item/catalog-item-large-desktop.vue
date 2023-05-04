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
						<catalog-item-price :category-enum="offer.category_enum" :is-stock="offer.is_stock" :vin="offer.vin" :price="offer.price" :price-old="offer.price_old" />
					</div>
				</div>
			</div>
			<div class="catalog__tech">
				<rating-car v-tippy="{
							content:`<div class='tippy__text'>Рейтинг автомобиля</div>`,
							animation:'scale',
							arrow: true,
					}"
				            @click="ratingClick"
				            :rating="offer.rating" />
				<catalog-item-tech-list :offer="offer" />
			</div>
		</div>
		<catalog-item-buttons :choose="choose"
		                      :is-form="isForm"
		                      :long="true"
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
