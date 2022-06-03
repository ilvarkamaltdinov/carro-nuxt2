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
				    @click="filterClick('mark')">
					<div class="filter__menu-text">
						{{ marksSelectTitle }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow" />
				</li>
				<li class="filter__menu-item"
				    @click="filterClick('model')">
					<div class="filter__menu-text">
						{{ modelSelectTitle }}
					</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"></svg-icon>
				</li>
				<li class="filter__menu-item">
					<div class="filter__menu-text">Поколение</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"></svg-icon>
				</li>
				<li class="filter__menu-item">
					<div class="filter__menu-text">Двигатель</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"></svg-icon>
				</li>
				<li class="filter__menu-item">
					<div class="filter__menu-text">КПП</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"></svg-icon>
				</li>
				<li class="filter__menu-item">
					<div class="filter__menu-text">Привод</div>
					<svg-icon class="filter__arrow"
					          name="icon-arrow"></svg-icon>
				</li>
			</ul>
			<div class="filters__more">
				<button-show>Больше фильтров</button-show>
			</div>
			<ul class="filter__menu-list filter__menu-list--more">
				<li class="filter__menu-group">
					<h2 class="heading heading--h3">Цена</h2>
					<range-price />
				</li>
				<li class="filter__menu-group">
					<h2 class="heading heading--h3">Год</h2>
					<range-year />
				</li>
			</ul>
		</div>
	</section>
</template>
<script>

import {mapActions, mapGetters, mapMutations} from 'vuex'
import capitalizeFirstLetter from "@/mixins/capitalizeFirstLetter";

export default {
	mixins: [capitalizeFirstLetter],
	data() {
		return {
			modalFilterMark: {
				// component: 'modal-filter',// мобилка
				component: 'modal-filter-mark',
				visibility: true
			},
			modalFilterModel: {
				// component: 'modal-filter',// мобилка
				component: 'modal-filter-model',
				visibility: true
			}
		}
	},
	mounted() {
		this.getFilters()
	},
	computed: {
		...mapGetters({
			chosenMarkArray: 'filters/filters/chosenMarkArray',
			chosenModelArray: 'filters/filters/chosenModelArray'
		}),
		marksSelectTitle() {
			return this.chosenMarkArray.length ?
					this.chosenMarkArray.map(val => val.title).join(', ')
					: 'Марка'
		},
		modelSelectTitle() {
			return this.chosenModelArray.length ?
					this.chosenModelArray.map(val => val.title).join(', ')
					: 'Модель'
		}
	},
	methods: {
		...mapActions({
			getFilters: 'filters/filters/getFilters'
		}),
		...mapMutations({
			setModalMain: 'modal/modal-main/SET_MODAL_MAIN',
		}),
		async filterClick(type) {
			if (type === 'mark') {
				this.setModalMain(this.modalFilterMark)
			}
			if (type === 'model') {
				if (this.chosenMarkArray.length) {
					this.setModalMain(this.modalFilterModel)
				} else {
					this.setModalMain(this.modalFilterMark)
				}
			}
		}
	}
}
</script>