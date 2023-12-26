<template>
	<div class="page-header__wrap grid__col-12">
		<header-logo-block @burger="burgerClick"
		                   :modal-menu="modalMenu" />
		<header-nav/>
    <inputs-toggle/>
		<header-controls/>
	</div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
	components: {
		HeaderNav: () => import(/* webpackChunkName: "header-nav" */ '~/components/Header/Nav'),
		HeaderControls: () => import(/* webpackChunkName: "header-controls" */ '~/components/Header/Controls'),
		HeaderLogoBlock: () => import(/* webpackChunkName: "header-logo-block" */ '~/components/Header/header-logo-block'),
	},
	computed: {
		...mapGetters({
			modalMenu: 'modal/modal-menu/modalMenu',
		})
	},
	methods:{
		...mapMutations({
			setModalMenu: 'modal/modal-menu/setModalMenu',
			setModalMarks: 'modal/modal-marks/setModalMarks',
			setModalSearch: 'modal/modal-search/setModalSearch',
			setMobileSearch: 'modal/modal-search/setMobileSearch',
		}),
		burgerClick() {
			this.setModalMenu(!this.modalMenu)
			this.setModalMarks(false)
			this.setModalSearch(false)
			this.setModalSearch(false)
		}
	}
}
</script>
