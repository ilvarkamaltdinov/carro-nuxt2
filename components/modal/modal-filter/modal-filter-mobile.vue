<template>
	<div class="modal__wrap">
		<div class="filter filter--modal">
			<ul class="filter__menu-list">
				<li class="filter__menu-item"
				    @click="openFilterModal('mark')">
					<div class="filter__menu-text">
						{{ mark_select_title }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow" />
				</li>
				<li class="filter__menu-item"
				    @click="openFilterModal('folder')">
					<div class="filter__menu-text">
						{{ folder_select_title }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"></svg-icon>
				</li>
				<li class="filter__menu-item"
				    @click="openFilterModal('generation')">
					<div class="filter__menu-text">
						{{ generation_select_title }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"></svg-icon>
				</li>
				<li class="filter__menu-item"
				    @click="openFilterModal('engine-type')">
					<div class="filter__menu-text">
						{{ engine_type_select_title }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"></svg-icon>
				</li>
				<li class="filter__menu-item"
				    @click="openFilterModal('gearbox')">
					<div class="filter__menu-text">
						{{ gearbox_select_title }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"></svg-icon>
				</li>
				<li class="filter__menu-item"
				    @click="openFilterModal('drive-type')">
					<div class="filter__menu-text">
						{{ drive_type_select_title }}
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
			filter: 'filters/filters/filters',
			chosen: 'filters/filters/chosen'
		}),
		mark_select_title() {
			return this.chosen.mark ?
					this.chosen.mark.map(val => val.title).join(', ')
					: 'Марка'
		},
		folder_select_title() {
			return this.chosen.folder ?
					this.chosen.folder.map(val => val.title).join(', ')
					: 'Модель'
		},
		generation_select_title() {
			return this.chosen.generation ?
					this.chosen.generation.map(val => val.title).join(', ')
					: 'Поколение'
		},
		engine_type_select_title() {
			return this.chosen.engineType ?
					this.chosen.engineType.map(val => val.title).join(', ')
					: 'Двигатель'
		},
		drive_type_select_title() {
			return this.chosen.driveType ?
					this.chosen.driveType.map(val => val.title).join(', ')
					: 'Привод'
		},
		gearbox_select_title() {
			return this.chosen.gearbox ?
					this.chosen.gearbox.map(val => val.title).join(', ')
					: 'КПП'
		},
	},
	methods: {
		...mapActions({
			openModal: 'modal/modal-main/openModal',
		}),
		openFilterModal(type) {
			let modalComponent
			if (type === 'mark' ||
					type === 'drive-type' ||
					type === 'engine-type' ||
					type === 'gearbox') {
				modalComponent = `modal-filter-${type}`
			}
			if (type === 'folder') {
				modalComponent = this.chosen.mark ? 'modal-filter-folder' : 'modal-filter-mark'
			}
			let payload = {
				modal_component: `modal-filter`,
				modal_title: 'Фильтр',
				modal_data: {type: modalComponent}
			}
			this.openModal(payload)
		}
	}
}
</script>