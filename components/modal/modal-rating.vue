<template>
	<div>
		<div class="modal__options">
			<div class="modal__rating">
				<rating :rating="5" :max="5"/>
				<div class="modal__rating-text">
					<h3 class="heading heading--h3">Общее состояние</h3>
				</div>
			</div>
			<div class="modal__buttons">
				<!--<button-download-card/>-->
			</div>
		</div>
		<div class="modal__wrap">
			<div class="features features--rating">
				<div class="features__group">
					<div class="features__item">
						<p>Запрет регистрационных действий на машину накладывается, если у автовладельца есть неоплаченные штрафы и
						   налоги, либо если имущество стало предметом спора.
						</p>
					</div>
				</div>
				<div class="features__group">
					<div class="features__rating">
						<rating :rating="5" :max="5"/>
						<div class="features__item">
							<h3 class="heading heading--h3">Кузов</h3>
						</div>
					</div>
					<div class="features__list features__list--column">
						<div class="features__item features__item--rating">Кузов в отличном состоянии</div>
						<div class="features__item features__item--rating">Кузов в отличном состоянии</div>
						<div class="features__item features__item--rating">Кузов в отличном состоянии</div>
						<div class="features__item features__item--rating">Кузов в отличном состоянии</div>
						<div class="features__item features__item--rating features__item--problem">Кузов в отличном состоянии</div>
					</div>
				</div>
				<div class="features__group">
					<div class="features__rating">
						<rating :rating="5" :max="5"/>
						<div class="features__item">
							<h3 class="heading heading--h3">Кузов</h3>
						</div>
					</div>
					<div class="features__list features__list--column">
						<div class="features__item features__item--rating">Кузов в отличном состоянии</div>
						<div class="features__item features__item--rating">Кузов в отличном состоянии</div>
						<div class="features__item features__item--rating">Кузов в отличном состоянии</div>
						<div class="features__item features__item--rating">Кузов в отличном состоянии</div>
						<div class="features__item features__item--rating features__item--problem">Кузов в отличном состоянии</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>