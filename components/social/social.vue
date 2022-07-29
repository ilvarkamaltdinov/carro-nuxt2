<template>
	<ul class="social">
		<li class="social__item"
		    v-if="settings['soc_'+item]"
		    v-for="item in socials"
		    :key="item">
			<a class="social__link"
			   target="_blank"
			   rel="nofollow"
			   :href="settings['soc_'+item]">
				<svg-icon class="social__icon"
				          :name="`icon-${item}`" />
			</a>
		</li>
	</ul>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	data() {
		return {
			socials: ['telegram', 'zen', 'instagram', 'vk', 'ok', 'tiktok']
		}
	},
	computed: {
		...mapGetters({
			settings: 'settings/settings/settings'
		})
	}
}
</script>