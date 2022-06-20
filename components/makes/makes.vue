<template>
	<div class="makes">
		<div class="makes__wrap">
			<ul class="makes__list makes__list--popular">
				<makes-item-popular v-for="(item, index) in 10"
				                    @chooseMark="chooseMark(allMarks[item])"
				                    :for-chose-modal="forChoseModal"
				                    :slug="allMarks[item].slug"
				                    @click="setModalMarks(false)"
				                    :title="allMarks[item].title"
				                    :key="index" />
			</ul>
			<ul class="makes__list makes__list--all">
				<makes-item v-for="(item, index) in allMarks"
				            :slug="item.slug"
				            :active="item === currentMark"
				            :for-chose-modal="forChoseModal"
				            @click="setModalMarks(false)"
				            @choose="chooseMark(item)"
				            :key="index"
				            :item="item">
					{{ item.title }}
				</makes-item>
			</ul>
		</div>
	</div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
	props: {
		forChoseModal: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		...mapGetters({
			allMarks: 'marks/marks/allMarks',
			currentMark:'modal/modal-choose/currentMark'
		})
	},
	methods: {
		...mapActions({
			chooseMark: 'modal/modal-choose/chooseMark'
		}),
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