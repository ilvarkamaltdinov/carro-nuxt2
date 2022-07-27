<template>
	<section class="modal modal--search">
		<h2 class="visually-hidden">Поиск автомобилей</h2>
		<div class="modal__wrap grid grid__container">
			<div class="search grid__col-12">
				<ul class="search__list"
				    v-if="searchResult.length && modalSearch">
					<li class="search__item"
					    v-for="item in searchResult"
					    :key="item.id">
						<nuxt-link class="search__link"
						           @click.native="searchClick"
						           :to="`/used/${item.slug}`">
							<svg-icon class="search__icon":name="`icon-${item.slug}`"/>
							<div class="search__text">
								<div class="search__heading">{{ item.title }}</div>
								<div class="search__content">С пробегом</div>
							</div>
						</nuxt-link>
					</li>
				</ul>
				<div v-else
				     class="search__content">Ничего не найдено
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";

export default {
	computed: {
		...mapGetters({
			searchResult: 'modal/modal-search/searchResult',
			modalSearch: 'modal/modal-search/modalSearch'
		})
	},
	methods: {
		...mapMutations({
			setModalSearch: 'modal/modal-search/setModalSearch',
			setMobileSearch: 'modal/modal-search/setMobileSearch',
			setModalMarks: 'modal/modal-marks/setModalMarks',
		}),
		searchClick() {
			this.setModalSearch('clear')
			this.setMobileSearch(false)
			this.setModalMarks(false)
		}
	}
}
</script>