<template>
	<div class="makes">
		<div class="makes__wrap">
			<ul class="makes__list makes__list--models">
				<makes-item v-for="item in models"
				            :active="item === currentModel"
				            :for-chose-modal="true"
				            :is-active="activeTab === item.id"
				            @choose="chooseModel(item)"
				            :item="item"
				            :key="item.id" />
			</ul>
		</div>
	</div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
	data() {
		return {
			activeTab: null
		}
	},
	methods: {
		...mapActions({
			chooseModel: 'modal/modal-choose/chooseModel'
		}),
		choose(item) {
			this.activeTab = item.id
			this.chooseModel(item)
		}
	},
	computed: {
		...mapGetters({
			models: 'modal/modal-choose/models',
			currentModel: 'modal/modal-choose/currentModel'
		})
	}
}
</script>