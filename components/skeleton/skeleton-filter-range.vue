<template>
	<li class="filter__menu-group skeleton">
		<h2 class="heading heading--h3">{{ title }}</h2>
		<div class="skeleton__input-wrap">
			<div class="skeleton__content skeleton__content--input"></div>
			<div class="skeleton__content skeleton__content--input"></div>
		</div>
		<div class="skeleton__content skeleton__content--range"></div>
	</li>
</template>
<script>
export default {
	props: {
		title: String
	}
}
</script>