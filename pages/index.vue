<template>
	<main class="page-main">
		<div class="grid grid--container">
			<h1 class="visually-hidden">{{ pageTitle }}</h1>
			<div class="page-main__promo grid__col-8">
				<LazyHydrate when-visible>
					<slider-index />
				</LazyHydrate>
				<LazyHydrate when-visible>
					<stories />
				</LazyHydrate>
			</div>
			<LazyHydrate when-visible>
				<form-index />
			</LazyHydrate>
			<LazyHydrate when-visible>
				<catalog-list-index />
			</LazyHydrate>
			<LazyHydrate never>
				<featured />
			</LazyHydrate>
			<LazyHydrate never v-if="showBlog">
				<blog index />
			</LazyHydrate>
			<LazyHydrate never>
				<video-about />
			</LazyHydrate>
		</div>
	</main>
</template>
<script>
import seoTags from "@/mixins/seoTags";
import LazyHydrate from 'vue-lazy-hydration';
import {mapGetters} from "vuex";

export default {
	components: {LazyHydrate},
	mixins: [seoTags],
	computed: {
		...mapGetters({
			showBlog: 'showBlog'
		})
	},
	mounted() {
		setTimeout(function () {
			window.scrollTo(0, -100);
		}, 1);
	},
}
</script>
