<template>
	<div class="catalog__filter filter">
		<div class="filter__catalog-wrap">
			<div class="filter__buttons-wrap">
				<div class="filter__buttons-filter" v-if="!modal">
					<button-filter @click="openFilter()" />
				</div>
				<div tabindex="1"
				     class="filter__buttons-sort select"
				     @focusout="isActive = false">
					<div class="button button--action button--text filter__button"
					     @click="isActive = !isActive">
						<svg-icon class="button__icon"
						          :name="currentIcon" />
						<span class="button__text">{{ currentSort }}</span>
						<transition name="select">
							<ul v-if="!$device.isMobile"
							    v-show="isActive"
							    class="select__list">
								<li class="select__item"
								    v-for="(key, value) in sortList"
								    @click="sortChosen(value)">
									{{ key }}
								</li>
							</ul>
						</transition>
						<select v-if="$device.isMobile"
						        class="filter__buttons-sort-select"
						        @change="sortChosen('mobile', $event.target.value)">
							<option v-for="(key, value) in sortList"
							        :selected="value === $route.query.sort ||value === sort"
							        :value="value">
								{{ key }}
							</option>
						</select>
					</div>
				</div>
			</div>
			<div class="filter__buttons-wrap filter__buttons-wrap--view">
				<button-view-s :modal="modal"
				               @click="changeView('s')" />
				<button-view-l :modal="modal"
				               @click="changeView('l')" />
			</div>
		</div>
	</div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import declension from "@/mixins/declension";

export default {
	mixins: [declension],
	data() {
		return {
			isActive: false,
			sortList: {
				'price|asc': 'Сначала дешевле',
				'price|desc': 'Сначала дороже',
				'year|desc': 'Сначала новее',
				'run|asc': 'Минимальный пробег'
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
			filteredTotal: 'filters/filters/filteredTotal',
			sortModal: 'modal/modal-choose/sort', // СОРТИРОВКА ДЛЯ КАТАЛОГА
			sort: 'filters/filters/sort', // СОРТИРОВКА ДЛЯ ФИЛЬТРОВ
			viewModal: 'modal/modal-choose/view', // ОТОБРАЖЕНИЕ ДЛЯ КАТАЛОГА
			viewFilter: 'filters/filters/view', // ОТОБРАЖЕНИЕ ДЛЯ ФИЛЬТРОВ
		}),
		currentCarsCount() {
			return this.filteredTotal + ' ' + this.declension({
				count: this.filteredTotal,
				one: 'автомобиль',
				few: 'автомобиля',
				many: 'автомобилей'
			}) + ' в наличии'
		},
		currentIcon() {
			if (this.sort.split('|')[1] === 'asc') {
				return 'icon-sort'
			} else {
				return 'icon-sort-alt'
			}
		},
		currentSort() {
			if (this.modal) {
				return this.sortList[this.sortModal]
			} else {
				return this.sortList[this.sort]
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
			setViewCatalog: 'modal/modal-choose/SET_VIEW',//ОТОБРАЖЕНИЕ ДЛЯ МОДАЛКИ
			setViewFilters: 'filters/filters/SET_VIEW',//ОТОБРАЖЕНИЕ ДЛЯ ФИЛЬТРОВ
			setLoadingFilters: 'filters/filters/SET_LOADING',
			setLoadingCatalog: 'modal/modal-choose/SET_LOADING',
			setFilterClick: 'filters/filters/SET_IS_FILTER_CLICK'
		}),
		async changeView(type) {
			if (this.modal) {
				await this.setLoadingCatalog(true)
				await this.setViewCatalog(type)
				setTimeout(() => {
					this.setLoadingCatalog(false)
				}, 300)
			} else {
				await this.setLoadingFilters(true)
				await this.setViewFilters(type)
				setTimeout(() => {
					this.setLoadingFilters(false)
				}, 300)
			}
		},
		openFilter() {
			let payload = {
				modal_component: 'modal-filter-mobile',
				modal_data: 'filter-mobile',
				modal_title: 'Фильтр',
				modal_sub_title: this.currentCarsCount
			}
			this.openModal(payload)
		},
		async sortChosen(sort, value) {
			this.setFilterClick(true)
			if (sort === 'mobile') {
				if (this.modal) {
					this.setModalSort(value)
					await this.getOffers()
				} else {
          let query = {sort: value}
          if(Number(this.$route.query.page) > 1){
            query.page = 1
          }
					this.setSort(value)
					await this.$router.push({path: this.$route.fullPath, query: {sort: value}});
				}
			} else {
				if (this.modal) {
					this.setModalSort(sort)
					await this.getOffers()
				} else {
          let query = {sort: sort}
          if(Number(this.$route.query.page) > 1){
            query.page = 1
          }
					this.setSort(sort)
					await this.$router.push({path: this.$route.fullPath, query: {sort: sort}});
				}
			}

		}
	}
}
</script>
