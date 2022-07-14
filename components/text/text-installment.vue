<template>
	<section class="page-main__text text grid__col-12">
		<h2 class="heading heading--h2">Об услуге</h2>
		<div class="grid">
			<div class="text__wrap text__wrap--figure grid__col-12">
				<div class="text__figure figure">
					<picture>
						<source media="(min-width: 768px)"
						        type="image/webp"
						        data-srcset="~/assets/img/figures/figure-2@2x.webp" />
						<source media="(min-width: 768px)"
						        :data-srcset="`${require('~/assets/img/figures/figure-2@1x.webp')} 1x, ${require('~/assets/img/figures/figure-2@1x.webp')} 2x`" />
						<img class="text__figure-img lazyload"
						     data-src="~/assets/img/figures/figure-2@1x.png"
						     :data-srcset="`${require('~/assets/img/figures/figure-2@2x.png')} 2x`"
						     alt="Кредит" />
					</picture>
				</div>
				<div class="text__content">
					<p class="text__p">На CARRO вы можете приобрести автомобиль в рассрочку без любых переплат и процентов.
					                   Единственным требованием станет первоначальный взнос в размере не менее 10% от стоимости
					                   автомобиля.
					</p>
					<p class="text__p">Рассрочка является удобным способом покупки транспортного средства с пробегом, учитывая,
					                   что процентная ставка не начисляется. Рассрочка станет идеальным решением в случае
					                   погашения стоимости автомобиля за срок до 5 лет. Если же выплата всей суммы за 5 лет
					                   обременительна для семейного бюджета, оптимальным решением станет
						<nuxt-link to="/credit">автокредит</nuxt-link>
					                   4.9% со
					                   скидкой до 150 000 ₽.
					</p>
					<p class="text__p">Окончательное решение о предоставлении рассрочки принимается банками-партнерами CARRO.
					</p>
					<p class="text__p">Преимущества рассрочки carro.ru:</p>
					<ul class="text__list">
						<li class="text__list-item">Ставка 0%</li>
						<li class="text__list-item">Первоначальный взнос от 10%</li>
						<li class="text__list-item">Зимняя резина в подарок</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>