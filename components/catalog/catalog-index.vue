<template>
	<section class="page-main__catalog catalog grid__col-12">
		<heading-h2>Автомобили в наличии</heading-h2>
		<tabs-list />
		<div class="catalog__list grid">
			<catalog-item :info="item"
			              :inline="false"
			              v-for="item in catalogCars"
			              :key="item.id">
				
				
				<template v-slot:buttons>
					<catalog-item-buttons :active-like="likesArray.some(id => id === String(item.id))"
					                      @creditClick="creditClick(item)"
					                      @favoriteClick="favoriteClick(item)"
					                      @callClick="callClick(item)" />
				</template>
			</catalog-item>
		</div>
		<button-more>Все автомобили</button-more>
	</section>
</template>
<script>
import catalog from "~/mixins/catalog/catalog-index";
import catalogButtonEvents from "~/mixins/catalog/catalog-button-events";

export default {
	mixins: [catalog, catalogButtonEvents]
}
</script>