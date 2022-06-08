<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs"/>
		</div>
		<div class="grid grid--container">
			<catalog-desktop/>
		</div>
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
					active: true
				}
			]
		}
	}
}
</script>