<template>
	<div class="car__info-group car__info-group--options">
		<div class="heading-group">
			<div class="heading-group__wrap">
				<h2 class="heading heading--h2">
					Комплектация
				</h2>
				<span class="heading-group__label"
				      v-if="offer.complectation">
					{{ offer.complectation.name }}
				</span>
				<span class="heading-group__label"
				      v-else>
					{{ offer.mark.title }}
					{{ offer.folder.title }},
					{{ offer.engine_volume | engineVolume }},
					{{ offer.gearbox.title_short_rus }},
					{{ offer.year }}
					{{ offer.generation ? ', ' + offer.generation.name : '' }}
				</span>
			</div>
		</div>
		<div class="car__info-options features">
			<div v-if="index === 0"
			     class="features__group"
			     v-for="(group, index) in offer.equipment_groups"
			     :key="group.title">
				<h3 class="heading heading--h3">{{ group.title }}</h3>
				<ul class="features__list">
					<li class="features__item"
					    v-for="value in group.values"
					    :key="value">
						{{ value }}
					</li>
				</ul>
			</div>
		</div>
		<button-typical @click="moreInfoComplectation(offer)"
		                text="Показать больше"
		                class="button--show" />
	</div>
</template>

<script>
import filters from "@/mixins/filters";
import {mapActions} from "vuex";

export default {
	mixins: [filters],
	props: {
		offer: Object
	},
	methods: {
		...mapActions({
			openModal: 'modal/modal-main/openModal'
		}),
		moreInfoComplectation(carInfo) {
			let payload = {
				modal_data: carInfo,
				modal_component: 'modal-complect',
				modal_title: 'Комплектация',
				modal_sub_title: carInfo.name
			}
			this.openModal(payload)
		},
	}
}
</script>