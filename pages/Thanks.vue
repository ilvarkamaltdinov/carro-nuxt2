<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<thanks :page-title="pageTitle"/>
		</div>
	</main>
</template>
<script>
import {mapGetters} from "vuex";
import seoTags from "@/mixins/seoTags";
import jsonld from "@/mixins/jsonld";

export default {
	mixins: [seoTags, jsonld],
	data() {
		return {
			crumbs: [
				{
					name: 'Главная',
					route: '/',
					active: false
				},
				{
					name: 'Заявка успешно отправлена',
					route: '/thanks',
					active: true
				}
			]
		}
	}
}
</script>