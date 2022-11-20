<template>
	<a v-if="hasFancy"
	   data-fancybox="gallery"
	   :data-src="original"
	   class="catalog__img-link"
     title="Подробнее об автомобиле"
     aria-label="Подробнее об автомобиле">
		<img class="lazyload"
		     :data-src="img"
		     alt="image">
	</a>
	<a v-else
	   :href="url"
	   @click.prevent="$emit('click')"
	   class="catalog__img-link"
     title="Подробнее об автомобиле"
     aria-label="Подробнее об автомобиле">
		<img class="lazyload"
		     :data-src="img"
		     alt="image">
	</a>
</template>
<script>
// import { Fancybox } from "@fancyapps/ui";
export default {
	// components: {Fancybox},
	props: {
		hasFancy: {
			type: Boolean,
			default: false
		},
		isForm: {
			type: Boolean,
			default: false
		},
		url: String,
		original: String,
		img: String,
	}
}
</script>
