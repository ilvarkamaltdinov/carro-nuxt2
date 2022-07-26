<template>
	<div class="catalog__title-wrap">
		<div class="catalog__title">
			<h3 class="catalog__heading">
				<a :href="hasLinks ? url : ''"
				   @click.prevent="$emit('click')"
				   class="catalog__title-link">
					<span class="catalog__title">
						{{ offer.mark.title }} {{ offer.folder.title }}<span v-if="!small">, {{ offer.engine_volume | engineVolume }}
						</span>
					</span>
					<span class="catalog__year">
						{{ offer.year }}
					</span>
				</a>
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
	props: {
		hasLinks: {
			type: Boolean,
			default: true
		},
		url: String,
		small: {
			type: Boolean,
			default: false
		},
		offer: {
			type: Object,
			default: () => {
			}
		}
	}
}
</script>
