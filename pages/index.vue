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
const SliderIndex = () => import('@/components/slider-index/slider-index')
const Stories = () => import('@/components/stories/stories')
const FormIndex = () => import('@/components/form/form-index')
const CatalogListIndex = () => import('@/components/catalog/catalog-list/catalog-list-index')
const VideoAbout = () => import('@/components/video/video-about')

export default {
	mixins: [seoTags],
	components: {SliderIndex, Stories, FormIndex, CatalogListIndex, VideoAbout},
	mounted() {
		setTimeout(function () {
			window.scrollTo(0, -100);
		}, 1);
	},
}
</script>
