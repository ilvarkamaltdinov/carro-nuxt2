<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs"/>
		</div>
		<div class="grid grid--container">
			<featured-banks />
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
					name:'Банки',
					route:'/banks',
					active: true
				}
			]
		}
	}
}
</script>