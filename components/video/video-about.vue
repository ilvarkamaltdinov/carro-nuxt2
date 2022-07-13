<template>
	<section class="page-main__video video grid__col-12">
		<h2 class="visually-hidden">Видео о портале carro.ru</h2>
		<div class="video__block"
		     id="about-video">
			<button v-if="!isVideo" class="video__play"
			        @click="isVideo = true">
				<svg-icon class="video__play-icon"
				          name="icon-play" />
			</button>
			<div v-if="isVideo"
			     class="youtube"
			     id="pf0hQmzZ6sE"
			     style="width:100%; height:100%;">
				<iframe id="yt-iframe"
				        width="560"
				        height="315"
				        src="https://www.youtube.com/embed/67RlWpltRSY"
				        title="YouTube video player"
				        frameborder="0"
				        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				        allowfullscreen></iframe>
			</div>
			<div v-else
			     class="video__img-wrap">
				<picture>
					<source type="image/webp"
					        media="(min-width: 768px)"
					        :data-srcset="`${require(`~/assets/img/video/iphone@1x.webp`)} 1x, ${require(`~/assets/img/video/iphone@2x.webp`)} 2x`" />
					<source media="(min-width: 768px)"
					        :srcset="`${require(`~/assets/img/video/iphone@1x.png`)} 1x, ${require(`~/assets/img/video/iphone@2x.png`)} 2x`" />
					<img class="video__img lazyload"
					     data-src="~/assets/img/video/iphone@1x.png"
					     :data-srcset="`${require(`~/assets/img/video/iphone@2x.png`)} 2x`"
					     alt="" />
				</picture>
			</div>
			<p class="video__text">Узнай, почему на carro.ru лучшие цены в России!</p>
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {
			isVideo: false
		}
	}
}
</script>