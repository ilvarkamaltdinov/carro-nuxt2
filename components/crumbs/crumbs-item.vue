<template>
	<li class="crumbs__item">
		<span v-if="crumb.active">
			{{ crumb.name }}
		</span>
		<nuxt-link :to="crumb.route" v-else
		   href=""
		   class="crumbs__link">
			{{ crumb.name }}
		</nuxt-link>
	</li>
</template>
<script>
export default {
	props: {
		crumb: {
			type: Object,
			default: () => {}
		}
	}
}
</script>