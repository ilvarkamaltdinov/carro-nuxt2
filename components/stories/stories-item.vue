<template>
	<li class="stories__item">
		<div class="stories__figure">
			<picture>
				<source type="image/webp"
				        media="(min-width: 768px)"
				        srcset="img/stories/stories-undefined@1x.webp 1x, img/stories/stories-undefined@2x.webp 2x" />
				<source media="(min-width: 768px)"
				        srcset="img/stories/stories-undefined@1x.png 1x, img/stories/stories-undefined@2x.png 2x" />
				<img class="stories__img"
				     src="img/stories/stories-undefined@1x.png"
				     srcset="img/stories/stories-undefined@2x.png 2x"
				     loading="lazy"
				     alt="" />
			</picture>
		</div>
		<div class="stories__text"></div>
	</li>
</template>
<script>
export default {
	props: {
		item:{
			type: Object,
			default:()=> {}
		}
	}
}
</script>
