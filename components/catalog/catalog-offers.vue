<template>
	<div class="grid__col-12 grid dealers dealers--catalog">
		<div class="dealers__item dealers__item--catalog grid__col-4"
		     v-for="dealer in currentDealers"
		     :key="dealer.id">
			<div class="dealers__features features">
				<div class="heading-group">
					<div class="heading-group__wrap">
						<h2 class="heading heading--h2">{{ dealer.title }}</h2>
						<span class="heading-group__label">{{ dealer.short_description }}</span>
					</div>
					<rating v-tippy="{
							content:`<div class='tippy__text'>Рейтинг дилера</div>`,
							animation:'scale',
							arrow: true,
					}"
					        :rating="dealer.rating"
					        :max="5" />
				</div>
			</div>
			<div class="dealers__item-img-wrap">
				<picture-component
						classes="dealers__item-img lazyload"
						:small="dealer.images[0].small | replaceApiUrl(api)"
						:small-webp="dealer.images[0].small_webp | replaceApiUrl(api)"
						:big="dealer.images[0].medium | replaceApiUrl(api)"
						:big-webp="dealer.images[0].medium_webp | replaceApiUrl(api)" />
				<button-typical @click="showMore(dealer.slug)"
				                button-class="button--show"
				                text="Подробнее о дилере" />
				<a class="button button--show button--show-link"
				   v-if="dealer.site"
				   :href="`${dealer.site}`"
				   rel="nofollow"
				   target="_blank">Сайт автоцентра
				</a>
			</div>
		</div>
	</div>
</template>
<script>
import dealers from "@/apollo/queries/dealer/dealers";
import {mapActions, mapGetters, mapMutations} from "vuex";
import dealer from "@/apollo/queries/dealer/dealer";
import filters from "@/mixins/filters";

export default {
	computed: {
		...mapGetters({
			dealers: 'dealers/dealers',
			api: 'api'
		}),
		currentDealers() {
			return this.dealers.filter(item => item.slug !== 'komm-auto')
		}
	},
	mixins: [
		filters
	],
	methods: {
		...mapMutations({
			setDealers: 'dealers/SET_DEALERS'
		}),
		...mapActions({
			request: 'filters/filters/request',
			openModal: 'modal/modal-main/openModal',
		}),
		async showMore(dealerSlug) {
			try {
				let dealerData = await this.request({query: dealer, variables: {slug: dealerSlug}})
				dealerData = dealerData.data.dealer
				let payload = {
					modal_data: dealerData,
					modal_component: 'modal-dealer',
					modal_title: `Автоцентр «${dealerData.title}»`,
					modal_sub_title: `${dealerData.short_description}`
				}
				await this.openModal(payload)
			} catch (error) {
				console.log(error)
			}
		}
	},
	async fetch() {
		if (!this.dealers.length) {
			try {
				let response = await this.request({query: dealers})
				this.setDealers(response.data.dealers)
			} catch (error) {
				console.log(error)
			}
		}
	}
}
</script>
