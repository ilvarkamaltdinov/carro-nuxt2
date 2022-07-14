<template>
	<article class="catalog__item catalog__item--desktop-l grid__col-8">
		<catalog-item-swiper :slider-id="offer.external_id"
		                     :offer="offer" />
		<div class="catalog__info-wrap" :class="{'catalog__info-wrap--no-buttons':!hasButtons}">
			<div class="catalog__info">
				<catalog-item-title @linkClick="linkClick" :offer="offer" />
				<catalog-item-price :offer="offer" />
			</div>
			<div class="catalog__tech">
				<rating-car @click="ratingClick"
				            :rating="offer.rating"/>
				<catalog-item-tech-list :offer="offer" />
			</div>
		</div>
		<catalog-item-buttons :choose="choose"
		                      :long="true"
		                      v-if="hasButtons"
		                      :offer="offer" />
	</article>
</template>
<script>
import filters from "~/mixins/filters";
import AOS from "aos";
import {mapActions, mapMutations} from "vuex";

export default {
	mixins: [filters],
	props: {
		choose: {
			type: Boolean,
			default: false
		},
		offer: {
			type: Object,
			default: () => {
			}
		},
		hasButtons: {
			type: Boolean,
			default: true
		},
	},
	computed: {
		currentCategory() {
			return this.offer.category_enum
		},
		currentMark() {
			return this.offer.mark.slug
		},
		currentFolder() {
			return this.offer.folder.slug
		},
		currentId() {
			return this.offer.external_id
		},
	},
	methods: {
		...mapActions({
			openModal: 'modal/modal-main/openModal',
			closeModal:'modal/modal-main/closeModal'
		}),
		...mapMutations({
			setIsOfferClick: 'filters/filters/SET_IS_OFFER_CLICK'
		}),
		ratingClick() {
			let payload = {
				modal_data: this.offer.rating,
				modal_component: 'modal-rating',
				modal_title: ' Состояние автомобиля',
				modal_sub_title: this.offer.name
			}
			this.openModal(payload)
		},
		async linkClick() {
			await this.closeModal()
			await this.setIsOfferClick(true)
			await this.$router.push(`/${this.currentCategory}/${this.currentMark}/${this.currentFolder}/${this.currentId}`)
		},
	}
}
</script>