<template>
	<section class="page-main__detailing detailing grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">{{ pageTitile }}</h1>
				<span class="heading-group__label">С вниманием к деталям</span>
			</div>
		</div>
		<div class="detailing__group grid__col-12">
			<div class="tabs">
				<ul class="tabs__list" role="tablist">
					<li v-for="(tab, index) in categories"
					    :key="tab.id"
					    role="presentation"
					    :class="{'tabs__item--active':index === activeTab}"
					    class="tabs__item">
						<button class="tabs__link"
						        role="tab"
						        @click="activeTab = index"
						        data-toggle="tab">
							{{ tab.title }}
						</button>
					</li>
				</ul>
			</div>
			<ul v-if="categories.length"
			    class="detailing__list grid">
				<li class="detailing__item"
				    v-for="station in stations"
				    :key="station.id">
					<div class="detailing__main">
						<picture-component
								classes="detailing__img lazyload"
								:small="station.image.medium"
								:small-webp="station.image.medium_webp"
								:big="station.image.large"
								:big-webp="station.image.large_webp" />
						<h2 class="heading heading--h2 detailing__title">{{ station.title }}</h2>
						<div class="deatailing__price-wrap">
							<span class="detailing__price">{{ station.price }}</span>
							<span class="detailing__sale">Еще -10% за онлайн-заявку</span>
						</div>
					</div>
					<button-typical @click="openDetailing(station)"
					                text="Заказать услугу"
					                button-class="button--credit" />
				</li>
			</ul>
		</div>
	</section>
</template>
<script>
import {mapActions} from "vuex";
import stationCategory from "@/apollo/queries/stationCategory";

export default {
	props: {
		pageTitile: String
	},
	data() {
		return {
			activeTab: 0,
			categories: []
		}
	},
	computed: {
		stations() {
			return this.categories.length ? this.categories[this.activeTab].stations : []
		}
	},
	methods: {
		...mapActions({
			request: 'request',
			openModal: 'modal/modal-main/openModal'
		}),
		async openDetailing(station) {
			let payload = {
				modal_data: station,
				modal_component: 'modal-detailing',
				modal_title: 'Заявка на услугу',
				modal_sub_title: station.title
			}
			await this.openModal(payload)
		}
	},
	async fetch() {
		let response = await this.request({query: stationCategory, variables: {}})
		this.categories = response.data.stationCategory
	}
}
</script>
