export default {
    data() {
        return {
            storiesItems: ['Корейская неделя', 'Выгодный Trade-In №1', 'Автокредит от 4.5%', 'Выкуп за 15 минут', 'Подбор автомобиля'],
        }
    },
    mounted() {
        const sliderStories = new swiper.default('.stories--desktop .swiper', {
            modules: [ swiper.Navigation, swiper.Autoplay ],
            loop: true,
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
    }
}