<template lang="pug">
	
	section.page-main__text.text.grid__col-12
		h2.heading.heading--h2 Об услуге
		.grid
			.text__wrap.text__wrap--figure.grid__col-12
				.text__figure.figure
					picture
						source(type="image/webp" media="(min-width: 768px)" srcset=`img/figures/figure-2@1x.webp 1x, img/figures/figure-2@2x.webp 2x`)
						source(media="(min-width: 768px)" srcset=`img/figures/figure-2@1x.png 1x, img/figures/figure-2@2x.png 2x`)
						img.text__figure-img(src=`img/figures/figure-2@1x.png` srcset=`img/figures/figure-2@2x.png 2x` loading="lazy" alt="")
				
				.text__content
					p.text__p Благодаря нашим кредитным программам Вы сможете наслаждаться автомобилем уже сегодня без больших единовременных затрат. CARRO выступает в роли кредитного брокера, подбирая для Вас автоцентры и банки с лучшими условиями автокредитования.
					p.text__p Мы возьмем на себя подбор оптимальной кредитной программы и оформление сопутствующих документов. Вам остается лишь выбрать подходящий автомобиль и заполнить кредитную заявку для предварительного одобрения.
					p.text__p После звонка кредитного эксперта приезжайте в автоцентр, пробуйте понравившийся автомобиль в рамках бесплатного тест-драйва и оформляйте автокредит прямо в салоне без необходимости обращения в отделение банка-партнера.
					p.text__p Преимущества автокредита carro.ru:
					ul.text__list
						li.text__list-item Низкая ставка 4.9%
						li.text__list-item Первоначальный взнос от 0%
						li.text__list-item Trade-In как первый взнос
						li.text__list-item Зимняя резина в подарок

</template>