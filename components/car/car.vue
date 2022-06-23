<template>
	<section class="page-main__car car" v-if="offer">
		<div class="grid grid--container">
			<div class="heading-group heading-group--h1 grid__col-6">
				<div class="heading-group__wrap">
					<heading-h1>
						{{ offer.mark.title }} {{ offer.folder.title }}
					</heading-h1>
					<span class="heading-group__label heading-group__label--car">
						{{ offer.generation.name }}
						<span class="heading-group__year">
							{{ offer.year }}
						</span>
					</span>
				</div>
			</div>
			<div class="car__top-buttons grid__col-6">
				<button class="button button--icon button--link">
					Обратный звонок
					<svg-icon class="icon"
					          name="icon-callback" />
				</button>
				<a href="tel:+74952452342"
				   class="button button--icon button--link">
					+7 495 245-23-42
					<svg-icon class="icon"
					          name="icon-call" />
				</a>
			</div>
		</div>
		<div class="car__slider-wrap">
			<div class="grid grid--container">
				<car-slider />
			</div>
		</div>
		<div class="grid grid--car grid--container grid__col-12">
			<car-buy />
			<car-info />
		</div>
		<div class="grid grid--container">
			<benefits-car />
			<!--<car-credit/>-->
		</div>
	</section>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import usedOffer from "~/apollo/queries/usedOffer"
export default {
	computed: {
		...mapGetters({
			offer: 'catalog/catalog-cars/offer'
		})
	},
  async fetch(){
		let variables = {
			site_id: this.$config.site_id,
			mark_slug: this.$route.params.mark,
			folder_slug: this.$route.params.model,
			external_id: Number(this.$route.params.car)
		}
		let response = await this.request({query:usedOffer, variables: variables})
		this.setOffer(response.data.offer)
	},
	methods:{
		...mapMutations({
			setOffer: 'catalog/catalog-cars/SET_OFFER',
			setLastUsedPage: 'filters/filters/SET_LAST_USED_PAGE',
      setFilterClick: 'filters/filters/SET_IS_FILTER_CLICK',
      setIsOfferClick: 'filters/filters/SET_IS_OFFER_CLICK'
		}),
    ...mapActions({
      request: 'filters/filters/request',
    }),
	}
}
</script>
