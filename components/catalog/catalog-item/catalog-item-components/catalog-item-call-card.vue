<template>
	<a class="catalog__call-card"
	   :href="`tel:${dealer.phone}`">
		<div class="catalog__call">
			<svg-icon name="icon-call"
			          class="catalog__call-icon" />
			<span class="catalog__call-title">Бесплатный звонок</span>
			<span class="catalog__call-dealer">Автоцентр {{ dealer.title }}</span>
		</div>
		<div class="catalog__call-img">
			<picture>
				<source type="image/webp"
				        media="(min-width: 768px)"
				        :data-srcset="image" />
				<source media="(min-width: 768px)"
				        :data-srcset="image" />
				<img class="lazyload"
				     :data-src="image"
				     :data-srcset="image"
				     alt="" />
			</picture>
		</div>
	</a>
</template>

<script>
export default {
	props: {
		dealer: Object,
		image: String
	}
}
</script>