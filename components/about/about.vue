<template>
	<section class="page-main__about about grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">
					{{pageTitle}}
					<span class="heading__promo"></span>
				</h1>
				<span class="heading-group__label">Находим лучшие автомобили с 2015 года</span>
			</div>
		</div>
		<div class="about__block grid__col-12 grid text">
			<div class="grid__col-8 text__wrap text__wrap--figure">
				<div class="text__figure figure">
					<nuxt-picture quality="100"
					              :imgAttrs="{class:'text__figure-img'}"
					              src="img/figures/figure-4@2x.png" />
				</div>
				<div class="text__content">
					<h2 class="heading heading--h2">Коротко о главном</h2>
					<p class="text__p">В «стенах» нашего автопортала собраны тысячи подержанных автомобилей, прошедших техническую
					                   и юридическую экспертизу, а также новые автомобили и коммерческий транспорт.
					</p>
					<p class="text__p">Проверенные временем, опытные автодилеры формируют каталог CARRO, объединяя сотни
					                   автомобилей на одной площадке. Это удобно покупателям — тот случай, когда огромный выбор
					                   непременно переходит в качественную покупку.
					</p>
				</div>
			</div>
			<div class="grid__col-4 text__wrap">
				<div class="text__content">
					<h2 class="heading heading--h2">Формирование парка</h2>
					<p class="text__p">Что делает нас успешнее и прогрессивнее? Это уникальность и продуманность автопарка – у нас
					                   собраны наиболее востребованные и удачные модели самых разнообразных марок.
					</p>
					<p class="text__p">Проверка отдельно взятой модели начинается на этапе ее закупки и затем — продолжается во
					                   время предпродажной подготовки.
					</p>
				</div>
			</div>
			<div class="grid__col-7 text__wrap">
				<div class="text__content">
					<h2 class="heading heading--h2">Наши принципы</h2>
					<p class="text__p">Каждый день мы стремимся сделать покупку авто безопасной, цивилизованной и доступной, что и
					                   стало визитной карточкой CARRO.
					</p>
					<p class="text__p">Выгодный автокредит, детальная информация о товаре, гарантия и подарки — то, ради чего люди
					                   приходят на наш автопортал.
					</p>
					<p class="text__p">Мы сформировали культурный б/у-сегмент в сфере автоторговли и не собираемся останавливаться
					                   на достигнутом.
					</p>
				</div>
			</div>
			<div class="grid__col-5 text__wrap">
				<div class="text__content">
					<h2 class="heading heading--h2">Коротко о главном</h2>
					<p class="text__p">Что делает нас успешнее и прогрессивнее? Это уникальность и продуманность автопарка – у нас
					                   собраны наиболее востребованные и удачные модели самых разнообразных марок.
					</p>
					<p class="text__p">Проверка отдельно взятой модели начинается на этапе ее закупки и затем — продолжается во
					                   время предпродажной подготовки.
					</p>
				</div>
			</div>
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