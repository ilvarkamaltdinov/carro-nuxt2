<template>
	<main class="page-main">
		<div class="grid grid--container">
			<h1 class="visually-hidden">{{ pageTitle }}</h1>
			<div class="page-main__promo grid__col-8">
				<slider-index />
				<stories />
			</div>
			<form-index />
			<catalog-list-index />
			<featured />
			<video-about />
		</div>
	</main>
</template>
<script>
import seoTags from "@/mixins/seoTags";

export default {
	mixins: [seoTags],
	mounted() {
		setTimeout(function () {
			window.scrollTo(0, -100);
		}, 1);
	},
}
</script>
