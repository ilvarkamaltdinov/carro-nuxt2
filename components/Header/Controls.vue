<template>
	<ul class="page-header__buttons">
		<li class="page-header__buttons-item">
			<nuxt-link to="/favorites"
			           class="page-header__buttons-link"
			           title="Избранное"
			           aria-label="Избранное">
				<span v-if="likesArray.length"
				      class="page-header__favorites-count">{{ likesArray.length }}
				</span>
				<svg-icon class="icon"
				          name="icon-favorites" />
			</nuxt-link>
		</li>
		<li class="page-header__buttons-item"
		    v-if="$device.isMobile">
			<div @click="searchClick"
			     class="page-header__buttons-link">
				<svg-icon class="icon"
				          name="icon-search" />
			</div>
		</li>
		<li class="page-header__buttons-item page-header__buttons-item--call">
			<a class="page-header__buttons-link page-header__buttons-link--phone"
			   v-if="settings.phone"
			   :href="`tel:${currentPhone.replace(/[^+\d]/g, '')}`"
			   title="Бесплатный звонок"
			   aria-label="Бесплатный звонок">
				<svg-icon class="icon"
				          name="icon-call" />
				<span class="page-header__buttons-phone">{{ currentPhone }}</span>
			</a>
		</li>
	</ul>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
	computed: {
		...mapGetters({
			settings: 'settings/settings/settings',
			likesArray: 'favorite/favorite/likesArray',
			dealerPhone: 'header/header/dealerPhone'
		}),
		currentPhone() {
			return this.dealerPhone ? this.dealerPhone : this.settings.phone
		}
	},
	methods: {
		...mapActions({
			openModal: 'modal/modal-main/openModal',
			getLikes: 'favorite/favorite/getLikes'
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
		}
	}
}
</script>