<template>
	<main class="page-main">
		<div class="grid grid--container">
			<section class="page-main__not-found not-found">
				<div class="not-found__block">
					<picture>
						<source type="image/webp"
						        media="(min-width: 768px)"
						        :data-srcset="`${require('~/assets/img/404@1x.webp')} 1x, ${require('~/assets/img/404@2x.webp')} 2x`" />
						<source media="(min-width: 768px)"
						        :data-srcset="`${require('~/assets/img/404@1x.png')} 1x, ${require('~/assets/img/404@2x.png')} 2x`" />
						<img class="not-found__img lazyload"
						     src="~/assets/img/404@1x.png"
						     :data-srcset="`${require('~/assets/img/404@2x.png')} 2x`"
						     alt="404" />
					</picture>
				</div>
			</section>
		</div>
	</main>
</template>

<script>
export default {
	props: ['error']
}
</script>
