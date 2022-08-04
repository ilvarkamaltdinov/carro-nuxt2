<template>
	<div class="grid__col-12">
		<div class="tabs" v-if="folders.length">
			<ul :class="{'tabs__list--all':isAll}"
			    class="tabs__list"
			    ref="tabs"
			    @scroll="scrollFolders">
				<li role="presentation"
				    v-for="(tab, index) in sortedFoldersByCount"
				    :ref="'tab' + index"
				    :class="{'tabs__item--active':tab.slug === $route.params.model}"
				    class="tabs__item">
					<nuxt-link class="tabs__link"
					           :to="`/${$route.params.category}/${$route.params.mark}/${tab.slug}`">
						{{ tab.title }}
						<span class="tabs__count">
							{{ tab.offers_count }}
						</span>
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
import {mapGetters} from "vuex"
import filters from "@/mixins/filters";

export default {
	props: {
		folders: Array,
		isAll: Boolean
	},
	mounted() {
		this.$nextTick(() => {
			if (localStorage.foldersTabsLeft && this.$device.isMobile && this.$refs.tabs) {
				this.$refs.tabs.scrollLeft = Number(localStorage.foldersTabsLeft)
			}
		})
	},
	computed: {
		sortedFoldersByCount() {
			return this.$_.sortBy(this.folders, [function (folder) {
				return folder.offers_count;
			}]).reverse();
		}
	},
	beforeDestroy() {
		localStorage.generationsTabsLeft = 0
	},
	methods: {
		scrollFolders() {
			localStorage.foldersTabsLeft = event.target.scrollLeft
		},
	},
}
</script>
