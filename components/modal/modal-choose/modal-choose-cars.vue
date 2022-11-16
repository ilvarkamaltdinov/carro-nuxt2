<template>
	<!--TODO переименовать компонент как нибудь логичнее-->
	<div class="modal__wrap">
		<section class="page-main__catalog catalog grid">
			<h2 class="visually-hidden">Автомобили в наличии</h2>
			<div class="grid__col-8">
				<filter-sort modal />
				<div class="catalog__list grid grid--catalog">
					<component :is="component"
					           v-for="offer in offersList"
					           :offer="offer"
					           @choseClick="choseClick(offer)"
					           :choose="true"
					           :is-form="true"
					           :key="offer.id" />
				</div>

				<client-only>
					<infinite-loading :identifier="infiniteId" @infinite="getOffers"
					                  :throttle-limit="2500">
						<div slot="spinner">
							<div class="catalog__list grid grid--catalog">
								<component :is="skeleton"
								           v-for="i in 4"
								           :key="i" />
							</div>
						</div>
						<div slot="no-more"></div>
						<div slot="no-results"></div>
					</infinite-loading>
				</client-only>
			</div>
		</section>
	</div>

</template>
<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import offers from "@/apollo/queries/offer/offers";

export default {
	data() {
		return {
			offersList: [],
			page: 1,
			limit: 8,
      infiniteId: +new Date(),
		}
	},
  watch: {
    sort() {
      this.page = 1
      this.offersList = []
      this.infiniteId += 1
    }
  },
	methods: {
		...mapMutations({
			setCallbackCar: 'modal/modal-callback/SET_CALLBACK_CAR',
			setCurrentCar: 'modal/modal-choose/SET_CURRENT_CAR'
		}),
		...mapActions({
			closeModal: 'modal/modal-main/closeModal',
			request: 'request'
		}),
		choseClick(carInfo) {
			this.setCurrentCar(carInfo)
			this.closeModal()
		},
		async getOffers($state) {
			// await this.$store.commit('modal/modal-choose/SET_LOADING', true)
			let response = await this.request(
					{
						query: offers,
						variables: {
							page: this.page,
							limit: this.limit,
							sort: this.sort,
							dateFormat: 'j F Y года.',
							mark_slug_array: [this.currentMark.slug],
							folder_slug_array: [this.currentModel.slug],
							generation_slug_array: [this.currentGeneration.slug]
						}
					})
			if (response.data.offers.data.length) {
				this.page += 1
				this.offersList.push(...response.data.offers.data)
				$state.loaded()
			} else {
				$state.complete()
			}
			// // commit('SET_OFFERS', cars.data.offers.data)
			// await this.$store.commit('modal/modal-choose/SET_LOADING', false)
		},
	},
	computed: {
		...mapGetters({
			loading: 'modal/modal-choose/loading',
			view: 'modal/modal-choose/view',
			sort: 'modal/modal-choose/sort',
			currentMark: 'modal/modal-choose/currentMark',
			currentModel: 'modal/modal-choose/currentModel',
			currentGeneration: 'modal/modal-choose/currentGeneration',
		}),
		skeleton() {
			if (this.view === 's') {
				if (this.$device.isMobile) {
					return 'skeleton-card-large'
				} else {
					return 'skeleton-card-small'
				}
			} else {
				if (this.$device.isMobile) {
					return 'skeleton-card-small'
				} else {
					return 'skeleton-card-large'
				}

			}

		},
		component() {
			if (this.$device.isTablet) {
				if (this.view === 's') {
					return 'catalog-item-large-mobile'
				} else {
					return'catalog-item-large-desktop'
				}
			} else {
				if (this.view === 's') {
					return this.$device.isMobile ? 'catalog-item-large-mobile' : 'catalog-item-small-desktop'
				} else {
					return this.$device.isMobile ? 'catalog-item-small-mobile' : 'catalog-item-large-desktop'
				}
			}
		}
	}
}
</script>
