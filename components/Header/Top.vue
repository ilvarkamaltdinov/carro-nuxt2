<template>
	<div class="page-header__wrap grid__col-12">
		<header-logo-block @burger="burgerClick"
		                   :modal-menu="modalMenu" />
		<header-nav/>
		<header-controls/>
    <div
         class="page-header__buttons-link page-header__buttons-link--phone" @click="isDark = !isDark">
      <svg-icon
        name="icon-call"/>
    </div>
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
  data(){
    return {
      isDark: false,
    }
  },
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: this.isDark ? '/styles/index-dark.css': '/styles/index-light.css', id: 'theme' },
      ]
    }
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
