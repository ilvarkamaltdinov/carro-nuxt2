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
import {mapGetters} from "vuex";

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
			if (this.$device.isMobile) {
				return this.allMarks ? this.marks : this.marks.slice(0, 10)
			} else {
				return this.allMarks ? this.marks : this.marks.slice(0, 21)
			}
		}
	},
	methods: {
		clickAllMarks() {
			window.scrollTo(0, 0)
			this.allMarks = !this.allMarks
		},
	},
}
</script>