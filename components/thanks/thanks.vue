<template lang="pug">
	section.page-main__thanks.thanks.grid
		.heading-group.heading-group--h1
			.heading-group__wrap
				h1.heading.heading--h1 Заявка успешно отправлена
					span.heading__promo
				span.heading-group__label Автокредит предварительно одобрен
		
		.thanks__block.grid__col-12.grid.text
			.grid__col-8.text__wrap.text__wrap--figure
				.text__figure.figure
					picture
						source(type="image/webp" media="(min-width: 768px)" srcset=`img/figures/figure-1@1x.webp 1x, img/figures/figure-1@2x.webp 2x`)
						source(media="(min-width: 768px)" srcset=`img/figures/figure-1@1x.png 1x, img/figures/figure-1@2x.png 2x`)
						img.text__figure-img(src=`img/figures/figure-1@1x.png` srcset=`img/figures/figure-1@2x.png 2x` loading="lazy" alt="")
				
				.text__content
					p.text__p Андрей, автомобиль Kia Spectra I Рестайлинг 2 1.6 AT (101 л.с.) 2008 закреплен за вашей заявкой #838280. Менеджер свяжется с вами в ближайшее время. Спасибо, что выбрали нас!
					
					p.text__p После подтверждения заявки вас пригласят в автоцентр для прохождения бесплатного тест-драйва и оформления сделки. Обратите внимание, что оплата возможна как за наличные, так и посредством безналичного расчета.
					
					p.text__p И еще. Передайте менеджеру, что пришли по объявлению на CARRO, чтобы получить подарок и бесплатный комплект шин.
			
			.thanks__catalog.catalog.catalog--single.grid__col-4
				catalog-item-form-modal
		
		.thanks__benefits.grid__col-12
			benefits-car


</template>