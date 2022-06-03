<template>
	<li class="makes__item">
		<!--TODO добавить класс makes__item--active-->
		<a @click.prevent="$emit('click')"
		   href=""
		   class="makes__link">
			<div class="makes__title">
				{{ item.title || item.name}}
			</div>
			<div class="makes__qty">
				{{ item.offers_count }}
			</div>
		</a>
	</li>
</template>
<script>
export default {
	methods: {},
	props: {
		item: {
			type: Object,
			default: () => {
			}
		}
	},
}
</script>