<template>
	<div v-if="offer">
		<section class="page-main__car car"
		         v-show="carPageLoaded">
			<div class="grid grid--container">
				<div class="heading-group heading-group--h1 grid__col-6">
					<div class="heading-group__wrap">
						<heading-h1>
							{{ pageTitle }}
						</heading-h1>
						<span class="heading-group__label heading-group__label--car"
						      v-if="offer.generation">
							{{ offer.generation.name }}
							<span class="heading-group__year">
								{{ offer.year }}
							</span>
						</span>
					</div>
				</div>
				<div class="car__top-buttons grid__col-6">
					<button-typical text="Обратный звонок"
					                class="button--icon button--link"
					                icon="icon-callback" />
					<button-call-modal :phone="offer.dealer.phone"/>
				</div>
			</div>
			<div class="car__slider-wrap">
				<div class="grid grid--container">
					<car-slider />
				</div>
			</div>
			<div class="grid grid--car grid--container grid__col-12">
				<car-buy />
				<transition name="slide-fade">
					<car-fixed v-if="showFixed" />
				</transition>
				<car-info />
			</div>
			<div class="grid grid--container">
				<benefits class="car__benefits" :benefits="benefitsCar" />
				<car-credit :offer="offer" />
			</div>
		</section>
		<skeleton-car v-show="!carPageLoaded" />
	</div>
	<skeleton-car v-else />
</template>
<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import offer from "@/apollo/queries/offer/offer"

export default {
	props: {
		pageTitle: String
	},
	data() {
		return {
			showFixed: false,
		}
	},
	computed: {
		...mapGetters({
			offer: 'catalog/catalog-cars/offer',
			carPageLoaded: 'catalog/catalog-cars/carPageLoaded',
			benefitsCar: 'benefits/benefitsCar'
		})
	},
	async fetch() {
		let variables = {
			site_id: this.$config.site_id,
			mark_slug: this.$route.params.mark,
			folder_slug: this.$route.params.model,
			external_id: Number(this.$route.params.car)
		}
		let response = await this.request({query: offer, variables: variables})
		this.setOffer(response.data.offer)
	},
	beforeMount() {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		...mapMutations({
			setOffer: 'catalog/catalog-cars/SET_OFFER',
			setFilterClick: 'filters/filters/SET_IS_FILTER_CLICK',
			setIsOfferClick: 'filters/filters/SET_IS_OFFER_CLICK',
		}),
		...mapActions({
			request: 'filters/filters/request',
		}),
		handleScroll() {
			this.showFixed = process.client && this.$device.isMobile && window.scrollY > 499;
		}
	}
}
</script>
