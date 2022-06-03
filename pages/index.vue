<template>
	<main class="page-main">
		<div class="grid grid--container">
			<h1 class="visually-hidden">Автомобили с пробегом в Москве</h1>
			<div class="page-main__promo grid__col-8">
				<slider-index />
				<stories-desktop />
			</div>
			<form-index />
			<catalog-index-desktop />
			<featured />
			<video-about />
		</div>
	</main>

</template>
<script>
import CatalogIndexDesktop from "../components/catalog/catalog-index-desktop";
export default {
	components: {CatalogIndexDesktop}
}
</script>