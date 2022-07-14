<template>
	<section class="catalog__filter catalog__filter--aside">
		<div class="heading-group heading-group--filter">
			<div class="heading-group__wrap">
				<h2 class="heading heading--h2">Фильтр</h2>
				<span class="heading-group__label">
					{{ filteredTotal | toCurrencyValue }}
					{{ declension({count: filteredTotal, one: 'автомобиль', few: 'автомобиля', many: 'автомобилей'}) }}
					в наличии
				</span>
			</div>
		</div>
		<div class="filter filter--aside">
			<filter-list />
		</div>
	</section>
</template>
<script>
import {mapGetters} from "vuex";
import filters from "@/mixins/filters";

export default {
	mixins: [filters],
	computed: {
		...mapGetters({
			filteredTotal: 'filters/filters/filteredTotal'
		})
	},
	methods: {
		declension({count, one, few, many}) {
			const isFloat = Math.round(count) !== count;
			let declension = many;
			if (isFloat) {
				declension = few;
			} else {
				const units = Math.abs(count % 10);
				const tens = Math.abs(count % 100);
				if (units === 1 && tens !== 11) {
					declension = one;
				} else if (2 <= units && units <= 4 && (tens < 10 || 20 <= tens)) {
					declension = few;
				}
			}
			return declension;
		}
	}
}
</script>