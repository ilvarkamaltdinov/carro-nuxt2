<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs"/>
		</div>
		<div class="grid grid--container">
			<detailing :page-titile="pageTitle"/>
			<text-detailing/>
			<video-about/>
		</div>
	</main>
</template>
<script>
import seoTags from "@/mixins/seoTags";
import jsonld from "@/mixins/jsonld";

export default {
	mixins: [seoTags, jsonld],
	data(){
		return{
			crumbs:[
				{
					name:'Главная',
					route:'/',
					active: false
				},
				{
					name:'Детейлинг',
					route:'/uslugi-servisa',
					active: true
				}
			]
		}
	}
}
</script>