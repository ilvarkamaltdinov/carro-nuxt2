<template>
	<div class="catalog__title-wrap">
		<div class="catalog__title">
			<h3 class="catalog__heading">
				<nuxt-link event=""
				           @click.native="linkClick()"
				           :to="`/${currentCategory}/${currentMark}/${currentFolder}/${currentId}`"
				           class="catalog__title-link">
					<span class="catalog__title">
						{{ offer.mark.title }} {{ offer.folder.title }}
					</span>
					<span class="catalog__year">
						{{ offer.year }}
					</span>
				</nuxt-link>
			</h3>
		</div>
	</div>
</template>
<script>
import filters from "~/mixins/filters";
import {mapActions, mapMutations} from "vuex";

export default {
	mixins: [filters],
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
			closeModal: 'modal/modal-main/closeModal'
		}),
		...mapMutations({
			setIsOfferClick: 'filters/filters/SET_IS_OFFER_CLICK'
		}),
		async linkClick() {
			await this.closeModal()
			await this.setIsOfferClick(true)
			await this.$router.push(`/${this.currentCategory}/${this.currentMark}/${this.currentFolder}/${this.currentId}`)
		}
	},
	props: {
		offer: {
			type: Object,
			default: () => {
			}
		}
	}
}
</script>
