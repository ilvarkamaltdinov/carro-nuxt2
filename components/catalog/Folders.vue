<template>
	<div class="grid__col-12" v-if="folders.length">
		<div class="tabs">
			<ul
					class="tabs__list tabs__list--all tabs__list--all-models"
					ref="tabs">
				<!--@scroll="scrollFolders"-->
				<li
						role="presentation"
						v-for="(item, index) in sortedFoldersByCount"
						:key="item.slug"
						:ref="'tab' + index"
						:class="{ 'tabs__item--active': item.slug === $route.params.model }"
						class="tabs__item"
				>
					<nuxt-link
							class="tabs__link"
							:to="`/${$route.params.category}/${$route.params.mark}/${item.slug}`"
					>
						<span class="tabs__text">
							{{ item.title }}
						</span>
						
						<span class="tabs__count">
							{{ item.offers_count }}
						</span>
					</nuxt-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import {mapGetters} from "vuex";
import filters from "@/mixins/filters";
import sortBy from 'lodash/sortBy'

export default {
	// watch: {
	// 	isAll() {
	// 		this.$nextTick(() => {
	// 			this.$refs.tabs.scrollLeft = 0;
	// 		});
	// 	},
	// },
	props: {
		isAll: Boolean,
	},
	// mounted() {
	// 	this.$nextTick(() => {
	// 		if (
	// 				localStorage.foldersTabsLeft &&
	// 				this.$device.isMobile &&
	// 				this.$refs.tabs
	// 		) {
	// 			this.$refs.tabs.scrollLeft = Number(localStorage.foldersTabsLeft);
	// 		}
	// 	});
	// },
	computed: {
		...mapGetters({
			marks: 'marks/marks/allMarks',
			commMarks: 'marks/marks/commMarks',
			europeMarks: 'marks/marks/europeMarks'
		}),
		folders() {
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
			return currentMark?.folders || []
		},
		sortedFoldersByCount() {
			let sorted = sortBy(this.folders, [
				(folder) => {
					return folder.offers_count;
				},
			]).reverse();
			if (this.$device.isMobile) {
				sorted = sorted.slice(0, this.isAll ? sorted.length : 8);
			}
			return sorted;
		},
	},
	beforeDestroy() {
		localStorage.generationsTabsLeft = 0;
	},
	methods: {
		scrollFolders() {
			localStorage.foldersTabsLeft = event.target.scrollLeft;
		},
	},
};
</script>
