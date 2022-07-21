<template>
	<ul class="main-nav__list site-list">
		<li @click="item.active = !item.active"
		    class="site-list__item site-list__item--group"
		    v-for="(item, index) in list"
		    :key="item.title">
			<div class="site-list__link site-list__link--group"
			:class="{'site-list__link--group-active': item.active}">
				{{ item.title }}
			</div>
			<VueSlideToggle :open="item.active"
			                :duration="500">
				<ul class="site-list__group-list">
					<li class="site-list__item site-list__item--sub"
					    v-for="sub in item.links"
					    :key="sub.name">
						<nuxt-link @click.native="setModalMenu(false)"
						           class="site-list__link"
						           :to="sub.link">
							{{ sub.name }}
						</nuxt-link>
					</li>
				</ul>
			</VueSlideToggle>
			
		</li>
	</ul>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
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