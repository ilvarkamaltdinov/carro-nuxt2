<template>
	<ul class="main-nav__list site-list">
		<li @click="itemClick(index)"
		    :ref="'item-'+index"
		    class="site-list__item site-list__item--group"
		    v-for="(item, index) in list"
		    :key="item.title">
			<div class="site-list__link site-list__link--group"
			     :class="{'site-list__link--group-active': activeItems.indexOf(index) !== -1}">
				{{ item.title }}
			</div>
			<VueSlideToggle :open="activeItems.indexOf(index) !== -1"
			                :duration="500">
				<ul class="site-list__group-list">
					<li class="site-list__item site-list__item--sub"
					    v-if="sub.show"
					    v-for="sub in item.links"
					    :key="sub.name">
						<a class="site-list__link"
						   v-if="sub.blank"
						   target="_blank"
						   :href="sub.link">{{ sub.name }}
						</a>
						<nuxt-link v-else
						           @click.native="setModalMenu(false)"
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
	data() {
		return {
			activeItems: []
		}
	},
	props: {
		list: Array
	},
	methods: {
		...mapMutations({
			setModalMenu: 'modal/modal-menu/setModalMenu'
		}),
		isChecked(index) {
			return this.activeItems.indexOf(index) !== -1
		},
		itemClick(index) {
			if (this.isChecked(index)) {
				this.activeItems = this.activeItems.filter(item => item !== index)
			} else {
				this.activeItems.push(index)
			}
		}
	}
}
</script>