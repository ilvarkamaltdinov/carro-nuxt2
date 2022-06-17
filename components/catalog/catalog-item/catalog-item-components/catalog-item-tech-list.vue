<template>
	<ul class="catalog__tech-list">
		<li class="catalog__tech-item" v-if="small">{{ offer.year}}</li>
		<li class="catalog__tech-item" v-if="small">{{ offer.engine_volume | engineVolume }} л.</li>
		<li class="catalog__tech-item" v-if="!small">{{ offer.run | run }} км</li>
		<li class="catalog__tech-item" v-if="!small">{{ offer.engine_volume | engineVolume }} / {{ offer.engine_power }} л.с.</li>
		<li class="catalog__tech-item">{{ offer.gearbox.title }}</li>
		<li class="catalog__tech-item" v-if="!small">{{ offer.engineType.title }}</li>
		<li class="catalog__tech-item" v-if="!small">{{ offer.owner.title }}</li>
		<li class="catalog__tech-item" v-if="!small">{{ offer.driveType.title }}</li>
		<li class="catalog__tech-item" v-if="small">{{ offer.run | run }} км</li>
	</ul>
</template>
<script>
import filters from "~/mixins/filters";

export default {
	mixins: [filters],
	props: {
		offer: {
			type: Object,
			default: () => {
			}
		},
		small: {
			type: Boolean,
			default: false
		}
	}
}
</script>