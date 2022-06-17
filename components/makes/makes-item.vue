<template>
	<li class="makes__item">
		<!--TODO добавить класс makes__item--active-->
		<nuxt-link :to="'/used/'+slug"
		           @click.native="$emit('click')"
		           class="makes__link">
			<div class="makes__title">
				{{ item.title || item.name }}
			</div>
			<div class="makes__qty">
				{{ item.offers_count }}
			</div>
		</nuxt-link>
	</li>
</template>
<script>
export default {
	props: {
		item: {
			type: Object,
			default: () => {
			}
		},
		slug: {
			type: String,
			default: ''
		}
	},
}
</script>