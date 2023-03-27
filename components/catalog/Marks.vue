<template>
	<div class="grid__col-12">
		<div class="catalog__makes makes">
			<ul class="makes__list makes__list--all makes__list--all-catalog">
				<li class="makes__item"
				    :key="mark.id"
				    v-for="mark in sortedMarks">
					<nuxt-link :to="`${$route.params.category}/${mark.slug}`"
					           class="makes__link">
						<div class="makes__title">
							{{ mark.slug === 'mercedes-benz' ? 'Mercedes' : mark.title || mark.name }}
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
import {mapGetters} from "vuex";
import sortBy from "lodash/sortBy";
import markFolderGeneration from "@/apollo/queries/markFolderGeneration";

export default {
	watch: {
		commMarks() {
			this.marks = this.commMarks
		},
		europeMarks() {
			this.marks = this.europeMarks
		}
	},
	data() {
		return {
			allMarks: false,
			marks: [],
		}
	},
	computed: {
		...mapGetters({
			usedMarks: 'marks/marks/allMarks',
			commMarks: 'marks/marks/commMarks',
			europeMarks: 'marks/marks/europeMarks',
		}),
		showAllButton() {
			if (this.$device.isMobile && this.marks) {
				return this.marks.length > 10
			} else if (this.marks) {
				return this.marks.length > 21
			}
		},
		sortedMarks() {
			return sortBy(this.marksList, [function (mark) {
				return mark.title;
			}])
		},
		marksList() {
			let marks = [...this.marks]
			let marksShowNumber = 21
			if (this.$device.isMobile) {
				marksShowNumber = 10
				if (this.allMarks) {
					return marks
				} else {
					marks = marks.sort((a, b) => parseFloat(b.offers_count) - parseFloat(a.offers_count))
					marks = marks.slice(0, marksShowNumber)
					marks = marks.sort((a, b) => a.slug.toLowerCase().localeCompare(b.slug.toLowerCase()))
					return marks
				}
			} else {
				if (this.allMarks) {
					return marks
				} else {
					marks = marks.sort((a, b) => parseFloat(b.offers_count) - parseFloat(a.offers_count))
					marks = marks.slice(0, marksShowNumber)
					marks = marks.sort((a, b) => a.slug.toLowerCase().localeCompare(b.slug.toLowerCase()))
					return marks
				}
			}
		}
	},
	methods: {
		setMarks() {
			switch (this.$route.params.category) {
				case 'commercial':
					this.marks = this.commMarks
					break
				case 'europe':
					this.marks = this.europeMarks
					break
				default:
					this.marks = this.usedMarks
					break
			}
		},
		clickAllMarks() {
			setTimeout(function () {
				window.scrollTo(0, -100);
			}, 1);
			this.allMarks = !this.allMarks
		},
	},
	async fetch() {
		await this.setMarks()
	}
}
</script>
