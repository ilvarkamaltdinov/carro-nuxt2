<template>
	<section class="page-main__catalog catalog grid__col-12">
		<heading-h2>Автомобили в наличии</heading-h2>
		<tabs-list />
		<div class="catalog__list grid">
			<catalog-item v-for="i in carsCount"
			              :key="i" />
		</div>
		<button-more>Все автомобили</button-more>
	</section>
</template>
<script>
export default {
	components: {},
	
	data() {
		return {
			carsCount: 8,
		}
	}
}
</script>