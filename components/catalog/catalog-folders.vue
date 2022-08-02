<template>
	<div class="grid__col-12">
		<div class="tabs">
			<ul :class="{'tabs__list--all':allFolders}"
			    class="tabs__list"
			    ref="tabs"
			    @scroll="scrollFolders">
				<li role="presentation"
				    v-for="(tab, index) in sortFolders"
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
		<button-typical
				v-if="$device.isMobile && sortFolders.length > 3"
				@click="clickAllFolders"
				:text="allFolders ? 'Меньше моделей' :'Больше моделей'"
				:class="{'button--show-active': allFolders }"
				class="button--show" />
	</div>
</template>
<script>
import {mapGetters} from "vuex"

export default {
	data() {
		return {
			allFolders: false,
		}
	},
	mounted() {
		this.$nextTick(() => {
			if (localStorage.foldersTabsLeft && this.$device.isMobile && this.$refs.tabs) {
				this.$refs.tabs.scrollLeft = Number(localStorage.foldersTabsLeft)
			}
		})
	},
	props: {
		offers: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		...mapGetters({
			folders: 'folders/folders/folders',
		}),
		sortFolders() {
			return this.$_.sortBy(this.folders, [function (folder) {
				return folder.offers_count;
			}]).reverse();
		}
	},
	methods: {
		clickAllFolders() {
			window.scrollTo(0, 0)
			this.allFolders = !this.allFolders
			this.$nextTick(() => {
				this.$refs.tabs.scrollLeft = 0
			})
		},
		scrollFolders() {
			localStorage.foldersTabsLeft = event.target.scrollLeft
		},
	},
}
</script>
