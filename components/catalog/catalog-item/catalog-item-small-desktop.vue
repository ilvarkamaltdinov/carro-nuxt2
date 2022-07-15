<template>
	<article class="catalog__item catalog__item--vertical"
	         :class="{'grid__col-4':!slide, 'swiper-slide':slide}">
		<catalog-item-hover-slider @linkClick.native="linkClick" :offer="offer" />
		<div class="catalog__info">
			<catalog-item-title @linkClick="linkClick" :offer="offer" />
			<catalog-item-price :offer="offer" />
		</div>
		<div class="catalog__tech"
		     :class="{'catalog__tech--no-buttons':!hasButtons}">
			<tippy arrow>
				<div class="tippy__text">
					рейтинг автомобиля
				</div>
				<template v-slot:trigger>
					<rating-car @click="ratingClick"
					            :rating="offer.rating"/>
				</template>
			</tippy>
			<catalog-item-tech-list :offer="offer" />
		</div>
		<catalog-item-buttons :choose="choose"
		                      v-if="hasButtons"
		                      :offer="offer" />
	</article>
</template>
<script>
import filters from "~/mixins/filters";
import {mapActions, mapMutations} from "vuex";

export default {
	mixins: [filters],
	props: {
		choose: {
			type: Boolean,
			default: false
		},
		hasButtons: {
			type: Boolean,
			default: true
		},
		slide: {
			type: Boolean,
			default: false
		},
		offer: {
			type: Object,
			default: () => {
			}
		}
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
		async linkClick() {
			await this.closeModal()
			await this.setIsOfferClick(true)
			await this.$router.push(`/${this.currentCategory}/${this.currentMark}/${this.currentFolder}/${this.currentId}`)
		},
		ratingClick() {
			let payload = {
				modal_data: this.offer.rating,
				modal_component: 'modal-rating',
				modal_title: ' Состояние автомобиля',
				modal_sub_title: this.offer.name
			}
			this.openModal(payload)
		}
	}
}
</script>