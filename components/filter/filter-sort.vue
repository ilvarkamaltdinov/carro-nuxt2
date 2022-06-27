<template>
	<div class="catalog__filter filter">
		<div class="filter__catalog-wrap">
			<div class="filter__buttons-wrap">
				<div class="filter__buttons-filter" v-if="!modal">
					<button-filter @click="openFilter()" />
				</div>
				<div class="filter__buttons-sort select">
					<div class="button button--action button--text filter__button"
					     @click="isActive = !isActive">
						<svg-icon class="button__icon"
						          name="icon-sort"/>
						<span class="button__text">{{ currentSort }}</span>
						<transition name="modal">
							<ul v-show="isActive"
							    class="select__list">
								<li class="select__item"
								    @click="sortChosen('price|asc')">
									Сначала дешевле
								</li>
								<li class="select__item"
								    @click="sortChosen('price|desc')">
									Сначала дороже
								</li>
								<li class="select__item"
								    @click="sortChosen('run|asc')">
									Минимальный пробег
								</li>
								<li class="select__item"
								    @click="sortChosen('year|desc')">
									Сначала новее
								</li>
							</ul>
						</transition>
					</div>
				</div>
			</div>
			<div class="filter__buttons-wrap">
				<button-view-s @click="changeView('s')" />
				<button-view-l @click="changeView('l')" />
			</div>
		</div>
	</div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
	data() {
		return {
			isActive: false,
			sortList: {
				'price|asc': 'Цена: Сначала дешевле',
				'price|desc': 'Цена: Сначала дороже',
				'run|asc': 'Пробег: Минимальный пробег',
				'year|desc': 'Год: Сначала новее'
			}
		}
	},
	props: {
		modal: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		...mapGetters({
			sort_in_filter: 'filters/filters/sort',
			sort_in_modal: 'modal/modal-choose/sort',
		}),
		currentSort() {
			if (this.modal) {
				return this.sortList[this.sort_in_modal]
			} else{
				return this.sortList[this.sort_in_filter]
			}
		}
	},
	methods: {
		...mapActions({
			getFilters: 'filters/filters/getFilters',
			getOffers: 'modal/modal-choose/getOffers',
			openModal: 'modal/modal-main/openModal'
		}),
		...mapMutations({
			setSort: 'filters/filters/SET_SORT',
			setModalSort: 'modal/modal-choose/SET_MODAL_SORT',
			setView: 'catalog/catalog-cars/SET_VIEW'
		}),
		changeView(type) {
			this.setView(type)
		},
		openFilter() {
			let payload = {
				modal_component: 'modal-filter-mobile',
				modal_data: 'filter-mobile',
				modal_title: 'Фильтр',
			}
			this.openModal(payload)
		},
		async sortChosen(sort) {
			if (this.modal) {
				this.setModalSort(sort)
				await this.getOffers()
			} else {
				this.setSort(sort)
				await this.getFilters()
			}
			
		}
	}
}
</script>