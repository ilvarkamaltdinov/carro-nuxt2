<template>
	
	<section class="modal modal--makes">
		<h2 class="visually-hidden">Выберите марку автомобиля</h2>
		<div class="modal__wrap grid grid__container">
			<div class="grid__col-12">
				<makes/>
			</div>
		</div>
	</section>

</template>
<script>
const makes = () => import('@/components/makes/makes')
export default {
	components:{makes}
}
</script>