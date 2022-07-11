<template xmlns="http://www.w3.org/1999/html">
	<div class="catalog__img brazzers-daddy">
		<a href @click="$emit('linkClick')"
		   class="catalog__img-link"
		   :class="{'catalog__img-link--active':index === activeTab}"
		   v-for="(i,index) in limit"
		   :key="index">
			<img class="lazyload" :data-src="images[index] ? images[index].thumb : ''"
			     alt="image" />
		</a>
		<div class="tmb-wrap">
			<div class="tmb-wrap-table"
			     @mouseleave="activeTab = 0">
				<div @mousemove="activeTab = index"
				     :class="{'active':index === activeTab}"
				     v-for="(i,index) in limit"
				     :key="index">
				</div>
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
			activeTab: 0,
		}
	},
}
</script>