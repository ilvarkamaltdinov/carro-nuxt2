<template>
	<div class="grid__col-12">
		<div class="tabs" v-if="generations.length">
			<ul :class="{'tabs__list--all':isAll}"
			    class="tabs__list"
			    ref="tabs"
			    @scroll="scrollGenerations">
				<li role="presentation"
				    v-for="(tab, index) in generations"
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
		<div v-else
		     class="skeleton">
			<ul class="skeleton__tabs-list">
				<li class="skeleton__tabs-item"></li>
				<li class="skeleton__tabs-item"></li>
				<li class="skeleton__tabs-item"></li>
				<li class="skeleton__tabs-item"></li>
				<li class="skeleton__tabs-item"></li>
			</ul>
		</div>
	</div>
</template>
<script>

export default {
	props: {
		generations: Array,
		isAll: Boolean
	},
	mounted() {
		this.$nextTick(() => {
			if (localStorage.generationsTabsLeft && this.$device.isMobile && this.$refs.tabs) {
				this.$refs.tabs.scrollLeft = Number(localStorage.generationsTabsLeft)
			}
		})
	},
	methods: {
		scrollGenerations() {
			localStorage.generationsTabsLeft = event.target.scrollLeft
		},
	},
}
</script>
