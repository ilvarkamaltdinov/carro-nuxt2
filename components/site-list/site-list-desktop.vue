<template>
	<ul class="main-nav__list site-list site-list--desktop">
		<li class="site-list__item">
			<nuxt-link
					@click.native="closeModals"
					to="/used"
					class="site-list__link">
				В наличии
			</nuxt-link>
		</li>
		<li class="site-list__item">
			<nuxt-link
					@click.native="closeModals"
					to="/credit"
					class="site-list__link">
				Автокредит
			</nuxt-link>
		</li>
		<li class="site-list__item">
			<nuxt-link
					@click.native="closeModals"
					to="/exchange"
					class="site-list__link">
				Trade-In
			</nuxt-link>
		</li>
		<li class="site-list__item">
			<nuxt-link
					@click.native="closeModals"
					to="/buyout"
					class="site-list__link">
				Выкуп
			</nuxt-link>
		</li>
		<li class="site-list__item">
			<nuxt-link
					@click.native="closeModals"
					to="/about"
					class="site-list__link">
				О портале
			</nuxt-link>
		</li>
	</ul>
</template>
<script>
import {mapMutations} from "vuex";

export default {
	methods: {
		...mapMutations({
			setModalMenu: 'modal/modal-menu/setModalMenu',
			setModalMarks: 'modal/modal-marks/setModalMarks',
			setModalSearch: 'modal/modal-search/setModalSearch',
		}),
		closeModals(){
			this.setModalMenu(false)
			this.setModalMarks(false)
			this.setModalSearch(false)
		}
	}
}
</script>