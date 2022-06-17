<template>
	<main class="page-main">
		<div class="grid grid--container">
			<h1 class="visually-hidden">Автомобили с пробегом в Москве</h1>
			<div class="page-main__promo grid__col-8">
				<slider-index />
				<component :is="isMobile ? 'stories' : 'stories-desktop'" />
			</div>
			<form-index />
			<component :is="isMobile ? 'catalog-list-index-mobile' : 'catalog-list-index-desktop'" />
			<featured />
			<video-about />
		</div>
		<transition name="fade">
			<div v-if="storiesModal"
			     class="stories__modal_wrapper-wrap">
				<div @click="setStoriesModal(false)"
				     class="overlay"></div>
				<stories-modal />
			</div>
		</transition>
	</main>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";

export default {
	data() {
		return {
			storiesComponent: 'stories',
		}
	},
	computed: {
		...mapGetters({
			storiesModal: 'stories/stories/storiesModal',
			isMobile: 'isMobile'
		})
	},
	methods: {
		...mapMutations({
			setStoriesModal: 'stories/stories/SET_STORIES_MODAL'
		}),
	}
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