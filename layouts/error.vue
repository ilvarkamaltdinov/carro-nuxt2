<template>
	<main class="page-main">
		<div class="grid grid--container">
			<section class="page-main__not-found not-found">
				<div class="not-found__block">
					<picture-component
							classes="not-found__img lazyload"
							:small="`${require(`~/assets/img/404@1x.png`)}`"
							:small-webp="`${require(`~/assets/img/404@1x.webp`)}`"
							:big="`${require(`~/assets/img/404@2x.png`)}`"
							:big-webp="`${require(`~/assets/img/404@2x.webp`)}`" />
				</div>
			</section>
		</div>
	</main>
</template>

<script>
export default {
	props: ['error'],
	head: {
		title: 'Ошибка 404 - CARRO'
	}
}
</script>
