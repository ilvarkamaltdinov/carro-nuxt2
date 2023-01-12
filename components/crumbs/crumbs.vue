<template>
	<ul class="crumbs grid__col-12">
		<crumbs-item v-for="(item, index) in crumbs"
		             :key="index"
		             :disabled="index === crumbs.length - 1 "
		             :crumb="item" />
	</ul>
</template>
<script>
export default {
	props: {
		crumbs: {
			type: Array,
			default: () => []
		}
	}
}
</script>