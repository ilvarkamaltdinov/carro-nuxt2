<template>
	<div class="blog__wrap grid__col-12">
		<h2 class="heading heading--h2" v-if="!index">{{ title }}</h2>
		<ul class="blog__list">
			<li class="blog__item"
			    :class="currentClass(index)"
			    v-for="(item, index) in list"
			    :key="item.id">
				<nuxt-link :to="item.url"
				           class="blog__link">
					<div class="blog__item-info">
						<div class="blog__date">{{ item.createdAt }}</div>
						<div class="blog__views">{{ item.views }} {{
								declension({
									count: Number(item.views),
									one: 'просмотр',
									few: 'просмотра',
									many: 'просмотров'
								})
						                         }}
						</div>
					</div>
					<div class="blog__item-text">
						<h3 class="blog__item-title">{{ item.page_title }}</h3>
					</div>
					<picture-component v-if="item.image_preview" classes="blog__img lazyload"
					                   :small="item.image_preview.thumb"
					                   :small-webp="item.image_preview.thumb_webp"
					                   :big="item.image_preview.small"
					                   :big-webp="item.image_preview.small_webp" />
				</nuxt-link>
			</li>
		</ul>
		<button-typical @click="$router.push(url)"
		                text="Показать больше"
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
		list: Array,
		index: Boolean
	},
	methods: {
		currentClass(index) {
			return this.classes[index]
		}
	}
}
</script>