<template>
	<ul class="catalog__tech-list">
		<li class="catalog__tech-item"
		    v-if="small">{{ offer.engine_volume | engineVolume }} л.
		</li>
		<li class="catalog__tech-item"
		    v-if="!small">{{ offer.run | run }} км
		</li>
		<li class="catalog__tech-item">
			{{ offer.engine_power }} л.с.
		</li>
		<li class="catalog__tech-item">{{ currentGerabox }}</li>
		<li class="catalog__tech-item"
		    v-if="!small">{{ offer.engineType.title }}
		</li>
		<li class="catalog__tech-item"
		    v-if="!small">{{ offer.owner.title === '0 владельцев' ? 'Новый' : offer.owner.title }}
		</li>
		<li class="catalog__tech-item"
		    v-if="!small">{{ offer.driveType.title }}
		</li>
		<li class="catalog__tech-item"
		    v-if="small">{{ offer.run | run }} км
		</li>
	</ul>
</template>
<script>
import filters from "~/mixins/filters";

export default {
	data() {
		return {
			gearbox: {
				'mechanical': 'МКПП',
				'cvt': 'Вариатор',
				'robot': 'Робот',
				'automatic': 'АКПП',
			}
		}
	},
	mixins: [filters],
	props: {
		isForm: {
			type: Boolean,
			default: false
		},
		offer: {
			type: Object,
			default: () => {
			}
		},
		small: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		currentGerabox() {
			// return this.gearbox[this.offer.gearbox.name] || this.offer.gearbox.title
			return this.offer.gearbox.title_short
		}
	}
}
</script>
