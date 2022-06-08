<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs"/>
		</div>
		
		<car/>
		
		<!--<div class="grid grid&#45;&#45;container">-->
		<!--	<catalog-car/>-->
		<!--</div>-->
	</main>
</template>
<script>
export default {
	data(){
		return{
			crumbs:[
				{
					name:'Главная',
					route:'/',
					active: false
				},
				{
					name:'С пробегом',
					route:'/used',
					active: false
				},
				{
					name:'Марка',
					route:'/used/test',
					active: false
				},
				{
					name:'Модель',
					route:'/used/test',
					active: true
				},
				{
					name:'Поколение',
					route:'/used/test/test',
					active: false
				},
				{
					name:'Автомобиль',
					route:'/used/test/test/test',
					active: true
				}
			]
		}
	}
}
</script>