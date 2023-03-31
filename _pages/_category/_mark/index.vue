<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<catalog-used :page-title="pageTitle" />
		<div class="grid grid--container">
			<section class="page-main__text text grid__col-12"
			         v-if="siteText">
				<div class="text__wrap grid__col-12">
					<div class="text__figure figure">
						<picture-component
								v-if="$route.params.mark"
								classes="text__figure-img lazyload"
								:small="`${require(`~/assets/img/marks-figure/figure-${$route.params.mark}@1x.png`)}`"
								:small-webp="`${require(`~/assets/img/marks-figure/figure-${$route.params.mark}@1x.webp`)}`"
								:big="`${require(`~/assets/img/marks-figure/figure-${$route.params.mark}@2x.png`)}`"
								:big-webp="`${require(`~/assets/img/marks-figure/figure-${$route.params.mark}@2x.webp`)}`" />
					</div>
					<div class="text__content"
					     v-html="domParse(siteText.body)">
					</div>
				</div>
			</section>
		</div>
	</main>
</template>
<script>

import seoTags from "@/mixins/seoTags";
import jsonld from "@/mixins/jsonld";
import categoryValidate from "@/mixins/categoryValidate";
import domParser from "@/mixins/domParser";

export default {
	mixins: [seoTags, jsonld, categoryValidate, domParser],
	mounted() {
		setTimeout(function () {
			window.scrollTo(0, -100);
		}, 1);
		localStorage.removeItem('foldersTabsLeft');
	}
}
</script>
