<template>
	<section class="page-main__faq faq grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">{{ pageTitle }}
					<span class="heading__promo"></span>
				</h1>
				<span class="heading-group__label">Отвечаем на ваши вопросы</span>
			</div>
		</div>
		<div class="grid__col-12 grid">
			<div class="grid__col-3">
				<div class="faq__nav">
					<ul class="faq__nav-list">
						<li class="faq__nav-item"
						    v-for="item in nav"
						    :key="item.slug">
							<a class="link-ancor faq__ancor"
							   :href="`#faq-${item.slug}`">
								{{ item.title }}
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="grid__col-9">
				<section class="faq__questions col">
					<div class="faq__questions-block">
						<div class="faq__questions-group"
						     v-for="item in body"
						     :key="item.slug"
						     :id="`faq-${item.slug}`">
							<h2 class="faq__heading heading heading--h2">{{ item.title }}</h2>
							<dl class="faq__item"
							    v-for="question in item.list"
							    :key="question.question">
								<dt class="faq__question">{{ question.question }}</dt>
								<dd class="faq__answer">{{ question.answer }}</dd>
								<svg-icon class="icon faq__close"
								          name="icon-close-s" />
							</dl>
						</div>
						
						<div class="faq__questions-group"
						     id="faq-general">
							<h2 class="faq__heading heading heading--h2">Общие вопросы</h2>
							<dl class="faq__item">
								<dt class="faq__question"></dt>
								<dd class="faq__answer">CARRO - первый в России автопортал проверенных автомобилей.</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Какие автосалоны представлены на CARRO?</dt>
								<dd class="faq__answer">На CARRO представлены крупнейшие автосалоны Москвы, специализирующиеся на
								                        реализации автомобилей с пробегом.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Каким образом осуществляется проверка автомобилей, представленных на сайте
								                          CARRO?
								</dt>
								<dd class="faq__answer">Проверка осуществляется специалистами CARRO, которые выезжают в
								                        автосалоны-партнеры и производят как юридическую проверку, так и диагностику
								                        технической составляющей автомобиля.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Могу ли я получить дополнительную скидку при покупке автомобиля через CARRO?
								</dt>
								<dd class="faq__answer">При покупке автомобиля через CARRO в кредит Вы получаете скидку до 50 000 ₽ на
								                        любую понравившуюся модель.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Могу ли я приобрести автомобиль за наличные?</dt>
								<dd class="faq__answer">Конечно, Вы можете купить понравившееся авто как за наличные деньги с
								                        единовременной выплатой, так и в кредит.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Какие гарантии я получаю на приобретаемый автомобиль через CARRO</dt>
								<dd class="faq__answer">Вы получаете гарантию юридической чистоты сделки и технической составляющей
								                        выбранного авто.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Могу ли я купить подержанный автомобиль в кредит?</dt>
								<dd class="faq__answer">Да, покупка подержанного автомобиля возможна в кредит.</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Могу ли я вернуть приобретенный автомобиль?</dt>
								<dd class="faq__answer">Вы можете вернуть приобретенный Вами автомобиль через CARRO в случае его
								                        технической неисправности в течение одного года
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Могу ли я забронировать понравившийся автомобиль?</dt>
								<dd class="faq__answer">Вы можете оставить заявку на автомобиль, уточнив его фактическое наличие перед
								                        приездом в автосалон. Чтобы зарезервировать машину, необходимо внести предоплату
								                        в автосалоне.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
						</div>
						<div class="faq__questions-group"
						     id="faq-credit">
							<h2 class="faq__heading heading heading--h2">Автокредитование</h2>
							<dl class="faq__item">
								<dt class="faq__question">Почему такая низкая процентная ставка?</dt>
								<dd class="faq__answer">Низкая % ставка обусловлена государственным субсид…ми от наших
								                        банков-партнеров.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">На какой срок предоставляется кредит?</dt>
								<dd class="faq__answer">Срок кредита от 6 месяцев до 7 лет. При желании, В каких-либо штрафов и
								                        комиссий.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Какую сумму можно получить при подаче заявки на автокредит?</dt>
								<dd class="faq__answer">Сумма кредита варьируется от 100 000 ₽ до 2 000 000 ₽ индивидуально для каждого
								                        клиента.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Необходим ли первоначальный взнос при оформлении автомобиля в кредит?</dt>
								<dd class="faq__answer">Первый взнос производится на Ваше усмотрение. Посл…ого взноса. Чем больше взнос
								                        - тем ниже % ставка.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Какие документы необходимы для оформления автокредита?</dt>
								<dd class="faq__answer">Для оформления автокредита Вам необходимо предоста…и водительское
								                        удостоверение.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Необходимо ли мне поручительство при оформлении автокредита?</dt>
								<dd class="faq__answer">При оформлении автокредита через CARRO поручительство не требуется.</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Обязательно ли оформление КАСКО при покупке подержанного автомобиля в
								                          кредит?
								</dt>
								<dd class="faq__answer">При покупке подержанного автомобиля в кредит через…изводится по желанию
								                        клиента.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Какие банки предоставляют услугу автокредитования?</dt>
								<dd class="faq__answer">Компания CARRO сотрудничает более чем с десятью ве… которых ВТБ24, Citibank,
								                        Росбанк, УралСиб и т д.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Кредитование каких регионов осуществляют банки-партнёры CARRO?</dt>
								<dd class="faq__answer">Банки-партнеры осуществляют кредитование по всей т. Осетия — Алания, Чеченская
								                        Республика.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">С какого возраста я могу оформить автокредит?</dt>
								<dd class="faq__answer">Оформление автокредита возможно с 21 года.</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Могу ли я получить кредит с «плохой» кредитной историей?</dt>
								<dd class="faq__answer">Оформление кредита с «плохой» кредитной историей р…тся в индивидуальном
								                        порядке.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
						</div>
						<div class="faq__questions-group"
						     id="faq-programms">
							<h2 class="faq__heading heading heading--h2">Обмен авто</h2>
							<dl class="faq__item">
								<dt class="faq__question">В чем разница между обменом авто и системой «Трейд-Ин»?</dt>
								<dd class="faq__answer">Разницы между обменом авто и системой «Трейд-Ин» нет.</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Как будет происходить оценка моего автомобиля?</dt>
								<dd class="faq__answer">Ваш автомобиль оценивается исходя из его среднерыночной стоимости.</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Какие автомобили могут участвовать в программе «Трейд-Ин»?</dt>
								<dd class="faq__answer">В программе обмена «Трейд-Ин» могут участвовать пр…зведенные не ранее 1998
								                        года.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Какой автомобиль я могу приобрести по системе «Трейд-Ин»?</dt>
								<dd class="faq__answer">По системе «Трейд-Ин» Вы можете получить любой авто как за наличный расчет, так
								                        и оформить автокредит.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Сколько времени занимает процедура сделки по системе «Трейд-Ин»?</dt>
								<dd class="faq__answer">Процедура сделки по системе «Трейд-Ин» занимает не новом авто в день
								                        обращения.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
						</div>
						<div class="faq__questions-group"
						     id="faq-promo">
							<h2 class="faq__heading heading heading--h2">Госпрограммы</h2>
							<dl class="faq__item">
								<dt class="faq__question">Что такое программа государственной утилизации?</dt>
								<dd class="faq__answer">Программа государственной утилизации включает в себя утилизацию Вашего старого
								                        автотранспорта с последующей субсидией в размере 50 000 ₽ для покупки нового
								                        автомобиля.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Какие условия предполагает программа «Семейный автомобиль»?</dt>
								<dd class="faq__answer">Предоставляется скидка в размере 10% от стоимости машины при соблюдении ряда
								                        условий.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Какие выгоды предполагает программа «Первый автомобиль»?</dt>
								<dd class="faq__answer">Предоставляется скидка в размере 10% от стоимости машины при соблюдении ряда
								                        условий. Для участника программы автомобиль должен быть первым, а возраст
								                        покупателя не должен превышать 30 лет. При этом максимальная стоимость
								                        автомобиля по акции - 1 450 000 рублей.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
						</div>
						<div class="faq__questions-group"
						     id="faq-exchange">
							<h2 class="faq__heading heading heading--h2">Акции</h2>
							<dl class="faq__item">
								<dt class="faq__question">Могу ли я расчитывать на скидку при покупке автомобиля через CARRO?</dt>
								<dd class="faq__answer">При покупке автомобиля в кредит через CARRO Вы получите дополнительную скидку 50
								                        000 ₽. Для этого оставьте кредитную заявку на нашем сайте.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Могу ли я расчитывать на подарок от автосалона-партнера CARRO?</dt>
								<dd class="faq__answer">В случае приобретения Вами любого автомобиля в кредит через CARRO Вы можете
								                        расчитывать на любой доступный подарок на выбор (парктроник, комплект зимней
								                        резины, видеорегистратор).
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Есть ли скидка при обмене (Trade-In) автомобиля</dt>
								<dd class="faq__answer">Если Вы решили обменять свое авто через нашу площадку, то можете расчитывать на
								                        скидку до 50 000 ₽ на новый автомобиль.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
						</div>
						<div class="faq__questions-group"
						     id="faq-buyout">
							<h2 class="faq__heading heading heading--h2">Выкуп авто</h2>
							<dl class="faq__item">
								<dt class="faq__question">Какой автомобиль я могу продать через CARRO?</dt>
								<dd class="faq__answer">Через CARRO Вы можете продать любой автомобиль, необходимо лишь заполнить
								                        заявку.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Как будет осуществляться оценка моего автомобиля?</dt>
								<dd class="faq__answer">Ваш автомобиль будет оцениваться исходя из его среднерыночной стоимости.</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Где будет проходить осмотр моего автомобиля?</dt>
								<dd class="faq__answer">Осмотр Вашего авто будет проходить в любом удобном для Вас месте в городе Москва
								                        и МО.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Сколько времени занимает оформление сделки при выкупе авто?</dt>
								<dd class="faq__answer">Время оформления сделки занимает не более 1 дня.</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Как быстро я получу деньги за проданное авто?</dt>
								<dd class="faq__answer">Деньги за проданный автомобиль Вы получите сразу после заключения договора,
								                        другими словами, в день обращения.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
						</div>
						<div class="faq__questions-group"
						     id="faq-test">
							<h2 class="faq__heading heading heading--h2">Тест-драйв</h2>
							<dl class="faq__item">
								<dt class="faq__question">Что такое тест-драйв?</dt>
								<dd class="faq__answer">Тест-драйв — поездка на автомобиле для оценки его ходовых качеств и общих
								                        потребительских свойств.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Могу ли я записаться на тест-драйв в автосалон-партнёр CARRO?</dt>
								<dd class="faq__answer">Да, вы можете записаться на тест-драйв в любом из автосалонов-партнёров CARRO.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Как я могу записаться на тест-драйв?</dt>
								<dd class="faq__answer">Для того, что бы записаться на тест-драйв, необходимо обратиться в
								                        автосалон-партнер CARRO, где представлен интересующий Вас автомобиль.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Могу ли я провести тест-драйв нескольких автомобилей сразу?</dt>
								<dd class="faq__answer">Да, Вы можете провести тест-драйв нескольких автомобилей сразу.</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Тест-драйв доступен для всех автомобилей?</dt>
								<dd class="faq__answer">Конечно, любой автомобиль, представлнный на CARRO, можно опробовать на дороге
								                        перед покупкой.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Должен ли я платить за тест-драйв?</dt>
								<dd class="faq__answer">Все расходы на топливо мы берем на себя, просто наслаждайтесь пробной поездкой и
								                        выбирайте автомобиль, максимально подходящий Вашему стилю вождения.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Нужно ли проходить тест?</dt>
								<dd class="faq__answer">Мы всегда рекомендуем ознакомиться с автомобилем перед покупкой.</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
							<dl class="faq__item">
								<dt class="faq__question">Покажут ли мне салон, основные моменты управления?</dt>
								<dd class="faq__answer">Конечно, опытный консультант расскажет Вам о нюансах салона, функциональности
								                        передней панели и особенностях управления.
								</dd>
								<svg class="icon faq__close"
								     width="24"
								     height="24"
								     viewBox="0 0 40 40">
									<use xlink:href="#icon-close-s"></use>
								</svg>
							</dl>
						</div>
					</div>
				</section>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			nav: [
				{
					title: 'Общие вопросы',
					slug: 'general'
				},
				{
					title: 'Автокредитование',
					slug: 'credit'
				},
				{
					title: 'Госпрограммы',
					slug: 'programms'
				},
				{
					title: 'Акции',
					slug: 'promo'
				},
				{
					title: 'Обмен авто',
					slug: 'exchange'
				},
				{
					title: 'Выкуп',
					slug: 'faq-buyout'
				},
				{
					title: 'Тест-драйв',
					slug: 'faq-test'
				},
			],
			body: [
				{
					slug: 'general',
					title: 'Общие вопросы',
					list: [
						{
							question: 'Что такое CARRO?',
							answer: 'CARRO - первый в России автопортал проверенных автомобилей.'
						},
						{
							question: 'Какие автосалоны представлены на CARRO?',
							answer: ''
						},
						{
							question: 'Каким образом осуществляется проверка автомобилей, представленных на сайте CARRO?',
							answer: ''
						},
						{
							question: 'Могу ли я получить дополнительную скидку при покупке автомобиля через CARRO?',
							answer: ''
						},
						{
							question: 'Могу ли я приобрести автомобиль за наличные?',
							answer: ''
						},
						{
							question: 'Какие гарантии я получаю на приобретаемый автомобиль через CARRO',
							answer: ''
						},
						{
							question: 'Могу ли я купить подержанный автомобиль в кредит?',
							answer: ''
						},
						{
							question: 'Могу ли я вернуть приобретенный автомобиль?',
							answer: ''
						},
						{
							question: 'Могу ли я забронировать понравившийся автомобиль?',
							answer: ''
						},
					]
				},
				{
					slug: 'credit',
					title: 'Автокредитование',
					list: [
						{
							question: 'Почему такая низкая процентная ставка?',
							answer: ''
						},
						{
							question: 'На какой срок предоставляется кредит?',
							answer: ''
						},
						{
							question: 'Какую сумму можно получить при подаче заявки на автокредит?',
							answer: ''
						},
						{
							question: 'Необходим ли первоначальный взнос при оформлении автомобиля в кредит?',
							answer: ''
						},
						{
							question: 'Какие документы необходимы для оформления автокредита?',
							answer: ''
						},
						{
							question: 'Необходимо ли мне поручительство при оформлении автокредита?',
							answer: ''
						},
						{
							question: 'Обязательно ли оформление КАСКО при покупке подержанного автомобиля в кредит?',
							answer: ''
						},
						{
							question: 'Какие банки предоставляют услугу автокредитования?',
							answer: ''
						},
						{
							question: 'Кредитование каких регионов осуществляют банки-партнёры CARRO?',
							answer: ''
						},
						{
							question: 'С какого возраста я могу оформить автокредит?',
							answer: ''
						},
						{
							question: 'Могу ли я получить кредит с «плохой» кредитной историей?',
							answer: ''
						},
					]
				},
				{
					slug: 'programms',
					title: 'Госпрограммы',
					list:[
						{
							question: 'Что такое программа государственной утилизации?',
							answer: ''
						},
						{
							question: 'Какие условия предполагает программа «Семейный автомобиль»?',
							answer: ''
						},
						{
							question: 'Какие выгоды предполагает программа «Первый автомобиль»?',
							answer: ''
						}
					]
				},
				{
					slug: 'exchange',
					title: 'Обмен авто',
					list:[
						{
							question: 'В чем разница между обменом авто и системой «Трейд-Ин»?',
							answer: ''
						},
						{
							question: 'Как будет происходить оценка моего автомобиля?',
							answer: ''
						},
						{
							question: 'Какие автомобили могут участвовать в программе «Трейд-Ин»?',
							answer: ''
						},
						{
							question: 'Какой автомобиль я могу приобрести по системе «Трейд-Ин»?',
							answer: ''
						},
						{
							question: 'Сколько времени занимает процедура сделки по системе «Трейд-Ин»?',
							answer: ''
						},
					]
				},
				{
					slug: 'promo',
					title: 'Акции',
					list:[
						{
							question: 'Могу ли я расчитывать на скидку при покупке автомобиля через CARRO?',
							answer: ''
						},
						{
							question: 'Могу ли я расчитывать на подарок от автосалона-партнера CARRO?',
							answer: ''
						},
						{
							question: 'Есть ли скидка при обмене (Trade-In) автомобиля',
							answer: ''
						},
					]
				},
				{
					slug: 'buyout',
					title: 'Выкуп авто',
					list:[
						{
							question: '',
							answer: ''
						},
					]
				}
			]
		}
	},
	props: {
		pageTitle: String
	}
}
</script>

<!---->
<!---->
<!---->
<!---->
<!--Какой автомобиль я могу продать через CARRO?-->
<!--Как будет осуществляться оценка моего автомобиля?-->
<!--Где будет проходить осмотр моего автомобиля?-->
<!--Сколько времени занимает оформление сделки при выкупе авто?-->
<!--Как быстро я получу деньги за проданное авто?-->
<!--Тест-драйв-->
<!--Что такое тест-драйв?-->
<!--Могу ли я записаться на тест-драйв в автосалон-партнёр CARRO?-->
<!--Как я могу записаться на тест-драйв?-->
<!--Могу ли я провести тест-драйв нескольких автомобилей сразу?-->
<!--Тест-драйв доступен для всех автомобилей?-->
<!--Должен ли я платить за тест-драйв?-->
<!--Нужно ли проходить тест?-->
<!--Покажут ли мне салон, основные моменты управления?-->