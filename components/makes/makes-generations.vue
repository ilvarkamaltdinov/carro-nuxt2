<template>
	
	<div class="makes">
		<div class="makes__wrap">
			<ul class="makes__list makes__list--models">
				<makes-item v-for="item in generations"
				            @click="chooseGeneration(item)"
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
			chooseGeneration: 'modal/modal-choose-car/chooseGeneration'
		})
	},
	computed: {
		...mapGetters({
			generations: 'modal/modal-choose-car/generations'
		})
	}
}
</script>