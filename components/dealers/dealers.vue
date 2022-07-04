<template>
	<section class="page-main__dealers dealers grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">{{ pageTitle }}
					<span class="heading__promo"></span>
				</h1>
				<span class="heading-group__label">Партнеры carro.ru</span>
			</div>
		</div>
		<div class="dealers__item grid__col-12"
		     v-for="dealer in dealers"
		     :key="dealer.id">
			<div class="dealers__features features">
				<div class="heading-group">
					<div class="heading-group__wrap">
						<h2 class="heading heading--h2">{{ dealer.title }}</h2>
						<span class="heading-group__label">{{ dealer.short_description }}</span>
					</div>
					<rating :max="5" :rating="dealer.rating" />
				</div>
				<div class="features__group">
					<h3 class="heading heading--h3">Адрес:</h3>
					<ul class="features__list">
						<li class="features__item">{{ dealer.address }}</li>
						<li class="features__item">м. {{ dealer.metro }}</li>
					</ul>
				</div>
				<div class="features__group">
					<h3 class="heading heading--h3">Телефон:</h3>
					<ul class="features__list">
						<li class="features__item">
							<a :href="`tel:${ dealer.phone}`"> {{ dealer.phone }}</a>
						</li>
					</ul>
				</div>
				<div class="features__group">
					<h3 class="heading heading--h3">Режим работы:</h3>
					<ul class="features__list">
						<li class="features__item">{{ dealer.schedule }}</li>
						<li class="features__item">без выходных</li>
					</ul>
				</div>
				<button-typical @click="showMore(dealer.slug)" text="Подробнее о дилере" class="button--credit"/>
				<a class="button button--show button--show-link"
				   :href="`${dealer.site}`"
				   target="_blank">Сайт автоцентра
				</a>
			</div>
			<div class="dealers__item-img-wrap">
				<picture>
					<source type="image/webp"
					        media="(min-width: 768px)"
					        srcset="~/assets/img/dealers/photos/autograd/dealer-3@1x.webp 1x,~/assets/img/dealers/photos/autograd/dealer-3@2x.webp 2x" />
					<img class="dealers__item-img"
					     src="~/assets/img/dealers/photos/autograd/dealer-3@1x.jpg"
					     srcset="~/assets/img/dealers/photos/autograd/dealer-3@2x.jpg 2x"
					     loading="lazy"
					     alt="" />
				</picture>
			</div>
		</div>
	</section>
</template>
<script>
import {mapActions} from "vuex";
import dealers from "@/apollo/queries/dealers";
import dealer from "@/apollo/queries/dealer";

export default {
	data() {
		return {
			dealers: []
		}
	},
	props: {
		pageTitle: String
	},
	methods: {
		...mapActions({
			request: 'filters/filters/request',
			openModal: 'modal/modal-main/openModal',
		}),
		async showMore(dealerSlug){
			try {
				let dealerData = await this.request({query: dealer, variables: {slug:dealerSlug}})
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
		}
	},
	async fetch() {
		try {
			let response = await this.request({query: dealers})
			this.dealers = response.data.dealers
		} catch (e) {
			console.log(e)
		}
	},
}
</script>