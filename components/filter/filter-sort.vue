<template>
	<div class="catalog__filter filter">
		<div class="filter__catalog-wrap">
			<div class="filter__buttons-wrap">
				<div class="filter__buttons-filter">
					<button-filter />
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
				<button-view-s />
				<button-view-l />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		sort: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			isActive: false,
		}
	},
	computed: {
		currentSort() {
			if (this.sort === 'price|asc') {
				return 'Цена: по возрастанию'
			} else if (this.sort === 'price|desc') {
				return 'Цена: по убыванию'
			} else if (this.sort === 'run|asc') {
				return 'Пробег: по возрастанию'
			} else if (this.sort === 'year|desc') {
				return 'Год: по убыванию'
			}
		}
	},
	methods: {
		sortChosen(sort) {
			this.$emit('sortChosen', sort)
		}
	}
}
</script>