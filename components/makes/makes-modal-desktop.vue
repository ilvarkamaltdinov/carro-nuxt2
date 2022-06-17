<template>
	<div class="makes">
		<div class="makes__wrap">
			<ul class="makes__list makes__list--popular">
				<makes-item-popular v-for="(item, index) in 10"
				                    @chooseMark="chooseMark(allMarks[item])"
				                    :for-chose-modal="true"
				                    :slug="allMarks[item].slug"
				                    :title="allMarks[item].title"
				                    :key="index" />
			</ul>
			<div class="makes__group"
			     v-for="letter in alphabetMarks"
			     :key="letter">
				<div class="makes__letter-item">
					<a class="makes__letters-link"
					   :id="letter"
					   href="">
						{{letter}}
					</a>
				</div>
				<ul class="makes__list makes__list--modal">
					<makes-item v-for="item in allMarks"
					            v-if="item.title[0] === letter"
					            :item="item"
					            :for-chose-modal="true"
					            @choose="chooseMark(item)"
					            :active="item === currentMark"
					            :key="item.id">
					</makes-item>
				</ul>
			</div>
		</div>
	</div>

</template>
<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
	computed: {
		...mapGetters({
			allMarks: 'marks/marks/allMarks',
			alphabetMarks: 'marks/marks/alphabetMarks',
			currentMark:'modal/modal-choose/currentMark'
		})
	},
	methods: {
		...mapActions({
			chooseMark:'modal/modal-choose/chooseMark'
		})
	}
}
</script>