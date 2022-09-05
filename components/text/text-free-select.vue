<template>
	<section class="page-main__text text grid__col-8">
		<h2 class="heading heading--h2 visually-hidden">Об услуге выкупа</h2>
		<div class="text__wrap text__wrap--figure">
			<div class="text__figure figure">
				<picture-component
						classes="text__figure-img lazyload"
						:small="`${require(`~/assets/img/figures/figure-9@1x.png`)}`"
						:small-webp="`${require(`~/assets/img/figures/figure-9@1x.webp`)}`"
						:big="`${require(`~/assets/img/figures/figure-9@2x.png`)}`"
						:big-webp="`${require(`~/assets/img/figures/figure-9@2x.webp`)}`" />
			</div>
			<div class="text__content">
				<p class="text__p">
					На сайтах объявлений можно найти тысячи вариантов авто на любой вкус и цвет. Однако найти нужную модель определенного года выпуска - лишь полдела. Главное в успешной покупке подержанного автомобиля — убедиться в его надлежащем техническом состоянии и юридической чистоте.
				</p>
				<p class="text__p">
					Наш сервис избавляет вас не только от рисков, но и от необходимости тратить свое драгоценное время. Обученные специалисты с удовольствием подберут несколько вариантов по заданным параметрам, при необходимости расширив поиск за счет похожих моделей.
				</p>
				<p class="text__p">
					Подобранные варианты пробиваются по всем базам, юристы проверяют юридическую чистоту каждого автомобиля, а технический отдел — исправность всех узлов, соответствие реального пробега заявленному.
				</p>
			</div>
		</div>
	</section>
</template>