<template>
	<main class="page-main">
		<div class="grid grid--container">
			<h1 class="visually-hidden">{{ pageTitle }}</h1>
			<div class="page-main__promo grid__col-8">
				<lazy-slider-index />
				<lazy-stories />
			</div>
			<lazy-form-index />
			<lazy-catalog-list-index />
			<lazy-featured />
			<lazy-video-about />
		</div>
	</main>
</template>
<script>
import seoTags from "@/mixins/seoTags";
import SliderIndex from '@/components/slider-index/slider-index'
import Stories from '@/components/stories/stories'
import FormIndex from '@/components/form/form-index'
import CatalogListIndex from '@/components/catalog/catalog-list/catalog-list-index'
import VideoAbout from '@/components/video/video-about'

export default {
	mixins: [seoTags],
	components: {SliderIndex, Stories, FormIndex, CatalogListIndex, },
	mounted() {
		setTimeout(function () {
			window.scrollTo(0, -100);
		}, 1);
	},
}
</script>
