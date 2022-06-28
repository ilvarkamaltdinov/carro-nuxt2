<template>
	<li class="stories__item"
	    @click="setStoriesModal(true)">
		<div class="stories__figure">
			<nuxt-picture quality="100" :imgAttrs="{class:'stories__img'}" :src="`img/stories/stories-${index}@2x.png`"/>
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