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
				<makes-item v-for="(item, index) in sortedMarks"
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
const makesItem = () => import('@/components/makes/makes-item')
const makesItemPopular = () => import('@/components/makes/makes-item-popular')
export default {
	components:{
		makesItem, makesItemPopular
	},
	props: {
		forChoseModal: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		...mapGetters({
			allMarks: 'marks/marks/allMarks',
			currentMark: 'modal/modal-choose/currentMark'
		}),
		sortedMarks(){
			return this.$_.sortBy(this.allMarks, [function (mark) {
				return mark.title;
			}])
		}
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