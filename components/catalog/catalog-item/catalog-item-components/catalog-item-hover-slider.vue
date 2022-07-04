<template>
	<div class="catalog__img brazzers-daddy">
		<a href
		   class="catalog__img-link"
		   :class="{'catalog__img-link--active':index === activeTab}"
		   v-for="index in limit"
		   :key="index">
			<img :src="images[index] ? images[index].thumb : ''"
			     alt="image" />
		</a>
		<div class="tmb-wrap">
			<div class="tmb-wrap-table">
				<div @mousemove="activeTab = index"
				     :class="{'active':index === activeTab}"
				     v-for="index in limit"
				     :key="index"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		images: Array
	},
	data() {
		return {
			limit: 7,
			activeTab: 1,
		}
	},
}
</script>