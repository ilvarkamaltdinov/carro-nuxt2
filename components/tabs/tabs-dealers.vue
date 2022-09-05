<template>
	<div class="tabs">
		<ul class="tabs__list" role="tablist">
			<tabs-item :is-active="index === activeTab"
			           v-for="(tab, index) in tabsItems"
			           :key="index">
				{{ tab }}
			</tabs-item>
		</ul>
	</div>
</template>
<script>

export default {
	data() {
		return {
			activeTab: 0,
			tabsItems: ["АвтоГрадъ", "Prime"]
		}
	}
}
</script>
