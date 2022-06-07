<template>
	<section class="page-main__stories stories">
		<h2 class="visually-hidden">Акции и спецпредложения</h2>
		<ul class="stories__list">
			<stories-item :index="index+1"
			              v-for="(item, index) in storiesItems"
			              :key="index">
				{{ item }}
				{{ index }}
			</stories-item>
		</ul>
	</section>
</template>
<script>
import stories from "~/mixins/stories/stories";

export default {
	mixins: [stories]
}
</script>