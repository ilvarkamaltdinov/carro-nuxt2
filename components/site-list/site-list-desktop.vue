<template>
	<ul class="main-nav__list site-list site-list--desktop">
		<li class="site-list__item" v-for="item in nav" :key="item.link">
			<nuxt-link
					@click.native="closeModals"
					:to="item.link"
					:title="item.title"
					class="site-list__link">
				{{item.title }}
			</nuxt-link>
		</li>
	</ul>
</template>
<script>
import {mapMutations} from "vuex";

export default {
	data() {
		return {
			nav: [
				{
					title: 'В наличии',
					link: '/used'
				},
				{
					title:'Автокредит',
					link:'/credit'
				},
				{
					title:'Trade-In',
					link:'/exchange'
				},
				{
					title:'Отзывы',
					link:'/reviews-dealers'
				},
				{
					title:'О портале',
					link:'/about'
				}
			]
		}
	},
	methods: {
		...mapMutations({
			setModalMenu: 'modal/modal-menu/setModalMenu',
			setModalMarks: 'modal/modal-marks/setModalMarks',
			setModalSearch: 'modal/modal-search/setModalSearch',
		}),
		closeModals() {
			this.setModalMenu(false)
			this.setModalMarks(false)
			this.setModalSearch(false)
		}
	}
}
</script>
