<template>
	<a class="catalog__call-card"
	   :href="`tel:${offer.dealer.phone}`">
		<div class="catalog__call">
			<svg-icon name="icon-call"
			          class="catalog__call-icon" />
			<span class="catalog__call-title">Бесплатный звонок</span>
			<span class="catalog__call-dealer">Автоцентр {{ offer.dealer.title }}</span>
		</div>
		<div class="catalog__call-img">
			<picture>
				<source type="image/webp"
				        media="(min-width: 768px)"
				        :srcset="offer.images[0].thumb" />
				<source media="(min-width: 768px)"
				        :srcset="offer.images[0].thumb" />
				<img class="lazyload"
				     :src="offer.images[0].thumb"
				     :srcset="offer.images[0].thumb"
				     alt="" />
			</picture>
		</div>
	</a>
</template>

<script>
export default {
	props: {
		offer: Object
	}
}
</script>