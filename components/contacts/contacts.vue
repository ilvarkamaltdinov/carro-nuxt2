<template lang="pug">
	section.page-main__about.about.grid
		.heading-group.heading-group--h1
			.heading-group__wrap
				h1.heading.heading--h1 Контакты
					span.heading__promo
				span.heading-group__label Свяжитесь с нами
		
		.about__block.grid__col-12.grid.text
			.grid__col-7.text__wrap.text__wrap--figure
				.text__figure.figure
					picture
						source(type="image/webp" media="(min-width: 768px)" srcset=`img/figures/figure-5@1x.webp 1x, img/figures/figure-5@2x.webp 2x`)
						source(media="(min-width: 768px)" srcset=`img/figures/figure-5@1x.png 1x, img/figures/figure-5@2x.png 2x`)
						img.text__figure-img(src=`img/figures/figure-5@1x.png` srcset=`img/figures/figure-5@2x.png 2x` loading="lazy" alt="")
				
				.text__content
					
					.text__contacts-group
						.text__contacts-label Приобретения автомобиля:
						a.text__contacts-item(href="tel:+79993522343") +7 (925) 351-24-22
					
					.text__contacts-group
						.text__contacts-label Кредитный отдел:
						a.text__contacts-item(href="tel:+79993522343") +7 (925) 351-24-22
					
					.text__contacts-group
						.text__contacts-label Вопросы сотрудничества:
						a.text__contacts-item(href="mailto:+79993522343") support@carro.ru
			
			.grid__col-5.text__wrap
				.text__content
					h2.heading.heading--h2 Юридическая информация
					
					.text__contacts-label Юридический адрес:
					p.text__p 115487, г. Москва, ул. Нагатинская, д. 16/9
					
					.text__contacts-label Физический адрес:
					p.text__p 117405, г. Москва, Варшавское шоссе, д. 170Г
					
					ul.text__list
						li.text__list-item ООО «Ю-СТАЙЛ»
						li.text__list-item ИНН: 7724398974
						li.text__list-item ОГРН: 1177746078916
						li.text__list-item КПП: 772401001

</template>