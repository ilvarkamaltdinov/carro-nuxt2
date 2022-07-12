<template>
	<section class="page-main__text text grid__col-12">
		<h2 class="heading heading--h2">Об услуге</h2>
		<div class="grid">
			<div class="text__wrap text__wrap--figure grid__col-12">
				<div class="text__figure figure">
					<picture>
						<source media="(min-width: 768px)"
						        type="image/webp"
						        data-srcset="~/assets/img/figures/figure-3@2x.webp" />
						<source media="(min-width: 768px)"
						        :data-srcset="`${require('~/assets/img/figures/figure-3@1x.webp')} 1x, ${require('~/assets/img/figures/figure-3@1x.webp')} 2x`" />
						<img class="text__figure-img lazyload"
						     data-src="~/assets/img/figures/figure-3@1x.png"
						     :data-srcset="`${require('~/assets/img/figures/figure-3@2x.png')} 2x`"
						     alt="Трейд-ин авто" />
					</picture>
				</div>
				<div class="text__content">
					<p class="text__p">Услуга Trade-In предполагает обмен Вашего старого автомобиля на более новый. Обмен
					                   позволяет
					                   сэкономить время на время затратной продаже своего авто, и обновить автомобиль за пару
					                   часов.
					</p>
					<p class="text__p">По приезду в автоцентр Ваш автомобиль проверят, оценят и предложат сумму к доплате в обе
					                   стороны. А выбрать автомобиль по вкусу из более чем 4000 проверенных авто, представленных
					                   на
					                   CARRO, будет совсем просто.
					</p>
					<p class="text__p">После выбора понравившейся модели оформляйте заявку на обмен и дождитесь звонка менеджера.
					                   Вам
					                   будет предложено подъехать в автоцентр для бесплатной технической диагностики, оценки и
					                   тест-драйва.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>