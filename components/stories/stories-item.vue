<template>
	<li class="stories__item"
	    @click="setStoriesModal(true)">
		<div class="stories__figure">
			<picture>
				<source type="image/webp"
				        media="(min-width: 768px)"
				        :srcset="'img/stories/stories-'+ index +'@1x.webp 1x, img/stories/stories-'+ index +'@2x.webp 2x'" />
				<source media="(min-width: 768px)"
				        :srcset="'img/stories/stories-'+ index +'@1x.png 1x, img/stories/stories-'+ index +'@2x.png 2x'" />
				<img class="stories__img"
				     :src="'img/stories/stories-'+ index +'@1x.png'"
				     :srcset="'img/stories/stories-'+ index +'@2x.png 2x'"
				     loading="lazy"
				     alt="" />
			</picture>
		</div>
		<div class="stories__text">
			<slot></slot>
		</div>
	</li>
</template>
<script>
import {mapMutations} from "vuex";

export default {
	methods: {
		...mapMutations({
			setStoriesModal: 'stories/stories/SET_STORIES_MODAL'
		})
	},
	props: {
		index: {
			type: Number,
			default: null
		}
	}
}
</script>