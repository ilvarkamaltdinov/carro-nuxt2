<template>
	<div class="grid__col-8">
		<div class="catalog__makes makes">
			<ul class="makes__list makes__list--all makes__list--all-catalog">
				<li class="makes__item"
				    :key="mark.id"
				    v-for="mark in marksList">
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
				<li>
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
		}
	},
	computed: {
		...mapGetters({
			marks: 'marks/marks/allMarks'
		}),
		marksList() {
			let marks
			if (this.$route.params.category === "used") {
				marks = this.marks
			} else if (this.$route.params.category === "commercial") {
				marks= []
				console.log(marks)
			}
			if (this.$device.isMobile && marks.length) {
				return this.allMarks ? marks : marks.slice(0, 10)
			} else if (marks.length) {
				return this.allMarks ? marks : marks.slice(0, 21)
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
			window.scrollTo(0, 0)
			this.allMarks = !this.allMarks
		},
	},
}
</script>