<template>
	<main class="page-main">
		<div class="grid grid--container">
			<h1 class="visually-hidden">{{pageTitle}}</h1>
			<div class="page-main__promo grid__col-8">
				<slider-index />
				<stories/>
			</div>
			<form-index />
			<catalog-list-index/>
			<featured />
			<video-about />
		</div>
	</main>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";
import seoTags from "@/mixins/seoTags";
export default {
	mixins:[seoTags]
}
</script>
<style>
.stories__modal_wrapper-wrap {
	z-index: 300;
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}
</style>