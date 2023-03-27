<template>
	<div class="grid__col-12">
		<div class="tabs">
			<ul class="tabs__list tabs__list--all"
			    ref="tabs">
				<!--@scroll="scrollGenerations"-->
				<li role="presentation"
				    v-for="(generation, index) in sortedGenerations"
				    :ref="'tab' + index"
				    :class="{'tabs__item--active':generation.slug === $route.params.car}"
				    class="tabs__item">
					<nuxt-link class="tabs__link"
					           @click.native="generationClick"
					           :to="`/${$route.params.category}/${$route.params.mark}/${$route.params.model}/${generation.slug}`">
						<span>{{ generation.name }}</span>
						<span>[{{ generation.year_begin }} - {{ generation.year_end || ' н.в.' }}]</span>
						<span class="tabs__count">{{ generation.offers_count }}</span>
					</nuxt-link>
				</li>
				
				
				<!--<div class="list__tab-name">{{ generation.name }}-->
				<!--	<span>[{{ generation.year_begin }} - {{ generation.year_end || ' н.в.' }}]</span>-->
				<!--</div>-->
				<!--<div class="list__tab-number">{{ generation.offers_count }}</div>-->
			</ul>
		</div>
	</div>
</template>
<script>

import {mapGetters, mapMutations} from "vuex";

export default {
	// watch: {
	// 	isAll() {
	// 		this.$nextTick(() => {
	// 			this.$refs.tabs.scrollLeft = 0
	// 		})
	// 	}
	// },
	props: {
		isAll: Boolean
	},
	computed: {
		...mapGetters({
			marks: 'marks/marks/allMarks',
			commMarks: 'marks/marks/commMarks',
			europeMarks: 'marks/marks/europeMarks'
		}),
		generations() {
			let marks
			let currentMark
			switch (this.$route.params.category) {
				case 'commercial':
					marks = this.commMarks
					break
				case 'europe':
					marks = this.europeMarks
					break
				default:
					marks = this.marks
					break
			}
			currentMark = marks.find(item => item.slug === this.$route.params.mark)
			let currentFolder = currentMark?.folders.find(item => item.slug === this.$route.params.model)
			return currentFolder.generations
		},
		sortedGenerations() {
			let generations = this.generations
			if (this.$device.isMobile) {
				generations = generations.slice(0, this.isAll ? generations.length : 4)
			}
			return generations
		}
	},
	// mounted() {
	// 	this.$nextTick(() => {
	// 		if (localStorage.generationsTabsLeft && this.$device.isMobile && this.$refs.tabs) {
	// 			this.$refs.tabs.scrollLeft = Number(localStorage.generationsTabsLeft)
	// 		}
	// 	})
	// },
	methods: {
		...mapMutations({
			setGenerationClick: 'click/SET_GENERATION_CLICK'
		}),
		async generationClick() {
			// нужно для якоря
			await this.setGenerationClick(true)
		},
		// scrollGenerations() {
		// 	localStorage.generationsTabsLeft = event.target.scrollLeft
		// }
	}
}
</script>
