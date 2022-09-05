<template>
	<div class="tabs">
		<ul class="tabs__list" role="tablist">
			<tabs-item :is-active="tab.id === activeTabId"
			           v-for="tab in tabs"
			           :link="link"
			           :key="tab.id">
				<button @click="$emit('tabClick', tab)"
				        class="tabs__link"
				        role="tab"
				        data-toggle="tab">
					{{ tab.title }}
				</button>
			</tabs-item>
		</ul>
	</div>
</template>
<script>
export default {
	props: {
		tabs: Array,
		activeTabId: Number,
		link: Boolean,
		hasChosenDefault: {
			type: Boolean,
			default: true
		}
	}
}
</script>
