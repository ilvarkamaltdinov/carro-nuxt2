<template>
	<div class="grid grid--container">
		<section class="page-main__catalog catalog grid">
			<div class="heading-group heading-group--h1 grid__col-12">
				<div class="heading-group__wrap">
					<h1 class="heading heading--h1">{{ pageTitle }}</h1>
					<!--<span class="heading-group__label">121212 автомобиля в наличии</span>-->
				</div>
			</div>
			<catalog-offers v-if="offers" />
			<div class="grid__col-12"
			     v-if="showFolderTabs">
				<div class="tabs">
					<ul class="tabs__list" ref="tabs" @scroll="scrollFolders">
						<li role="presentation"
						    v-for="(tab, index) in folders"
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
			</div>
			<div class="grid__col-4"
			     v-if="!$device.isMobile">
				<filter-desktop />
			</div>
			<div class="grid__col-8">
				<filter-sort />
				<component :is="$device.isMobile ? 'catalog-list-used-mobile' : 'catalog-list-used-desktop'" />
			</div>
		</section>
	</div>
</template>
<script>
import {mapGetters} from "vuex"
import capitalizeFirstLetter from "~/mixins/capitalizeFirstLetter";

export default {
	mixins: [capitalizeFirstLetter],
	mounted() {
		this.$nextTick(() => {
			if (localStorage.foldersTabsLeft && this.$device.isMobile && this.$refs.tabs) {
				this.$refs.tabs.scrollLeft = Number(localStorage.foldersTabsLeft)
			}
		})
	},
	props: {
		pageTitle: String,
		offers: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		...mapGetters({
			chosen: 'filters/filters/chosen',
			folders: 'folders/folders/folders'
		}),
		showFolderTabs() {
			return this.chosen?.mark?.length === 1 && !this.$route.query.folder_slug_array
		}
	},
	methods: {
		scrollFolders(){
			localStorage.foldersTabsLeft = event.target.scrollLeft
		},
	},
}
</script>
