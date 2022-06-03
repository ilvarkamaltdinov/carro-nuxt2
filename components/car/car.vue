<template>
	<section class="page-main__car car">
		<div class="grid grid--container">
			<div class="heading-group heading-group--h1 grid__col-6">
				<div class="heading-group__wrap">
					<heading-h1>
						Land Rover Range Rover Sport
					</heading-h1>
					<span class="heading-group__label heading-group__label--car">
						I Рестайлинг [2009 - 2013]
						<span class="heading-group__year">
							2020
						</span>
					</span>
				</div>
			</div>
			<div class="car__top-buttons grid__col-6">
				<button class="button button--icon button--link">
					Обратный звонок
					<svg-icon class="icon"
					          name="icon-callback" />
				</button>
				<a href="tel:+74952452342"
				   class="button button--icon button--link">
					+7 495 245-23-42
					<svg-icon class="icon"
					          name="icon-call" />
				</a>
			</div>
		</div>
		<div class="car__slider-wrap">
			<div class="grid grid--container">
				//TODO-slider
			</div>
		</div>
		<div class="grid grid--car grid--container grid__col-12">
			<car-buy />
			<car-info />
		</div>
		<div class="grid grid--container">
			<benefits-car/>
			<car-credit/>
		</div>
	</section>
</template>