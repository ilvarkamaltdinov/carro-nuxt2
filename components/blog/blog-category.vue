<template>
	<div class="blog__wrap grid__col-12">
		<h2 class="heading heading--h2">{{ title }}</h2>
		<ul class="blog__list">
			<li class="blog__item"
			    :class="currentClass(index)"
			    v-for="(item, index) in list"
			    :key="item.id">
				<nuxt-link :to="item.url"
				           class="blog__link">
					<div class="blog__item-info">
						<div class="blog__date">{{ item.createdAt }}</div>
						<div class="blog__views">{{item.views}} {{declension({count: Number(item.views), one: 'просмотр', few: 'просмотра', many: 'просмотров'})}}</div>
					</div>
					<div class="blog__item-text">
						<h3 class="blog__item-title">{{ item.page_title }}</h3>
					</div>
					<picture>
						<source media="(min-width: 768px)"
						        type="image/webp"
						        :data-srcset="`${item.image_preview.thumb_webp} 1x, ${item.image_preview.small_webp} 2x`" />
						<source media="(min-width: 768px)"
						        :data-srcset="`${item.image_preview.thumb} 1x, ${item.image_preview.small} 2x`" />
						<img class="blog__img lazyload"
						     :data-src="item.image_preview.thumb"
						     :data-srcset="`${item.image_preview.small} 2x`"
						     :alt="item.page_title" />
					</picture>
				</nuxt-link>
			</li>
		</ul>
		<button-typical @click="$router.push(url)" text="Показать больше"
		                class="button--link button--more" />
	</div>
</template>

<script>
import declension from "@/mixins/declension";
export default {
	mixins: [declension],
	data() {
		return {
			classes: {
				'0': 'blog__item--vertical',
				'3': 'blog__item--horizontal',
			}
		}
	},
	props: {
		title: String,
		url: String,
		list: Array
	},
	methods: {
		currentClass(index) {
			return this.classes[index]
		}
	}
}
</script>