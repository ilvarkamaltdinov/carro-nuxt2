<template>
	<section class="page-main__text text grid__col-8">
		<h2 class="heading heading--h2 visually-hidden">Об услуге выкупа</h2>
		<div class="text__wrap text__wrap--figure">
			<div class="text__figure figure">
				<picture-component
						classes="text__figure-img lazyload"
						:small="`${require(`~/assets/img/figures/figure-7@1x.png`)}`"
						:small-webp="`${require(`~/assets/img/figures/figure-7@1x.webp`)}`"
						:big="`${require(`~/assets/img/figures/figure-7@2x.png`)}`"
						:big-webp="`${require(`~/assets/img/figures/figure-7@2x.webp`)}`" />
			</div>
			<div class="text__content">
				<p class="text__p">CARRO предложит лучшую цену на рынке за Ваш автомобиль. Забудьте об авто-аукционах, встречах с покупателями, трате времени и утомительных "переговорах" по телефону.
				</p>
				<p class="text__p">После оформления заявки мы оценим Ваш автомобиль — в любом автосалоне-партнере или с выездом специалиста-оценщика — и выплатим всю сумму на руки мгновенно.
				</p>
				<p class="text__p">Как правило, наши специалисты оценивают автомобиль в сумму, равную 95-98% от рыночной цены. Итоговая сумма зависит от состояния автомобиля — технического и визуального, комплектации и др.
				</p>
				<p class="text__p">Мы выкупаем разные автомобили вне зависимости от состояния, марки, модели, года выпуска. Просто оставьте заявку и профессиональный менеджер перезвонит Вам, чтобы согласовать цену, место осмотра и другие нюансы сделки.
				</p>
			</div>
		</div>
	</section>
</template>
