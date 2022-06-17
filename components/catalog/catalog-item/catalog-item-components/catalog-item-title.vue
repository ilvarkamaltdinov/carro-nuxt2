<template>
	<div class="catalog__title-wrap">
		<div class="catalog__title">
			<h3 class="catalog__heading">
				<nuxt-link @click.native="getOffer(offer)"
				           :to="`/used/${offer.mark.slug}/${offer.folder.slug}/${offer.external_id}`"
				           class="catalog__title-link">
					<span class="catalog__title">
						{{ offer.mark.title }} {{ offer.folder.title }}
					</span>
					<span class="catalog__year">
						{{offer.year}}
					</span>
				</nuxt-link>
			</h3>
		</div>
	</div>
</template>
<script>
import filters from "~/mixins/filters";
import {mapActions} from "vuex";

export default {
	mixins: [filters],
	methods: {
		...mapActions({
			getOffer: 'catalog/catalog-cars/getOffer'
		})
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