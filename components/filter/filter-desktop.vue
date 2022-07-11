<template>
	<section class="catalog__filter catalog__filter--aside">
		<div class="heading-group heading-group--filter">
			<div class="heading-group__wrap">
				<h2 class="heading heading--h2">Фильтр</h2>
				<span class="heading-group__label">{{ filteredTotal | toCurrencyValue }} автомобиля в наличии</span>
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
	mixins:[filters],
	computed: {
		...mapGetters({
			filteredTotal: 'filters/filters/filteredTotal'
		})
	}
}
</script>