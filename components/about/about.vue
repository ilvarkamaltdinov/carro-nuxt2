<template lang="pug">
	section.page-main__about.about.grid
		.heading-group.heading-group--h1
			.heading-group__wrap
				h1.heading.heading--h1 О портале
					span.heading__promo
				span.heading-group__label Находим лучшие автомобили с 2015 года
		
		.about__block.grid__col-12.grid.text
			.grid__col-8.text__wrap.text__wrap--figure
				.text__figure.figure
					picture
						source(type="image/webp" media="(min-width: 768px)" srcset=`img/figures/figure-4@1x.webp 1x, img/figures/figure-4@2x.webp 2x`)
						source(media="(min-width: 768px)" srcset=`img/figures/figure-4@1x.png 1x, img/figures/figure-4@2x.png 2x`)
						img.text__figure-img(src=`img/figures/figure-4@1x.png` srcset=`img/figures/figure-4@2x.png 2x` loading="lazy" alt="")
				
				.text__content
					h2.heading.heading--h2 Коротко о главном
					
					p.text__p В «стенах» нашего автопортала собраны тысячи подержанных автомобилей, прошедших техническую и юридическую экспертизу, а также новые автомобили и коммерческий транспорт.
					
					p.text__p Проверенные временем, опытные автодилеры формируют каталог CARRO, объединяя сотни автомобилей на одной площадке. Это удобно покупателям — тот случай, когда огромный выбор непременно переходит в качественную покупку.
			
			.grid__col-4.text__wrap
				.text__content
					h2.heading.heading--h2 Формирование парка
					
					p.text__p Что делает нас успешнее и прогрессивнее? Это уникальность и продуманность автопарка – у нас собраны наиболее востребованные и удачные модели самых разнообразных марок.
					
					p.text__p Проверка отдельно взятой модели начинается на этапе ее закупки и затем — продолжается во время предпродажной подготовки.
			
			.grid__col-7.text__wrap
				.text__content
					h2.heading.heading--h2 Наши принципы
					
					p.text__p Каждый день мы стремимся сделать покупку авто безопасной, цивилизованной и доступной, что и стало визитной карточкой CARRO.
					
					p.text__p Выгодный автокредит, детальная информация о товаре, гарантия и подарки — то, ради чего люди приходят на наш автопортал.
					
					p.text__p Мы сформировали культурный б/у-сегмент в сфере автоторговли и не собираемся останавливаться на достигнутом.
			
			.grid__col-5.text__wrap
				.text__content
					h2.heading.heading--h2 Коротко о главном
					
					p.text__p Что делает нас успешнее и прогрессивнее? Это уникальность и продуманность автопарка – у нас собраны наиболее востребованные и удачные модели самых разнообразных марок.
					
					p.text__p Проверка отдельно взятой модели начинается на этапе ее закупки и затем — продолжается во время предпродажной подготовки.
</template>