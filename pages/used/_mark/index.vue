<template>
	<main class="page-main">
		<div class="grid">
			<!--<crumbs :crumbs="crumbs" />-->
		</div>
		<catalog-used />
	</main>
</template>
<script>
export default {
	layout: 'catalogLayout',
}
</script>
<!--<script>-->
<!--import {mapGetters} from "vuex";-->

<!--export default {-->
<!--	computed: {-->
<!--		...mapGetters({-->
<!--			chosen: 'filters/filters/chosen'-->
<!--		}),-->
<!--		crumbs() {-->
<!--			return [-->
<!--				{-->
<!--					name: 'Главная',-->
<!--					route: '/',-->
<!--					active: false-->
<!--				},-->
<!--				{-->
<!--					name: 'С пробегом',-->
<!--					route: '/used',-->
<!--					active: false-->
<!--				},-->
<!--				{-->
<!--					name: this.chosen.mark[0].title,-->
<!--					route: '/used/' + this.chosen.mark[0].slug,-->
<!--					active: true-->
<!--				}-->
<!--			]-->
<!--		}-->
<!--	}-->
<!--}-->
<!--</script>-->