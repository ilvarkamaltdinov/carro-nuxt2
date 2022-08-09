<template>
	<div class="grid__col-8">
		<div class="catalog__makes makes">
			<ul class="makes__list makes__list--all makes__list--all-catalog">
				<li class="makes__item"
				    :key="mark.id"
				    v-for="mark in sortedMarks">
					<nuxt-link :to="`${$route.params.category}/${mark.slug}`"
					           class="makes__link">
						<div class="makes__title">
							{{ mark.title }}
						</div>
						<div class="makes__qty">
							{{ mark.offers_count }}
						</div>
					</nuxt-link>
				</li>
				<li v-if="showAllButton">
					<button-typical
							@click="clickAllMarks"
							:text="allMarks ? 'Меньше марок' :'Больше марок'"
							:class="{'button--show-active': allMarks }"
							class="button--show" />
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import marks from '~/apollo/queries/marks'

export default {
	data() {
		return {
			allMarks: false,
			marksArray: [],
		}
	},
	async created() {
		if (this.$route.params.category === 'used') {
			this.marksArray = this.marks
		} else {
			this.marksArray = await this.getComm()
		}
	},
	computed: {
		...mapGetters({
			marks: 'marks/marks/allMarks'
		}),
		showAllButton(){
			if(this.$device.isMobile && this.marksArray){
				return this.marksArray.length > 10
			} else if(this.marksArray){
				return this.marksArray.length > 21
			}
		},
		sortedMarks(){
			return this.$_.sortBy(this.marksList, [function (mark) {
				return mark.title;
			}])
		},
		marksList() {
			if (this.$device.isMobile && this.marksArray.length) {
				return this.allMarks ? this.marksArray : this.marksArray.slice(0, 10)
			} else if (this.marksArray.length) {
				return this.allMarks ? this.marksArray : this.marksArray.slice(0, 21)
			}
		}
	},
	methods: {
		...mapActions({
			request: 'request'
		}),
		async getComm() {
			try {
				let response = await this.request({
					query: marks,
					variables: {
						category: 'commercial'
					}
				})
				return response.data.marks

			} catch (error) {
				console.log(error)
			}
		},
		clickAllMarks() {
			setTimeout(function () {window.scrollTo(0, -100);}, 1);
			this.allMarks = !this.allMarks
		},
	},
}
</script>
