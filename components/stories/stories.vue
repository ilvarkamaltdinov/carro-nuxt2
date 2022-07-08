<template>
	<section class="page-main__stories stories">
		<h2 class="visually-hidden">Акции и спецпредложения</h2>
		<ul class="stories__list">
			<stories-item :stories="item"
			              @click="openStories(item.stories)"
			              v-for="item in stories"
			              :key="item.id" />
		</ul>
	</section>
</template>
<script>
import stories from "~/mixins/stories/stories";

export default {
	mixins: [stories]
}
</script>