<template>
	<section class="page-main__application application grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">{{ pageTitle }}</h1>
				<span class="heading-group__label">Выкупим ваш автомобиль за 15 минут</span>
			</div>
		</div>
		<div class="grid__col-12 grid grid--application">
			<form-buyout />
			<text-buyout />
		</div>
	</section>
</template>
<script>
export default {
	props: {
		pageTitle: String
	}
}
</script>
