<template>
	<div>
		<ul class="filter__menu-list">
			<li class="filter__menu-item"
			    :class="{'filter__menu-item&#45;&#45;loading':false}"
			    @click="openFilterModal('mark')">
				<div class="filter__menu-text">
					{{ mark_select_title }}
				</div>
				<svg-icon class="filter__arrow"
				          name="icon-arrow" />
			</li>
			<li class="filter__menu-item"
			    :class="{'filter__menu-item--loading':false}"
			    @click="openFilterModal('folder')">
				<div class="filter__menu-text">
					{{ folder_select_title }}
				</div>
				<svg-icon class="filter__arrow"
				          name="icon-arrow" />
			</li>
			<li class="filter__menu-item"
			    :class="{'filter__menu-item--loading':false}"
			    v-if="showGeneration"
			    @click="openFilterModal('generation')">
				<div class="filter__menu-text">
					{{ generation_select_title }}
				</div>
				<svg-icon class="filter__arrow"
				          name="icon-arrow" />
			</li>
			<VueSlideToggle :open="allFilters">
				<li class="filter__menu-item"
				    :class="{'filter__menu-item--loading':false}"
				    @click="openFilterModal('engine-type')">
					<div class="filter__menu-text">
						{{ engine_type_select_title }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow" />
				</li>
				<li class="filter__menu-item"
				    :class="{'filter__menu-item--loading':false}"
				    @click="openFilterModal('body-type')">
					<div class="filter__menu-text">
						{{ body_type_select_title }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow" />
				</li>
				<li class="filter__menu-item"
				    :class="{'filter__menu-item--loading':false}"
				    @click="openFilterModal('gearbox')">
					<div class="filter__menu-text">
						{{ gearbox_select_title }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow" />
				</li>
				<li class="filter__menu-item"
				    :class="{'filter__menu-item--loading':false}"
				    @click="openFilterModal('drive-type')">
					<div class="filter__menu-text">
						{{ drive_type_select_title }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow" />
				</li>
			</VueSlideToggle>
		
		</ul>
		<div class="filter__more">
			<button-typical :text="allFilters ? 'Меньше фильтров' : 'Больше фильтров'"
			                class="button--show"
			                :class="{'button--show-active': allFilters }"
			                @click="allFilters = !allFilters" />
		</div>
		<ul v-if="!headerFilterClick" class="filter__menu-list filter__menu-list--more">
			<skeleton-filter-range title="Цена"
			                       v-if="loadingRange" />
			<li class="filter__menu-group"
			    v-else>
				<h2 class="heading heading--h3">Цена</h2>
				<range-price />
			</li>
			<skeleton-filter-range title="Год"
			                       v-if="loadingRange" />
			<li class="filter__menu-group"
			    v-else>
				<h2 class="heading heading--h3">Год</h2>
				<range-year />
			</li>
		</ul>
	</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
	data() {
		return {
			allFilters: false,
			// rangeLoading: !this.$device.isMobile
		}
	},
	
	computed: {
		...mapGetters({
			chosen: 'filters/filters/chosen',
			filters: 'filters/filters/filters',
			loading: 'filters/filters/loading',
			offers: 'filters/filters/offers',
			loadingRange: 'filters/filters/loadingRange',
			headerFilterClick: 'click/headerFilterClick'
		}),
		mark_select_title() {
			return this.chosen.mark?.map(val => val.title).sort().join(', ') || 'Марка'
		},
		folder_select_title() {
			return this.chosen.folder?.map(val => val.title).sort().join(', ') || 'Модель'
		},
		generation_select_title() {
			return this.chosen.generation?.map(val => val.title).sort().join(', ') || 'Поколение'
		},
		engine_type_select_title() {
			return this.chosen.engineType?.map(val => val.title).sort().join(', ') || 'Двигатель'
		},
		drive_type_select_title() {
			return this.chosen.driveType?.map(val => val.title).sort().join(', ') || 'Привод'
		},
		body_type_select_title() {
			return this.chosen.bodyType?.map(val => val.title).sort().join(', ') || 'Кузов'
		},
		gearbox_select_title() {
			return this.chosen.gearbox?.map(val => val.title_short_rus).sort().join(', ') || 'КПП'
		},
		showGeneration() {
			return this.chosen.mark?.length === 1 && this.chosen.folder?.length === 1;
		}
	},
	methods: {
		...mapMutations({
			setAllChosen: 'filters/filters/SET_ALL_CHOSEN'
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