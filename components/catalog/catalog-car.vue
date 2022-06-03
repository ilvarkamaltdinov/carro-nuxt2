<template>
	<section class="page-main__catalog catalog grid__col-12">
		<heading-h2>Похожие автомобили</heading-h2>
		<div class="catalog__list grid grid__col-12">
			<catalog-item v-for="i in carsCount" :key="i"/>
		</div>
		<button-more/>
	</section>
</template>
<script>

import ButtonMore from "../button/button-more";

export default {
	components: {ButtonMore},
	data() {
		return {
			carsCount: 6
		}
	}
}
</script>