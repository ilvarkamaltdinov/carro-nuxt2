<template>
	<div>
		<div v-if="loading"
		     class="catalog__list "
		     :class="{'grid grid--catalog': !$device.isMobile}">
			<component :is="skeleton"
			           v-for="i in 4"
			           :key="i" />
		</div>
		<div v-else
		     class="catalog__list grid grid--catalog">
			<component :is="catalog"
			           :offer="offer"
			           :key="offer.id"
			           v-for="offer in moreOffersData.data" />
			<div class="grid__col-12"
			     v-show="moreOffersData.data.length === 0">
				<div class="catalog__no-cars">
					<h2 class="heading heading--h2">Автомобили не найдены</h2>
					<div class="catalog__no-cars-text">Попробуйте изменить параметры поиска или обратите внимание на похожие
					                                   модели:
					</div>
				</div>
			</div>
		</div>
		<button-typical @click="moreOffers"
		                v-if="offers && offers.last_page > 1 && offers.current_page < offers.last_page"
		                text="Показать больше"
		                class="button--link button--more" />
		<client-only>
			<pagination :active-button="Number(offers.current_page)" v-if="offers"
			            :offers="offers" />
		</client-only>
	</div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import offers from "@/apollo/queries/offer/offers";

export default {
	computed: {
		...mapGetters({
			view: 'filters/filters/view',
			offers: 'filters/filters/offers',
			loading: 'filters/filters/loading',
		}),
		moreOffersData(){
			return this.offers
		},
		skeleton() {
			return this.view === 's' ? 'skeleton-card-small' : 'skeleton-card-large'
		},
		catalog() {
			return this.view === 's' ? 'catalog-item-small-desktop' : 'catalog-item-large-desktop'
		}
	},
	methods:{
		...mapActions({
			request: 'filters/filters/request',
		}),
		async filterRequest(assignVariables) {
			try {
				let response = await this.request({query: offers, variables: assignVariables})
				this.offers.data = [...this.offers.data, ...response.data.offers.data]
				this.offers.current_page = response.data.offers.current_page
				await this.$store.commit('filters/filters/SET_OFFERS', this.offers)
			} catch (error) {
				return this.$nuxt.error({statusCode: 404, message: '404'})
			}
		},
		moreOffers() {
			this.filterRequest({
				url: this.$route.path === '/best-moscow-autosalon' ? '/used' : this.$route.path,
				page: Number(this.offers.current_page + 1),
				dateFormat: 'j F Y года.',
				mark_slug_array: this.$stringToArray(this.$route.query.mark_slug_array),
				folder_slug_array: this.$stringToArray(this.$route.query.folder_slug_array),
				generation_slug_array: this.$stringToArray(this.$route.query.generation_slug_array),
				engine_type_id_array: this.$numberToArray(this.$route.query.engine_type_id_array),
				gearbox_id_array: this.$numberToArray(this.$route.query.gearbox_id_array),
				drive_type_id_array: this.$numberToArray(this.$route.query.drive_type_id_array),
				body_type_id_array: this.$numberToArray(this.$route.query.body_type_id_array),
				price_from: Number(this.$route.query.price_from),
				price_to: Number(this.$route.query.price_to),
				year_from: Number(this.$route.query.year_from),
				year_to: Number(this.$route.query.year_to),
				sort: this.$route.query.sort || this.sort,
				limit: 8
			})
		},
	}
}
</script>