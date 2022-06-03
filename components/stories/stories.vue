<template>
	<section class="page-main__stories stories">
		<h2 class="visually-hidden">Акции и спецпредложения</h2>
		<ul class="stories__list">
			<stories-item v-for="(item, index) in storiesItems"
			           :key="index"
			           :is="storoiesItem"
			           :item="item"/>
		</ul>
	</section>
</template>
<script>
import storiesItem from "./stories-item"

export default {
	comments: [storiesItem],
	data() {
		return {
			storiesItems: [`Корейская неделя`, `Выгодный Trade-In №1`, `Автокредит от 4.5%`, `Выкуп за 15 минут`]
		}
	}
}
</script>
