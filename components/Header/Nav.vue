<template>
	<nav class="main-nav page-header__nav page-header__nav--desktop">
		<ul class="main-nav__list site-list site-list--desktop">
			<li class="site-list__item" v-for="(item, index) in nav" :key="index">
				<nuxt-link
						@click.native="closeModals"
						:to="item.link"
						:title="item.title"
						class="site-list__link"
				>
					{{ item.title }}
				</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
	components: {
		HeaderLogoBlock: () => import(/* webpackChunkName: "header-logo-block" */ '~/components/Header/header-logo-block'),
	},
	computed: {
		...mapGetters({
			showReviews: "showReviews",
			isMoscow: "isMoscow"
		}),
		nav(){
			return [
				{
					title: "Рассрочка",
					link: "/rassrochka",
				},
				{
					title: "Автокредит",
					link: "/credit",
				},
				{
					title: "Trade-In",
					link: "/exchange",
				},
				{
					title: "В наличии",
					link: "/used",
				},
				{
					title: "О портале",
					link: "/about",
				}
			]
		}
	},
	mounted() {
		this.showReviews
				? this.nav.splice(4, 0, {
					title: "Отзывы",
					link: "/reviews-dealers",
				})
				: this.nav.splice(4, 0, {
					title: "Контакты",
					link: "/contacts",
				});
		// this.isMoscow
		//   ? this.nav.splice(1, 0, {
		//     title: "Из Европы",
		//     link: "/europe",
		//   })
		//   : '';
	},
	methods: {
		...mapMutations({
			setModalMenu: "modal/modal-menu/setModalMenu",
			setModalMarks: "modal/modal-marks/setModalMarks",
			setModalSearch: "modal/modal-search/setModalSearch",
		}),
		closeModals() {
			this.setModalMenu(false);
			this.setModalMarks(false);
			this.setModalSearch(false);
		},
	},
}
</script>