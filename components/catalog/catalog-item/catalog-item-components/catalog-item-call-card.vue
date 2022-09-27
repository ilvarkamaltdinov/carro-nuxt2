<template>
	<a class="catalog__call-card"
	   :href="`tel:${dealer.phone.replace(/[^+\d]/g, '')}`">
		<div class="catalog__call">
			<svg-icon name="icon-call"
			          class="catalog__call-icon" />
			<span class="catalog__call-title">Бесплатный звонок</span>
			<span class="catalog__call-dealer">Автоцентр {{ dealer.title }}</span>
		</div>
		<div class="catalog__call-img">
			<img class="lazyload"
			     loading="lazy"
			     :data-src="image" />
		</div>
	</a>
</template>

<script>
export default {
	props: {
		isForm: {
			type: Boolean,
			default: false
		},
		dealer: Object,
		image: String
	}
}
</script>