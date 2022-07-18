<template>
	<div>
		<div class="modal__options">
			<div class="modal__rating">
				<rating :rating="modalData.rating_total"
				        :max="5" />
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
				<!--<div class="features__group">-->
				<!--	<div class="features__item">-->
				<!--		<p>Запрет регистрационных действий на машину накладывается, если у автовладельца есть неоплаченные штрафы и-->
				<!--		   налоги, либо если имущество стало предметом спора.-->
				<!--		</p>-->
				<!--	</div>-->
				<!--</div>-->
				<div class="features__group">
					<div class="features__rating">
						<rating :rating="modalData.rating_body"
						        :max="5" />
						<div class="features__item">
							<h3 class="heading heading--h3">Кузов</h3>
						</div>
					</div>
					<div class="features__list features__list--column">
						<div class="features__item features__item--rating">{{ currentBodyText[0] }}</div>
						<div class="features__item features__item--rating">{{ currentBodyText[1] }}
						</div>
					</div>
				</div>
				<div class="features__group">
					<div class="features__rating">
						<rating :rating="modalData.rating_interior"
						        :max="5" />
						<div class="features__item">
							<h3 class="heading heading--h3">Интерьер</h3>
						</div>
					</div>
					<div class="features__list features__list--column">
						<div class="features__item features__item--rating">Отделка салона без повреждений </div>
						<div class="features__item features__item--rating">Сиденья в хорошем состоянии</div>
						<div class="features__item features__item--rating">Рулевое колесо без повреждений</div>
					</div>
				</div>
				<div class="features__group">
					<div class="features__rating">
						<rating :rating="modalData.rating_technical"
						        :max="5" />
						<div class="features__item">
							<h3 class="heading heading--h3">Технические характеристики</h3>
						</div>
					</div>
					<div class="features__list features__list--column">
						<div class="features__item features__item--rating">Нет ошибок/неисправностей электрооборудования (источники
						                                                   питания, электронные блоки управления и т.п.)
						</div>
						<div class="features__item features__item--rating">Нет повышенного стука или шума при работе двигателя</div>
						<div class="features__item features__item--rating">Нет дымности выхлопа</div>
						<div class="features__item features__item--rating">Нет посторонних звуков при вращении рулевого колеса на
						                                                   месте при заведенном двигателе
						</div>
						<div class="features__item features__item--rating">Нет повышенной вибрации при переключении передач</div>
						<div class="features__item features__item--rating">Нет ошибок системы безопасности (ABS, система
						                                                   стабилизации, подушки безопасности, ремни и т.п.)
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			modalData: 'modal/modal-main/modalData'
		}),
		currentBodyText() {
			if (this.modalData.rating_body === 5) {
				return ['Кузов в отличном состоянии', 'Повреждений нет']
			}
			if (this.modalData.rating_body < 5 && this.modalData.rating_body >= 4) {
				return ['Кузов в хорошем состоянии', 'Повреждений нет']
			}
			if (this.modalData.rating_body < 4) {
				return ['Кузов в среднем состоянии', 'Имеются потертости']
			}
		}
	}
}
</script>