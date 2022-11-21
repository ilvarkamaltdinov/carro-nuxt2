<template>
	<div class="grid__col-12">
		<div class="tabs"
		     v-if="generations.length">
			<ul class="tabs__list tabs__list--all"
			    ref="tabs"
			    @scroll="scrollGenerations">
				<li role="presentation"
				    v-for="(tab, index) in sortedGenerations"
				    :ref="'tab' + index"
				    :class="{'tabs__item--active':tab.slug === $route.params.car}"
				    class="tabs__item">
					<nuxt-link class="tabs__link"
					           :to="`/${$route.params.category}/${$route.params.mark}/${$route.params.model}/${tab.slug}`">
						{{ tab.title }}
					</nuxt-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>

export default {
	watch: {
		isAll() {
			this.$nextTick(() => {
				this.$refs.tabs.scrollLeft = 0
			})
		}
	},
	props: {
		generations: Array,
		isAll: Boolean
	},
	computed: {
		sortedGenerations() {
			let generations = this.generations
			if (this.$device.isMobile) {
				generations = generations.slice(0, this.isAll ? generations.length : 4)
			}
			return generations
		}
	},
	mounted() {
		this.$nextTick(() => {
			if (localStorage.generationsTabsLeft && this.$device.isMobile && this.$refs.tabs) {
				this.$refs.tabs.scrollLeft = Number(localStorage.generationsTabsLeft)
			}
			// if (this.$route.name === 'category-mark-model-car') {
			// 	let tabs = this.$refs.tabs
			// 	tabs.scrollIntoView(true);
			// 	const yourHeight = 105 + 81; // header + filter
			//
			// 	const scrolledY = window.scrollY;
			// 	window.scroll(0, scrolledY - yourHeight);
			// }
		})
	},
	methods: {
		scrollGenerations() {
			localStorage.generationsTabsLeft = event.target.scrollLeft
		}
	}
}
</script>
