<template>
	<header class="page-header">
		<div class="page-header__container grid grid--header">
			<header-top/>
			<nav class="page-header__nav grid__col-12">
				<header-back-button :back-button="backButton"
				                    v-if="backButton.title && $device.isMobile" />
				<div v-else
				     class="page-header__nav-wrap makes">
					<ul class="makes__list makes__list--header">
						<li class="makes__item"
						    v-for="item in popular"
						    :key="item.slug">
							<nuxt-link :title="item.title"
							           :to="'/used/' + item.slug"
							           @click.native="navMarkClick()"
							           class="makes__link">
								<div class="makes__title">{{ item.title }}</div>
								<div class="makes__count">{{ item.offers_count }}</div>
							</nuxt-link>
						</li>
					</ul>
				</div>
				<button class="page-header__makes-more"
				        :class="{'page-header__makes-more--active':modalMarks}"
				        @click.prevent="allMarksClick()">
					Все марки
					<svg-icon class="page-header__makes-more-arrow icon"
					          name="icon-arrow" />
				</button>
			</nav>
		</div>
		<!--TODO анимация выпадающих списков в хедере-->
		<transition name="menu">
			<modal-makes v-show="modalMarks" />
		</transition>
		<transition name="menu">
			<modal-menu v-show="modalMenu" />
		</transition>
		<transition name="menu">
			<modal-search v-show="modalSearch" />
		</transition>
	</header>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import bodyClasses from "@/mixins/bodyClasses";

export default {
	components:{
		HeaderTop: () => import(/* webpackChunkName: "header-top" */ '~/components/Header/Top'),
	},
	mixins: [bodyClasses],
	watch: {
		'$route'() {
			this.setModalMenu(false)
		},
	},
	computed: {
		...mapGetters({
			modalMenu: 'modal/modal-menu/modalMenu',
			modalMarks: 'modal/modal-marks/modalMarks',
			modalSearch: 'modal/modal-search/modalSearch',
			allMarks: 'marks/marks/allMarks',
			likesArray: 'favorite/favorite/likesArray',
			settings: 'settings/settings/settings',
			componentCatalog: 'filters/filters/componentCatalog',
			marks: 'marks/marks/allMarks',
			folders: 'folders/folders/folders',
			backButton: 'header/header/backButton',
			mobileSearch: 'modal/modal-search/mobileSearch',
			dealerPhone: 'header/header/dealerPhone',
			popularMarks: 'marks/marks/popularMarks'
		}),
		popular() {
			return this.popularMarks.slice(0, 8)
		},
		currentPhone() {
			return this.dealerPhone ? this.dealerPhone : this.settings.phone
		},
		currentMark() {
			return this.marks.filter(item => this.$route.params.mark === item.slug)[0]
		},
		currentFolder() {
			return this.folders.filter(item => this.$route.params.model === item.slug)[0]
		},
		showHeaderCrumbs() {
			if (this.$device.isMobile) {
				if (this.$route.params.car) {
					return this.componentCatalog === 'car';
				} else {
					return false
				}
			} else {
				return false
			}
		}
	},
	mounted() {
		this.getLikes()
	},
	methods: {
		...mapActions({
			openModal: 'modal/modal-main/openModal'
		}),
		...mapMutations({
			setModalMenu: 'modal/modal-menu/setModalMenu',
			setModalMarks: 'modal/modal-marks/setModalMarks',
			setModalSearch: 'modal/modal-search/setModalSearch',
			setMobileSearch: 'modal/modal-search/setMobileSearch',
			setHeaderFilterClick: 'click/SET_HEADER_FILTER_CLICK'
		}),
		async searchClick() {
			await this.setHeaderFilterClick(true)
			if (!this.$route.params.category) {
				await this.$router.push('/used')
			}
			let payload = {
				modal_component: 'modal-filter-mobile',
				modal_data: 'filter-mobile',
				modal_title: 'Фильтр',
			}
			await this.openModal(payload)
		},
		
		navMarkClick() {
			this.setModalMenu(false)
			this.setModalMarks(false)
			this.setModalSearch(false)
		},
		allMarksClick() {
			this.setModalMarks(!this.modalMarks)
			this.setModalMenu(false)
			this.setModalSearch(false)
		},
		...mapActions({
			getLikes: 'favorite/favorite/getLikes',
		})
	}
}
</script>