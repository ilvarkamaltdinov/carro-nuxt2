<template>
	<div class="tabs">
		<ul class="tabs__list">
			<tabs-item :is-active="index === activeTab"
			           v-for="(tab, index) in tabsItems"
			           :key="index">
				{{ tab }}
			</tabs-item>
		</ul>
	</div>
</template>
<script>
import TabsItem from "./tabs-item";

export default {
	components: {TabsItem},
	data() {
		return {
			activeTab: 0,
			tabsItems: [
				"Топ-предложения",
				"Свежие",
				"До 500 000 ₽",
				"Топ-выгода",
				"7-местные",
				"До 2 владельцев",
				"До 5 лет",
				"Седаны"
			]
		}
	}
}
</script>
