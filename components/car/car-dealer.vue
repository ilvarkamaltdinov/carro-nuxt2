<template>
	<div class="car__info-group">
		<div class="heading-group">
			<div class="heading-group__wrap">
				<h2 class="heading heading--h2">
					Информация о дилере
				</h2>
				<span class="heading-group__label">
					Автоцентр «{{ offer.dealer.title }}»
				</span>
			</div>
			<rating :rating="offer.dealer.rating"
			        :max="5"
			        v-tippy="{
							content:`<div class='tippy__text'>Рейтинг дилера</div>`,
							animation:'scale',
							arrow: true,
					}" />
		
		</div>
		<div class="car__info-options features">
			<div class="features__group">
				<h3 class="heading heading--h3">Адрес:</h3>
				<ul class="features__list">
					<li class="features__item">{{ offer.dealer.address }}</li>
					<li class="features__item">м. {{ offer.dealer.metro }}</li>
				</ul>
			</div>
			<div class="features__group">
				<h3 class="heading heading--h3">Телефон:</h3>
				<ul class="features__list">
					<li class="features__item">
						<a :href="`tel:${offer.dealer.phone.replace(/[^+\d]/g, '')}`">{{ offer.dealer.phone }}</a>
					</li>
				</ul>
			</div>
			<div class="features__group">
				<h3 class="heading heading--h3">Режим работы:</h3>
				<ul class="features__list">
					<li class="features__item">{{ offer.dealer.schedule }}</li>
				</ul>
			</div>
			<button-typical @click="moreInfoDealer(offer.dealer.slug)"
			                text="Подробнее о дилере"
			                class="button--show" />
		</div>
	</div>
</template>

<script>
import filters from "@/mixins/filters";
import dealer from "@/apollo/queries/dealer/dealer";
import {mapActions} from "vuex";

export default {
	mixins: [filters],
	props: {
		offer: Object
	},
	methods: {
		...mapActions({
			request: 'request',
			openModal: 'modal/modal-main/openModal'
		}),
		async moreInfoDealer(dealerSlug) {
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
			} catch (e) {
				console.log(e)
			}
		},
	}
}
</script>