<template>
	<div class="page-header__nav-wrap makes">
		<ul class="makes__list makes__list--header">
			<li class="makes__item"
			    v-for="item in popular"
			    :key="item.slug">
				<nuxt-link :title="item.title"
				           :to="'/used/' + item.slug"
				           @click.native="$emit('click')"
				           class="makes__link">
					<div class="makes__title">{{ item.title }}</div>
					<div class="makes__count">{{ item.offers_count }}</div>
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			popularMarks: 'marks/marks/popularMarks'
		}),
		popular() {
			return this.popularMarks.slice(0, 8)
		},
	}
}
</script>