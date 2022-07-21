<template>
	<article class="catalog__item catalog__item--small">
		<div class="catalog__img">
			<nuxt-link :to="`/${this.currentCategory}/${this.currentMark}/${this.currentFolder}/${this.currentId}`" class="catalog__img-link">
				<picture>
					<source type="image/webp"
					        media="(min-width: 768px)"
					        :srcset="offer.images[0].thumb">
					<source media="(min-width: 768px)"
					        :srcset="offer.images[0].thumb">
					<img class=" ls-is-cached lazyloaded"
					     :src="offer.images[0].thumb"
					     :srcset="offer.images[0].thumb"
					     alt="">
				</picture>
			</nuxt-link>
		</div>
		<div class="catalog__info">
			<catalog-item-title @linkClick="linkClick" :offer="offer" />
			<catalog-item-price :offer="offer" />
			<div class="catalog__tech"
			     :class="{'catalog__tech--no-buttons':!hasButtons}">
				<catalog-item-tech-list small
				                        :offer="offer" />
			</div>
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
		offer: {
			type: Object,
			default: () => {
			}
		},
		choose: {
			type: Boolean,
			default: false
		},
		hasButtons: {
			type: Boolean,
			default: true
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
			closeModal: 'modal/modal-main/closeModal'
		}),
		...mapMutations({
			setIsOfferClick: 'filters/filters/SET_IS_OFFER_CLICK'
		}),
		async linkClick() {
			await this.closeModal()
			await this.setIsOfferClick(true)
			await this.$router.push(`/${this.currentCategory}/${this.currentMark}/${this.currentFolder}/${this.currentId}`)
		},
	}
}
</script>