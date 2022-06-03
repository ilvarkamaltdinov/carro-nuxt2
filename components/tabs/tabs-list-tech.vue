<template>
	<div class="tabs">
		<ul class="tabs__list" id="tabs" role="tablist">
			<tabs-item :is-active="index === activeTab"
			           v-for="(tab, index) in tabsItems"
			           :key="index"
			           :tab-text="tab" />
		</ul>
	</div>
</template>
<script>
export default {
	components: {},
	
	data() {
		return {
			activeTab: 0,
			tabsItems: ["Характеристики", "Комплектация", "О дилере"]
		}
	}
}
</script>
