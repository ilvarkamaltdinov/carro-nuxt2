<template>
	<div>
		<div class="filter filter--modal">
			<ul class="filter__menu-list">
				<li class="filter__menu-item"
				    @click="openFilterModal('mark')">
					<div class="filter__menu-text">
						{{ marksSelectTitle }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow" />
				</li>
				<li class="filter__menu-item"
				    @click="openFilterModal('model')">
					<div class="filter__menu-text">
						{{ modelSelectTitle }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"></svg-icon>
				</li>
				<li class="filter__menu-item"
				    @click="openFilterModal('generation')">
					<div class="filter__menu-text">
						{{ generationSelectTitle }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"></svg-icon>
				</li>
				<li class="filter__menu-item"
				    @click="openFilterModal('engine-type')">
					<div class="filter__menu-text">
						{{ engineTypeSelectTitle }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"></svg-icon>
				</li>
				<li class="filter__menu-item"
				    @click="openFilterModal('gearbox')">
					<div class="filter__menu-text">
						{{ gearboxSelectTitle }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"></svg-icon>
				</li>
				<li class="filter__menu-item"
				    @click="openFilterModal('drive-type')">
					<div class="filter__menu-text">
						{{ driveTypeSelectTitle }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"></svg-icon>
				</li>
			</ul>
			<div class="filters__more">
				<button-show>Больше фильтров</button-show>
			</div>
			<!--<ul class="filter__menu-list filter__menu-list&#45;&#45;more">-->
			<!--	<li class="filter__menu-group">-->
			<!--		<h2 class="heading heading&#45;&#45;h3">Цена</h2>-->
			<!--		<range-price />-->
			<!--	</li>-->
			<!--	<li class="filter__menu-group">-->
			<!--		<h2 class="heading heading&#45;&#45;h3">Год</h2>-->
			<!--		<range-year />-->
			<!--	</li>-->
			<!--</ul>-->
		</div>
		<div class="page-main__button-fixed">
			<button-fixed />
		</div>
	</div>
</template>
<script>

import {mapActions, mapGetters} from 'vuex'

export default {
	data() {
		return {
			allFilters: false,
		}
	},
	computed: {
		...mapGetters({
			chosenMarkArray: 'filters/filters/chosenMarkArray',
			chosenModelArray: 'filters/filters/chosenModelArray',
			chosenGenerationArray: 'filters/filters/chosenGenerationArray',
			chosenEngineTypeArray: 'filters/filters/chosenEngineTypeArray',
			chosenGearboxArray: 'filters/filters/chosenGearboxArray',
			chosenDriveTypeArray: 'filters/filters/chosenDriveTypeArray',
		}),
		marksSelectTitle() {
			console.log(1111,this.chosenMarkArray)
			return this.chosenMarkArray.length ?
					this.chosenMarkArray.map(val => val.title).join(', ')
					: 'Марка'
		},
		modelSelectTitle() {
			return this.chosenModelArray.length ?
					this.chosenModelArray.map(val => val.title).join(', ')
					: 'Модель'
		},
		generationSelectTitle() {
			return this.chosenGenerationArray.length ?
					this.chosenGenerationArray.map(val => val.title).join(', ')
					: 'Поколение'
		},
		engineTypeSelectTitle() {
			return this.chosenEngineTypeArray.length ?
					this.chosenEngineTypeArray.map(val => val.title).join(', ')
					: 'Двигатель'
		},
		driveTypeSelectTitle() {
			return this.chosenDriveTypeArray.length ?
					this.chosenDriveTypeArray.map(val => val.title).join(', ')
					: 'Привод'
		},
		gearboxSelectTitle() {
			return this.chosenGearboxArray.length ?
					this.chosenGearboxArray.map(val => val.title).join(', ')
					: 'КПП'
		},
	},
	methods: {
		...mapActions({
			openModal: 'modal/modal-main/openModal',
		}),
		openFilterModal(type) {
			let payload = {
				modal_component: `modal-filter`,
				modal_title: 'Фильтр',
				modal_data: type
			}
			this.openModal(payload)
		}
	}
}
</script>