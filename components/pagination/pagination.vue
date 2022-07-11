<template>
	<div class="pagination">
		<button class="pagination__arrow pagination__arrow--prev">
			<!--<svg class="pagination__arrow-icon" viewBox="0 0 24 24">-->
			<!--	<use xlink:href="img/sprite.svg#icon-arrow"></use>-->
			<!--</svg>-->
		</button>
		<paginate
				v-model="currentPagination"
				v-if="offers.last_page > 1"
				:page-count="offers.last_page"
				:page-range="7"
				:click-handler="paginationCLick"
				:active-class="'pagination__item--active'"
				:page-link-class="'pagination__link'"
				:page-class="'pagination__item'"
				:prev-link-class="'pagination__item'"
				:next-link-class="'pagination__item'"
				:container-class="'pagination__list\n'">
			<span slot="prevContent">Changed previous button</span>
			<span slot="nextContent">Changed next button</span>
		</paginate>
		<button class="pagination__arrow pagination__arrow--next">
			<!--<svg class="pagination__arrow-icon" viewBox="0 0 24 24">-->
			<!--	<use xlink:href="img/sprite.svg#icon-arrow"></use>-->
			<!--</svg>-->
		</button>
	</div>
</template>
<script>
export default {
	props: {
		offers: Object
	},
	computed: {
		currentPagination: {
			get() {
				return Number(this.$route.query.page || 1)
			},
			set(pageNum) {
				this.$router.push({query: {page: pageNum}});
			}
		}
	},
	methods: {
		paginationCLick(pageNum) {
			window.scrollTo(0, 0)
			this.$router.push({path: this.$route.fullPath, query: {page:pageNum}});
		}
	}
}
</script>