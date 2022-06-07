<template>
	<section class="page-main__catalog catalog catalog--slider grid__col-12">
		<heading-h2>Автомобили в наличии</heading-h2>
		<tabs-list />
		<div class="catalog__list">
			<div class="swiper swiper--catalog">
				<div class="swiper-wrapper">
					<catalog-item is-slide
					              :info="item"
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
			</div>
			<button class="swiper-button swiper-button-prev">
				<svg-icon class="swiper-button__icon"
				          name="icon-arrow"></svg-icon>
			</button>
			<button class="swiper-button swiper-button-next">
				<svg-icon class="swiper-button__icon"
				          name="icon-arrow"></svg-icon>
			</button>
		</div>
		<button-more @click.native="toCatalog">Все автомобили</button-more>
	</section>

</template>
<script>
import catalog from "~/mixins/catalog/catalog-index";
import catalogButtonEvents from "~/mixins/catalog/catalog-button-events";
export default {
	mixins: [catalog, catalogButtonEvents]
}
</script>