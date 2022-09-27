<template>
	<section class="page-main__stories stories"
	         :class="{'stories--desktop grid__col-8':!$device.isMobileOrTablet}">
		<h2 class="visually-hidden">Акции и спецпредложения</h2>
		<div class="skeleton skeleton--stories"
		     v-if="loading">
			<ul class="skeleton__stories">
				<li class="skeleton__item"></li>
				<li class="skeleton__item"></li>
				<li class="skeleton__item"></li>
				<li class="skeleton__item"></li>
				<li class="skeleton__item"></li>
			</ul>
		</div>
		<ul class="stories__list"
		    v-if="$device.isMobileOrTablet">
			<stories-item :story="item"
			              @click="openStories(item)"
			              v-for="item in stories"
			              :key="item.id" />
		</ul>
		<div v-else
		     class="swiper swiper--stories">
			<ul class="stories__list swiper-wrapper">
				<stories-item :story="item"
				              @click="openStories(item)"
				              v-for="item in stories"
				              :key="item.id" />
			</ul>
		</div>
		<button v-if="!$device.isMobileOrTablet"
		        ref="prev"
		        class="swiper-button swiper-button-prev">
			<svg-icon class="swiper-button__icon"
			          name="icon-arrow" />
		</button>
		<button v-if="!$device.isMobileOrTablet"
		        ref="next"
		        class="swiper-button swiper-button-next">
			<svg-icon class="swiper-button__icon"
			          name="icon-arrow" />
		</button>
	</section>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import stories from "@/apollo/queries/stories/stories";

const storiesItem = () => import('@/components/stories/stories-item')
export default {
	components: {storiesItem},
	data() {
		return {
			loading: true,
			stories: []
		}
	},
	computed: {
		...mapGetters({
			storiesModal: 'stories/stories/storiesModal'
		})
	},
	async mounted() {
		this.loading = true
		let response = await this.request({query: stories, variables: {}})
		this.stories = response.data.stories
		this.loading = false
		const sliderStories = new swiper.default('.stories--desktop .swiper', {
			modules: [swiper.Navigation, swiper.Autoplay],
			autoplayDisableOnInteraction: false,
			spaceBetween: 16,
			autoplay: false,
			watchSlidesProgress: true,
			slidesPerView: 5,
			navigation: {
				nextEl: '.stories--desktop .swiper-button-next',
				prevEl: '.stories--desktop .swiper-button-prev',
			},
		});
	},
	methods: {
		...mapActions({
			request: 'request',
			openStories: 'stories/stories/openStories',
			closeStories: 'stories/stories/closeStories'
		})
	}
}
</script>
