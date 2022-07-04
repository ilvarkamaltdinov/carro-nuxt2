<template>
	<paginate
			v-model="currentPagination"
			v-if="offers.last_page > 1"
			:page-count="offers.last_page"
			:page-range="7"
			:click-handler="paginationCLick"
			:active-class="'pagination__item--active'"
			:page-link-class="'pagination__link'"
			:page-class="'pagination__item'"
			:prev-class="'pagination__item'"
			:next-class="'pagination__item'"
			:container-class="'pagination'"
			prev-text="назад"
			next-text="вперед">
	</paginate>
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