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
					<button-typical @click="callback"
					                text="Обратный звонок"
					                class="button--icon button--link"
					                icon="icon-callback" />
					<button-call-modal :phone="offer.dealer.phone" />
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
					<car-fixed v-if="showFixed && focusShowFixed" />
				</transition>
				<car-info />
			</div>
			<div class="grid grid--container">
				<benefits class="car__benefits"
				          :benefits="benefitsCar" />
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
import seoTags from "@/mixins/seoTags";
import jsonld from "@/mixins/jsonld";

export default {
	mixins: [jsonld],
	props: {
		pageTitle: String,
		description: String,
		crumbs: Array
	},
	data() {
		return {
			jsonType: 'car',
			showFixed: false,
		}
	},
	mounted() {
		this.setBackButton(this.currentBackButton)
	},
	async fetch() {
		let variables = {
			site_id: this.site_id,
			mark_slug: this.$route.params.mark,
			folder_slug: this.$route.params.model,
			dateFormat: 'j F Y года.',
			external_id: Number(this.$route.params.car)
		}
		let response = await this.request({query: offer, variables: variables})
		await this.setOffer(response.data.offer)
		await this.sendYandexCommercial()
		await this.sendMyTarget()
	},
	computed: {
		...mapGetters({
			site_id: 'site_id',
			offer: 'catalog/catalog-cars/offer',
			carPageLoaded: 'catalog/catalog-cars/carPageLoaded',
			benefitsCar: 'benefits/benefitsCar',
			marks: 'marks/marks/allMarks',
			folders: 'folders/folders/folders',
			focusShowFixed: 'car/car/focusShowFixed'
		}),
		currentBackButton() {
			return {
				title: 'Все ' + this.crumbs[2].title + ' ' + this.crumbs[3].title,
				link: this.crumbs[3].link
			}
		},
		currentMark() {
			return this.marks.filter(item => this.$route.params.mark === item.slug)[0]
		},
		currentFolder() {
			return this.folders.filter(item => this.$route.params.model === item.slug)[0]
		},
	},
	beforeMount() {
		window.addEventListener('scroll', this.handleScroll);
		window.scrollTo(0, 0)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll);
		this.setBackButton({})
	},
	destroyed() {
		this.setComponentCatalog('')
	},
	methods: {
		...mapMutations({
			setOffer: 'catalog/catalog-cars/SET_OFFER',
			setFilterClick: 'filters/filters/SET_IS_FILTER_CLICK',
			setIsOfferClick: 'filters/filters/SET_IS_OFFER_CLICK',
			setComponentCatalog: 'filters/filters/SET_COMPONENT_CATALOG',
			setBackButton: 'header/header/SET_BACK_BUTTON'
		}),
		...mapActions({
			request: 'filters/filters/request',
			openModal: 'modal/modal-main/openModal'
		}),
		sendMyTarget() {
			if (process.client) {
				_tmr.push({
					type: 'itemView',
					productid: this.offer.external_id,
					pagetype: 'product',
					list: '1',
					totalvalue: this.offer.price,
				})
			}
		},
		sendYandexCommercial() {
			if (process.client) {
				dataLayer.push({
					"ecommerce": {
						"detail": {
							"products": [
								{
									"id": this.offer.external_id,
									"name": `${this.offer.mark.title} ${this.offer.folder.title}, ${this.offer.year} года, ${this.offer.gearbox.title} ${this.offer.price} руб. - ${this.offer.external_id}`,
									"price": this.offer.price,
									"brand": this.offer.mark.title,
									"category": `'С пробегом/${this.offer.mark.title}/${this.offer.folder.title}/${this.offer.name}`,
									"quantity": 1
								}
							]
						}
					}
				})
			}
		},
		callback() {
			let payload = {
				modal_data: this.offer,
				modal_component: 'modal-callback',
				modal_title: 'Заявка на автокредит',
				modal_sub_title: this.offer.name
			}
			this.openModal(payload)
		},
		handleScroll() {
			this.showFixed = process.client && this.$device.isMobile && window.scrollY > 499;
		}
	}
}
</script>
