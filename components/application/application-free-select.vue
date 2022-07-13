<template>
	<section class="page-main__application application grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">{{ pageTitle }}</h1>
				<span class="heading-group__label">Помощь при покупке авто с пробегом</span>
			</div>
		</div>
		<div class="grid__col-12 grid grid--application">
			<form-free-select />
			<text-free-select />
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