<template>
	<div>
		<div v-if="loading" class="catalog__list" :class="{'grid grid--catalog': !$device.isMobile}">
			<component :is="skeleton" v-for="i in 4" :key="i"/>
		</div>
		<div v-else class="catalog__list grid grid--catalog">
			<component :is="catalog"
			           :offer="offer"
			           :key="offer.id"
			           v-for="offer in offers_list" />
			<div class="grid__col-12" v-show="offers_list.length === 0">
				<div class="catalog__no-cars">
					<h2 class="heading heading--h2">Автомобили не найдены</h2>
					<div class="catalog__no-cars-text">Попробуйте изменить параметры поиска или обратите внимание на похожие модели:</div>
				</div>
			</div>
		</div>
		<client-only>
			<pagination v-if="offers" :offers="offers"/>
		</client-only>
		<!--<button-typical @click="moreOffers" text="Показать больше" class="button&#45;&#45;link button&#45;&#45;more"/>-->
	</div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	components: {},
	
	computed: {
		...mapGetters({
			view: 'filters/filters/view',
			offers: 'filters/filters/offers',
			loading: 'filters/filters/loading',
		}),
		skeleton() {
			return this.view === 's' ? 'skeleton-card-small' : 'skeleton-card-large'
		},
		catalog() {
			return this.view === 's' ? 'catalog-item-small-desktop' : 'catalog-item-large-desktop'
		},
		offers_list() {
			return this.offers ? this.offers.data : []
		}
	}
}
</script>