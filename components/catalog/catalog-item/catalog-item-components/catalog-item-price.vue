<template>
	<div class="catalog__price-wrap">
		<div class="catalog__price">{{ price | toCurrency }}</div>
		<div class="catalog__price-old">1 585 000 ₽</div>
		<div class="catalog__credit-price">{{ price | access_acredit }} / мес.</div>

		<div v-if="categoryEnum !== 'europe' && !hideStock">
			<div class="stock stock--true"
			     v-if="isStock"
			     v-tippy="{
				content:`<div class='tippy__text'>Ввиду ограниченной площади автоцентра многие автомобили находятся на центральной стоянке. Доставка в автоцентр бесплатная в день обращения. Подробности уточняйте по телефону.</div>`,
				animation:'scale',
				arrow: true,
			}">
				Центральная стоянка
			</div>
			<div class="stock stock--false"
			     v-else
			     v-tippy="{
				content:`<div class='tippy__text'>В наличии в автоцентре.</div>`,
				animation:'scale',
				arrow: true,
			}">
				В наличии
			</div>
		</div>
		<div v-else-if="categoryEnum === 'europe'">
			<div class="stock stock--true"
			     v-tippy="{
				content:`<div class='tippy__text'>Доставим этот автомобиль из Европы за 14 дней.</div>`,
				animation:'scale',
				arrow: true,
			}">
				Из Европы
			</div>
		</div>

	</div>
</template>
<script>
import filters from "~/mixins/filters";

export default {
	mixins: [filters],
	props: {
		isForm: {
			type: Boolean,
			default: false
		},
		categoryEnum: String,
		isStock: Boolean,
		hideStock: {
			type: Boolean,
			default: false
		},
		vin: String,
		price: Number
	}
}
</script>
