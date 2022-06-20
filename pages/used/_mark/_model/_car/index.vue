<template>
	<main class="page-main">
		<div class="grid">
			<!--<crumbs :crumbs="crumbs"/>-->
		</div>
		<div class="grid grid--container">
			<component :is="currentComponent"/>
		</div>
	</main>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			chosen: 'filters/filters/chosen',
			carPage:'filters/filters/carPage'
		}),
		currentComponent(){
			return  this.carPage ? 'car' :'catalog-used'
		}
		// crumbs() {
		// 	return [
		// 		{
		// 			name: 'Главная',
		// 			route: '/',
		// 			active: false
		// 		},
		// 		{
		// 			name: 'С пробегом',
		// 			route: '/used',
		// 			active: false
		// 		},
		// 		{
		// 			name: this.chosen.mark[0].title,
		// 			route: '/used/' + this.chosen.mark[0].slug,
		// 			active: false
		// 		},
		// 		{
		// 			name: this.chosen.folder[0].title,
		// 			route: '/used/' + this.chosen.folder[0].slug,
		// 			active: false
		// 		}
		// 	]
		// }
	}
}
</script>