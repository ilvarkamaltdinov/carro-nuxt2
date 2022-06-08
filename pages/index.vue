<template>
	<main class="page-main">
		<div class="grid grid--container">
			<h1 class="visually-hidden">Автомобили с пробегом в Москве</h1>
			<div class="page-main__promo grid__col-8">
				<slider-index />
				<component :is="storiesComponent" />
			</div>
			<form-index />
			<component :is="catalogComponent" />
			<featured />
			<video-about />
		</div>
		<transition name="fade">
			<div v-if="storiesModal" class="stories__modal_wrapper-wrap">
				<div @click="setStoriesModal(false)" class="overlay"></div>
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
			catalogComponent: 'catalog-index'
		}
	},
	computed: {
		...mapGetters({
			storiesModal: 'stories/stories/storiesModal'
		})
	},
	methods: {
		...mapMutations({
			setStoriesModal: 'stories/stories/SET_STORIES_MODAL'
		}),
		setMobile() {
			this.storiesComponent = 'stories'
			this.catalogComponent = 'catalog-index'
		},
		setDesktop() {
			this.storiesComponent = 'stories-desktop'
			this.catalogComponent = 'catalog-index-desktop'
		}
	},
	mounted() {
		window.innerWidth < 1200 ?
				this.setMobile()
				: this.setDesktop()
		
	}
}
</script>
<style>
.stories__modal_wrapper-wrap{
	z-index: 300;
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}
</style>