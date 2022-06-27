<template>
	<div class="modal__wrap">
		<div class="features features--complect">
			<div class="features__group" v-for="group in equipment_group_list" :key="group.title">
				<h3 class="heading heading--h3">{{ group.title }}:</h3>
				<ul class="features__list">
					<li class="features__item" v-for="value in group.values" :key="value">
						{{value}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			offer: 'catalog/catalog-cars/offer'
		}),
		equipment_group_list() {
			return this.offer.equipment_groups
		}
	}
}
</script>