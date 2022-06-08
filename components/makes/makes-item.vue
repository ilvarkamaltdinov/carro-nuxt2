<template>
	<li class="makes__item">
		<!--TODO добавить класс makes__item--active-->
		<a hreflang="" @click.prevent="$emit('click')"
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
	props: {
		item: {
			type: Object,
			default: () => {
			}
		}
	},
}
</script>