<template>
	<div class="makes">
		<div class="makes__wrap">
			<ul class="makes__list makes__list--popular">
				<makes-item-popular v-for="index in 8"
				                    :key="index"
				                    :title="allMarks[index].title" />
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
					            @click="chooseMark(item)"
					            :key="item.id">
					</makes-item>
				</ul>
			</div>
		</div>
	</div>

</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
	computed: {
		...mapGetters({
			allMarks: 'marks/marks/allMarks',
			alphabetMarks: 'marks/marks/alphabetMarks',
		})
	},
	methods: {
		...mapActions({
			chooseMark:'modal/modal-choose-car/chooseMark'
		})
	}
}
</script>