import {mapActions} from "vuex";

export default {
    data() {
        return {
            stories: [
                {
                    id: 1,
                    title: 'Корейская неделя',
                    img: '1',
                    stories:[
                        {
                            id:1,
                            title:'Получите выгоду до 150 000 ₽ за Trade-In',
                            text:'Сядьте за руль автомобиля своей мечты уже сегодня',
                            img:'1',
                            button:{
                                color:'blue',
                                link:'credit',
                                text:'Заявка на автокредит'
                            }
                        },
                        {
                            id:2,
                            title:'Рыночная оценка и оформление за 30 мин.',
                            text:'Быстро оценим ваш автомобиль и предоставим скидку на новый',
                            img:'1',
                            button:{
                                color:'blue',
                                link:'credit',
                                text:'Заявка на автокредит'
                            }
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Корейская неделя',
                    img: '1',
                    stories:[
                        {
                            id:1,
                            title:'Получите выгоду до 150 000 ₽ за Trade-In',
                            text:'Сядьте за руль автомобиля своей мечты уже сегодня',
                            img:'1',
                            button:{
                                color:'blue',
                                link:'credit',
                                text:'Заявка на автокредит'
                            }
                        },
                        {
                            id:2,
                            title:'Рыночная оценка и оформление за 30 мин.',
                            text:'Быстро оценим ваш автомобиль и предоставим скидку на новый',
                            img:'1',
                            button:{
                                color:'blue',
                                link:'credit',
                                text:'Заявка на автокредит'
                            }
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Корейская неделя',
                    img: '1',
                    stories:[
                        {
                            id:1,
                            title:'Получите выгоду до 150 000 ₽ за Trade-In',
                            text:'Сядьте за руль автомобиля своей мечты уже сегодня',
                            img:'1',
                            button:{
                                color:'blue',
                                link:'credit',
                                text:'Заявка на автокредит'
                            }
                        },
                        {
                            id:2,
                            title:'Рыночная оценка и оформление за 30 мин.',
                            text:'Быстро оценим ваш автомобиль и предоставим скидку на новый',
                            img:'1',
                            button:{
                                color:'blue',
                                link:'credit',
                                text:'Заявка на автокредит'
                            }
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'Корейская неделя',
                    img: '1',
                    stories:[
                        {
                            id:1,
                            title:'Получите выгоду до 150 000 ₽ за Trade-In',
                            text:'Сядьте за руль автомобиля своей мечты уже сегодня',
                            img:'1',
                            button:{
                                color:'blue',
                                link:'credit',
                                text:'Заявка на автокредит'
                            }
                        },
                        {
                            id:2,
                            title:'Рыночная оценка и оформление за 30 мин.',
                            text:'Быстро оценим ваш автомобиль и предоставим скидку на новый',
                            img:'1',
                            button:{
                                color:'blue',
                                link:'credit',
                                text:'Заявка на автокредит'
                            }
                        }
                    ]
                },
                {
                    id: 5,
                    title: 'Корейская неделя',
                    img: '1',
                    stories:[
                        {
                            id:1,
                            title:'Получите выгоду до 150 000 ₽ за Trade-In',
                            text:'Сядьте за руль автомобиля своей мечты уже сегодня',
                            img:'1',
                            button:{
                                color:'blue',
                                link:'credit',
                                text:'Заявка на автокредит'
                            }
                        },
                        {
                            id:2,
                            title:'Рыночная оценка и оформление за 30 мин.',
                            text:'Быстро оценим ваш автомобиль и предоставим скидку на новый',
                            img:'1',
                            button:{
                                color:'blue',
                                link:'credit',
                                text:'Заявка на автокредит'
                            }
                        }
                    ]
                },
                {
                    id: 6,
                    title: 'Корейская неделя',
                    img: '1',
                    stories:[
                        {
                            id:1,
                            title:'Получите выгоду до 150 000 ₽ за Trade-In',
                            text:'Сядьте за руль автомобиля своей мечты уже сегодня',
                            img:'1',
                            button:{
                                color:'blue',
                                link:'credit',
                                text:'Заявка на автокредит'
                            }
                        },
                        {
                            id:2,
                            title:'Рыночная оценка и оформление за 30 мин.',
                            text:'Быстро оценим ваш автомобиль и предоставим скидку на новый',
                            img:'1',
                            button:{
                                color:'blue',
                                link:'credit',
                                text:'Заявка на автокредит'
                            }
                        }
                    ]
                },
            ]
        }
    },
    mounted() {
        const sliderStories = new swiper.default('.stories--desktop .swiper', {
            modules: [swiper.Navigation, swiper.Autoplay],
            autoplayDisableOnInteraction: false,
            spaceBetween: 16,
            autoplay: false,
            watchSlidesProgress: true,
            slidesPerView: 5,
            navigation: {
                nextEl: '.stories--desktop .swiper-button-next',
                prevEl: '.stories--desktop .swiper-button-prev',
            },
        });
    },
    methods: {
        ...mapActions({
            openStories: 'stories/stories/openStories'
        })
    }
}