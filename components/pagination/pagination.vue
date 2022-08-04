<template>
	<div class="pagination">
		<button v-if="this.$route.query.page && Number(this.$route.query.page) !== 1 && offers.last_page > 1"
		        class="pagination__arrow pagination__arrow--prev"
		        @click="arrowClick('prev')">
			<svg-icon class="pagination__arrow-icon"
			          name="icon-arrow" />
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
				:container-class="'pagination__list'">
		</paginate>
		<button v-if="offers.last_page !== Number(this.$route.query.page)  && offers.last_page > 1"
		        class="pagination__arrow pagination__arrow--next"
		        @click="arrowClick('next')">
			<svg-icon class="pagination__arrow-icon"
			          name="icon-arrow" />
		</button>
	</div>
</template>
<script>
export default {
	props: {
		offers: Object,
		activeButton: Number
	},
	computed: {
		currentPagination: {
			get() {
				return Number(this.$route.query.page || this.activeButton || 1)
			},
			set(pageNum) {
				this.$router.push({query: {page: pageNum}});
			}
		}
	},
	methods: {
		paginationCLick(pageNum) {
			setTimeout(function () {window.scrollTo(0, -100);}, 1);
			this.$router.push({path: this.$route.fullPath, query: {page: pageNum}});
		},
		arrowClick(type) {
			console.log(this.offers.last_page)
			if (this.$route.query.page) {
				let pageNum = Number(this.$route.query.page)
				if (type === 'next') {
					pageNum++
				} else if (type === 'prev' && pageNum !== 1) {
					pageNum--
				}
				this.$router.push({path: this.$route.fullPath, query: {page: '' + pageNum}});
				setTimeout(function () {window.scrollTo(0, -100);}, 1);
			} else {
				this.$router.push({path: this.$route.fullPath, query: {page: '2'}});
			}
		}
	}
}
</script>
