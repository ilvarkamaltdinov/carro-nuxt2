<template>
	
	<div class="makes">
		<div class="makes__wrap">
			<ul class="makes__list makes__list--models">
				<makes-item v-for="item in generations"
				            :link="false"
				            :active="item === currentGeneration"
				            :for-chose-modal="true"
				            @choose="chooseGeneration(item)"
				            :item="item"
				            :key="item.id" />
			</ul>
		</div>
	</div>

</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
	methods: {
		...mapActions({
			chooseGeneration: 'modal/modal-choose/chooseGeneration'
		})
	},
	computed: {
		...mapGetters({
			generations: 'modal/modal-choose/generations',
			currentGeneration: 'modal/modal-choose/currentGeneration'
		})
	}
}
</script>