<template>
	
	<div class="makes">
		<div class="makes__wrap">
			<ul class="makes__list makes__list--popular">
				<makes-item-popular v-for="(item, index) in 10"
				                    :title="allMarks[item].title"
				                    :key="index" />
			</ul>
			<ul class="makes__list makes__list--all">
				<makes-item v-for="(item, index) in allMarks" :key="index" :item="item">
					{{item.title}}
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
		})
	}
}
</script>