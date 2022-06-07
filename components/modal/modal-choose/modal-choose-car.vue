<template>
	<div>
		<div class="modal__options">
			<div class="tabs tabs--modal">
				<ul class="tabs__list"
				    id="tabs"
				    role="tablist">
					<tabs-item :is-active="tabComponent === 'marks'"
					           @click="tabClick('marks')">
						{{ currentMark ? '1. ' + currentMark.title : '1. Выбрать марку' }}
					</tabs-item>
					
					<tabs-item :is-active="tabComponent === 'models'"
					           :class="{'disabled':!currentModel}"
					           @click="tabClick('models')">
						{{ currentModel ? '2. ' + currentModel.title : '2. Выбрать модель' }}
					</tabs-item>
					
					<tabs-item :is-active="tabComponent === 'cars'"
					           :class="{'disabled':!currentGeneration}"
					           @click="tabClick('cars')">
						3. Выбрать автомобиль
					</tabs-item>
				</ul>
			</div>
		</div>
		<component :is="currentComponent" />
	</div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
	computed: {
		...mapGetters({
			allMarksCount: 'marks/marks/allMarksCount',
			
			currentMark: 'modal/modal-choose-car/currentMark',
			currentModel: 'modal/modal-choose-car/currentModel',
			currentGeneration: 'modal/modal-choose-car/currentGeneration',
			tabComponent: 'modal/modal-choose-car/tabComponent'
		}),
		currentComponent() {
			if (this.tabComponent === 'marks') {
				return 'modal-choose-mark'
			}
			if (this.tabComponent === 'models') {
				return 'modal-choose-model'
			}
			if (this.tabComponent === 'cars') {
				return 'modal-choose-cars'
			}
		}
	},
	methods: {
		...mapMutations({
			setModalMain: 'modal/modal-main/SET_MODAL_MAIN',
			setTabComponent: 'modal/modal-choose-car/SET_TAB_COMPONENT'
		}),
		tabClick(index) {
			this.setTabComponent(index)
		}
	},
}
</script>

<style scoped
       lang="scss">
//TODO добавить стили
.disabled {
	cursor: auto;
	pointer-events: none;
}
</style>