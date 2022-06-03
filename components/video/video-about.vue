<template>
	<section class="page-main__video video grid__col-12">
		<h2 class="visually-hidden">Видео о портале carro.ru</h2>
		<div class="video__block"
		     id="about-video">
			<button class="video__play">
				<svg-icon class="video__play-icon" name="icon-play"/>
			</button>
			<div class="video__img-wrap">
				<picture>
					<source type="image/webp"
					        media="(min-width: 768px)"
					        srcset="img/video/iphone@1x.webp 1x, img/video/iphone@2x.webp 2x" />
					<source media="(min-width: 768px)"
					        srcset="img/video/iphone@1x.png 1x, img/video/iphone@2x.png 2x" />
					<img class="video__img"
					     src="img/video/iphone@1x.png"
					     srcset="img/video/iphone@2x.png 2x"
					     loading="lazy"
					     alt="" />
				</picture>
			</div>
			<p class="video__text">Узнай, почему на carro.ru лучшие цены в России!</p>
		</div>
		<!--<div class="youtube"-->
		<!--     id="pf0hQmzZ6sE"-->
		<!--     style="width:100%; height:100%;"></div>-->
	</section>
</template>