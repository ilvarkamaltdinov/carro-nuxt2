<template>
	<section class="catalog__filter catalog__filter--aside">
		<div class="heading-group heading-group--filter">
			<div class="heading-group__wrap">
				<h2 class="heading heading--h2">Фильтр</h2>
				<span class="heading-group__label">1488 автомобиля в наличии</span>
			</div>
		</div>
		<div class="filter filter--aside">
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
					          name="icon-arrow"/>
				</li>
				<li class="filter__menu-item"
				    v-if="showGeneration"
				    @click="openFilterModal('generation')">
					<div class="filter__menu-text">
						{{ generation_select_title }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"/>
				</li>
				<li class="filter__menu-item"
				    @click="openFilterModal('engine-type')">
					<div class="filter__menu-text">
						{{ engine_type_select_title }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"/>
				</li>
				<li class="filter__menu-item"
				    @click="openFilterModal('body-type')">
					<div class="filter__menu-text">
						{{ body_type_select_title }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"/>
				</li>
				<li v-if="allFilters"
				    class="filter__menu-item"
				    @click="openFilterModal('gearbox')">
					<div class="filter__menu-text">
						{{ gearbox_select_title }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"/>
				</li>
				<li v-if="allFilters"
				    class="filter__menu-item"
				    @click="openFilterModal('drive-type')">
					<div class="filter__menu-text">
						{{ drive_type_select_title }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"/>
				</li>
			</ul>
			<ul v-if="allFilters"
			    class="filter__menu-list filter__menu-list--more">
				<li class="filter__menu-group">
					<h2 class="heading heading--h3">Цена</h2>
					<range-price />
				</li>
				<li class="filter__menu-group">
					<h2 class="heading heading--h3">Год</h2>
					<range-year />
				</li>
			</ul>
			<div class="filters__more">
				<button-typical :text="allFilters ? 'Скрыть' : 'Больше фильтров'" class="button--show" @click="allFilters = !allFilters"/>
			</div>
			
		</div>
	</section>
</template>
<script>

import {mapActions, mapGetters, mapMutations} from 'vuex'
import ButtonTypical from "@/components/button/button-typical";

export default {
	components: {ButtonTypical},
	data() {
		return {
			allFilters: false,
		}
	},
	computed: {
		...mapGetters({
			chosen: 'filters/filters/chosen'
		}),
		mark_select_title() {
			return this.chosen.mark?.map(val => val.title).join(', ') || 'Марка'
		},
		folder_select_title() {
			return this.chosen.folder?.map(val => val.title).join(', ') || 'Модель'
		},
		generation_select_title() {
			return this.chosen.generation?.map(val => val.title).join(', ') || 'Поколение'
		},
		engine_type_select_title() {
			return this.chosen.engineType?.map(val => val.title).join(', ') || 'Двигатель'
		},
		drive_type_select_title() {
			return this.chosen.driveType?.map(val => val.title).join(', ') || 'Привод'
		},
		body_type_select_title() {
			return this.chosen.bodyType?.map(val => val.title).join(', ') || 'Кузов'
		},
		gearbox_select_title() {
			return this.chosen.gearbox?.map(val => val.title).join(', ') || 'КПП'
		},
		showGeneration(){
			return this.chosen.mark?.length === 1 && this.chosen.folder?.length === 1;
		}
	},
	methods: {
		...mapMutations({
			setAllChosen:'filters/filters/SET_ALL_CHOSEN'
		}),
		...mapActions({
			openModal: 'modal/modal-main/openModal',
		}),
		openFilterModal(type) {
			let modalComponent
			if (type === 'mark' ||
					type === 'drive-type' ||
					type === 'generation' ||
					type === 'engine-type' ||
					type === 'body-type' ||
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
	},
}
</script>