<template>
	<div class="makes">
		<div class="makes__wrap">
			<ul class="makes__list makes__list--popular">
				<makes-item-popular v-for="item in popular"
				                    @chooseMark="chooseMark(item)"
				                    :for-chose-modal="forChoseModal"
				                    :slug="item.slug"
				                    @click="setModalMarks(false)"
				                    :title="item.title"
				                    :key="item.id" />
			</ul>
			<ul class="makes__list makes__list--all">
				<makes-item v-for="(item, index) in allMarks"
				            :slug="item.slug"
				            :active="item === currentMark"
				            :for-chose-modal="forChoseModal"
				            @click="clickMarks"
				            @choose="chooseMark(item)"
				            :key="index"
				            :item="item" />
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
			popularMarks: 'marks/marks/popularMarks',
			currentMark: 'modal/modal-choose/currentMark'
		}),
		popular() {
			return this.popularMarks.slice(0, 10)
		}
		// sortedMarks() {
		// 	return this.$_.sortBy(this.allMarks, [function (mark) {
		// 		return mark.title;
		// 	}])
		// }
	},
	methods: {
		...mapActions({
			chooseMark: 'modal/modal-choose/chooseMark'
		}),
		...mapMutations({
			setModalSearch: 'modal/modal-search/setModalSearch',
			setModalMenu: 'modal/modal-menu/setModalMenu',
			setModalMarks: 'modal/modal-marks/setModalMarks'
		}),
		clickMarks() {
			this.setModalMarks(false)
			this.setModalSearch(false)
			
		},
		markClick(item) {
			this.setModalMarks(false)
			this.$router.push('/used/' + item.slug)
		}
	}
}
</script>