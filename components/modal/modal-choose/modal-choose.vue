<template>
	<div>
		<div class="modal__options">
			<div class="tabs tabs--modal">
				<ul class="tabs__list"
				    id="tabs"
				    role="tablist">
					<tabs-item :is-active="tabComponent === 'mark'">
						<button class="tabs__link"
						        @click="tabClick('mark')">
							{{ currentMark ? '1. ' + currentMark.title : '1. Марка' }}
						</button>
					
					</tabs-item>
					<tabs-item :is-active="tabComponent === 'model'"
					           :class="{'tabs__item--disabled':!currentMark}">
						<button class="tabs__link"
						        @click="tabClick('model')">
							{{ currentModel ? '2. ' + currentModel.title : '2. Модель' }}
						</button>
					</tabs-item>
					<tabs-item :is-active="tabComponent === 'generation'"
					           :class="{'tabs__item--disabled':!currentModel}">
						<button class="tabs__link"
						        @click="tabClick('generation')">
							{{ currentGeneration ? '3. ' + currentGeneration.name : '3. Поколение' }}
						</button>
					</tabs-item>
					<tabs-item :is-active="tabComponent === 'car'"
					           :class="{'tabs__item--disabled':!currentGeneration}">
						<button class="tabs__link"
						        @click="tabClick('car')">
							4. Автомобиль
						</button>
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
			
			currentMark: 'modal/modal-choose/currentMark',
			currentModel: 'modal/modal-choose/currentModel',
			currentGeneration: 'modal/modal-choose/currentGeneration',
			tabComponent: 'modal/modal-choose/tabComponent'
		}),
		currentComponent() {
			if (this.tabComponent === 'mark') {
				return 'modal-choose-mark'
			}
			if (this.tabComponent === 'model') {
				return 'modal-choose-model'
			}
			if (this.tabComponent === 'generation') {
				return 'modal-choose-generation'
			}
			if (this.tabComponent === 'car') {
				return 'modal-choose-cars'
			}
		}
	},
	methods: {
		...mapMutations({
			setTabComponent: 'modal/modal-choose/SET_TAB_COMPONENT'
		}),
		tabClick(index) {
			this.setTabComponent(index)
		}
	},
}
</script>