<template>
	<section class="page-main__catalog catalog grid__col-12">
		<heading-h2>Похожие автомобили</heading-h2>
		<div class="catalog__list grid grid__col-12">
			<catalog-item v-for="i in carsCount" :key="i"/>
		</div>
		<button-typical text="Все автомобили" class="button--link button--more"/>
	</section>
</template>
<script>
export default {
	data() {
		return {
			carsCount: 6
		}
	}
}
</script>