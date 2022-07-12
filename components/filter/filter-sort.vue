<template>
	<div class="catalog__filter filter">
		<div class="filter__catalog-wrap">
			<div class="filter__buttons-wrap">
				<div class="filter__buttons-filter"
				     v-if="!modal">
					<button-filter @click="openFilter()" />
				</div>
				<div class="filter__buttons-sort select">
					<div class="button button--action button--text filter__button" @click="isActive = !isActive">
						<svg-icon class="button__icon"
						          :name="currentIcon" />
						<span class="button__text">{{ currentSort }}</span>
						<transition name="modal">
							<ul v-if="!$device.isMobile" v-show="isActive"
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
			sortModal: 'modal/modal-choose/sort', // СОРТИРОВКА ДЛЯ КАТАЛОГА
			sort: 'filters/filters/sort' // СОРТИРОВКА ДЛЯ ФИЛЬТРОВ
		}),
		currentIcon() {
			if (this.sort.split('|')[1]==='asc') {
				return 'icon-sort'
			} else {
				return 'icon-sort-alt'
			}
		},
		currentSort() {
			if (this.modal) {
				return this.sortList[this.sort_in_modal]
			} else {
				return this.sortList[this.sort_in_filter]
			}
		}
	},
	mounted() {
		if (this.$route.query.sort && !this.modal) {
			this.sortChosen(this.$route.query.sort)
		}
	},
	methods: {
		...mapActions({
			getOffers: 'modal/modal-choose/getOffers',
			openModal: 'modal/modal-main/openModal'
		}),
		...mapMutations({
			setSort: 'filters/filters/SET_SORT', //СОРТИРВОКА ДЛЯ ФИЛЬТРОВ
			setModalSort: 'modal/modal-choose/SET_MODAL_SORT',//СОРТИРВОКА ДЛЯ МОДАЛКИ КАТОАЛОГА
			setView: 'catalog/catalog-cars/SET_VIEW',
			setLoading:'filters/filters/SET_LOADING'
		}),
		async changeView(type) {
			await this.setLoading(true)
			await this.setView(type)
			setTimeout(()=>{
				this.setLoading(false)
			},200)
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
				await this.$router.push({path: this.$route.fullPath, query: {sort: sort}});
			}
		}
	}
}
</script>