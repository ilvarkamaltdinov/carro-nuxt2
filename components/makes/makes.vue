<template>
	<div class="makes">
		<div class="makes__wrap">
			<ul class="makes__list makes__list--popular">
				<makes-item-popular v-for="(item, index) in 10"
				                    :slug="allMarks[item].slug"
				                    @click="setModalMarks(false)"
				                    :title="allMarks[item].title"
				                    :key="index" />
			</ul>
			<ul class="makes__list makes__list--all">
				<makes-item v-for="(item, index) in allMarks"
				            :slug="item.slug"
				            @click="setModalMarks(false)"
				            :key="index"
				            :item="item">
					{{ item.title }}
				</makes-item>
			</ul>
		</div>
	</div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
	computed: {
		...mapGetters({
			allMarks: 'marks/marks/allMarks'
		})
	},
	methods: {
		...mapMutations({
			setModalMenu: 'modal/modal-menu/setModalMenu',
			setModalMarks: 'modal/modal-marks/setModalMarks'
		}),
		markClick(item) {
			this.setModalMarks(false)
			this.$router.push('/used/' + item.slug)
		}
	}
}
</script>