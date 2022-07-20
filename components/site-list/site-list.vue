<template>
	<ul class="main-nav__list site-list">
		<li class="site-list__item site-list__item--group" v-for="item in list" :key="item.title">
			<div class="site-list__link site-list__link--group">{{ item.title }}</div>
			<ul class="site-list__group-list">
				<li class="site-list__item site-list__item--sub" v-for="sub in item.links" :key="sub.name">
					<a v-if="sub.blank" target="_blank" :href="sub.link">{{sub.name}}</a>
					<nuxt-link v-else @click.native="setModalMenu(false)" class="site-list__link"
					   :to="sub.link">
						{{sub.name}}
					</nuxt-link>
				</li>
			</ul>
		</li>
	</ul>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
	data() {
		return {
			activeNav: 0
		}
	},
	props: {
		list: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		...mapMutations({
			setModalMenu: 'modal/modal-menu/setModalMenu'
		})
	}
}
</script>