<template>
	
	<section class="page-main__catalog catalog">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">Land Rover Range Rover Sport с пробегом</h1>
				<span class="heading-group__label">242 автомобиля в наличии</span>
			</div>
		</div>
		<filter-desktop />
		<div class="catalog__list">
			<catalog-item v-for="i in carsCount"
			              :key="i" />
		</div>
		<button-more>Показать больше</button-more>
	</section>
</template>
<script>
export default {
	data() {
		return {
			carsCount: 8
		}
	}
}
</script>