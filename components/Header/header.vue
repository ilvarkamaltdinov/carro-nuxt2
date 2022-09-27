<template>
	<header class="page-header">
		<div class="page-header__container grid grid--header">
			<div class="page-header__wrap grid__col-12">
				<header-logo-block @burger="burgerClick" :modal-menu="modalMenu"/>
				<nav class="main-nav page-header__nav page-header__nav--desktop">
					<site-list-desktop />
				</nav>
				<ul class="page-header__buttons">
					<li class="page-header__buttons-item"
					    v-if="$device.isMobile">
						<div @click="setMobileSearch(!mobileSearch)"
						     class="page-header__buttons-link">
							<svg-icon class="icon"
							          name="icon-search" />
						</div>
					</li>
					<li class="page-header__buttons-item">
						<nuxt-link to="/favorites"
						           class="page-header__buttons-link" title="Избранное" aria-label="Избранное">
							<span v-if="likesArray.length"
							      class="page-header__favorites-count">{{ likesArray.length }}
							</span>
							<svg-icon class="icon"
							          name="icon-favorites" />
						</nuxt-link>
					</li>
					<li class="page-header__buttons-item">
						<a class="page-header__buttons-link page-header__buttons-link--phone"
						   :href="`tel:${settings.phone.replace(/[^+\d]/g, '')}`" title="Бесплатный звонок" aria-label="Бесплатный звонок">
							<svg-icon class="icon"
							          name="icon-call" />
              <span class="page-header__buttons-phone">{{ settings.phone }}</span>
						</a>
					</li>
				</ul>
			</div>
			<nav class="page-header__nav grid__col-12">
				<header-back-button :back-button="backButton" v-if="backButton.title && $device.isMobile"/>
				<div v-else
				     class="page-header__nav-wrap makes">
					<ul class="makes__list makes__list--header">
						<li class="makes__item"
						    v-for="index in 8"
						    :key="index">
							<nuxt-link :title="allMarks[index].title" :to="'/used/' + allMarks[index].slug"
							           @click.native="navMarkClick()"
							           class="makes__link">
								<div class="makes__title">{{ allMarks[index].title }}</div>
								<div class="makes__count">{{ allMarks[index].offers_count }}</div>
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
			mobileSearch: 'modal/modal-search/mobileSearch'
		}),
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
		...mapMutations({
			setModalMenu: 'modal/modal-menu/setModalMenu',
			setModalMarks: 'modal/modal-marks/setModalMarks',
			setModalSearch: 'modal/modal-search/setModalSearch',
			setMobileSearch: 'modal/modal-search/setMobileSearch'
		}),
		burgerClick() {
			this.setModalMenu(!this.modalMenu)
			this.setModalMarks(false)
			this.setModalSearch(false)
			this.setModalSearch(false)
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
