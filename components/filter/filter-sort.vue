<template>
	<div class="catalog__filter filter">
		<div class="filter__catalog-wrap">
			<div class="filter__buttons-wrap">
				<div class="filter__buttons-filter">
					<button-filter @click="openFilter()" />
				</div>
				<div class="filter__buttons-sort select">
					<div class="button button--action button--text filter__button"
					     @click="isActive = !isActive">
						<svg-icon class="button__icon"
						          name="icon-sort"></svg-icon>
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
				<button-view-s @click="changeView('s')"/>
				<button-view-l @click="changeView('l')"/>
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
		}
	},
	computed: {
		...mapGetters({
			sort: 'filters/filters/sort'
		}),
		currentSort() {
			if (this.sort === 'price|asc') {
				return 'Цена: Сначала дешевле'
			} else if (this.sort === 'price|desc') {
				return 'Цена: Сначала дороже'
			} else if (this.sort === 'run|asc') {
				return 'Пробег: Минимальный пробег'
			} else if (this.sort === 'year|desc') {
				return 'Год: Сначала новее'
			}
		}
	},
	methods: {
		...mapActions({
			getFilters: 'filters/filters/getFilters',
			openModal: 'modal/modal-main/openModal'
		}),
		...mapMutations({
			setSort: 'filters/filters/SET_SORT',
			setView:'catalog/catalog-cars/SET_VIEW'
		}),
		changeView(type){
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
			this.setSort(sort)
			await this.getFilters()
		}
	}
}
</script>