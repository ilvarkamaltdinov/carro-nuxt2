<template>
	<div class="grid grid--container">
		<section class="page-main__catalog catalog grid">
			<div class="heading-group heading-group--h1 grid__col-12">
				<div class="heading-group__wrap">
					<h1 class="heading heading--h1">Автомобили с пробегом</h1>
					<!--<span class="heading-group__label">121212 автомобиля в наличии</span>-->
				</div>
			</div>
			<div class="grid__col-12" v-if="showFolderTabs">
				<div class="tabs">
					<ul class="tabs__list">
						<li role="presentation"
						    v-for="tab in folders"
						    class="tabs__item">
							<nuxt-link class="tabs__link"
							           :to="`/${$route.params.category}/${$route.params.mark}/${tab.slug}`">
								{{ tab.title }}
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
				<!--<button-typical text="Показать больше" class="button&#45;&#45;link button&#45;&#45;more"/>-->
			</div>
		</section>
	</div>
</template>
<script>
import {mapGetters} from "vuex"
import capitalizeFirstLetter from "~/mixins/capitalizeFirstLetter";

export default {
	mixins: [capitalizeFirstLetter],
	// methods:{
	// 	tabClick(tab){
	// 		console.log(tab)
	// 		this.$route.pu
	// 	}
	// },
	computed: {
		...mapGetters({
			filters: 'filters/filters/filters',
			chosen: 'filters/filters/chosen'
			
		}),
		folders() {
			return this.filters.folder
		},
		showFolderTabs() {
			return this.chosen?.mark?.length === 1 && !this.$route.query.folder_slug_array
		}
	},
}
</script>
