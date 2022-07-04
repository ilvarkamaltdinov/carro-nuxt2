<template>
	<div class="tabs">
		<ul class="tabs__list">
			<tabs-item v-for="(tab, index) in tabs"
			           :key="index">
				{{ tab }}
			</tabs-item>
		</ul>
	</div>
</template>
<script>
export default {
	props: {
		tabs: Array
	}
}
</script>
