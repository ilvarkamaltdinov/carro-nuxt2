import {mapMutations, mapGetters, mapActions} from "vuex";

export default {
    data() {
        return {
            requestParams: {
                limit: 8,
                page: 1
            }
        }
    },
    computed: {
        ...mapGetters({
            catalogCars: 'catalog/catalog-cars/catalogCars',
        }),
        carsList() {
            return this.offers ? this.offers.data : []
        }
    },
    async mounted() {
        await this.getCatalogCars(this.requestParams)
        if (this.catalogCars) {
            const sliderCatalog = new swiper.default('.catalog--slider .swiper', {
                modules: [swiper.Navigation, swiper.Autoplay],
                loop: false,
                autoplayDisableOnInteraction: true,
                autoplay: false,
                slidesPerView: 3,
                initialSlide: 1,
                centeredSlides: true,
                watchSlidesProgress: true,
                spaceBetween: 24,
                navigation: {
                    nextEl: '.catalog--slider .swiper-button-next',
                    prevEl: '.catalog--slider .swiper-button-prev',
                },
            });
        }
    },
    methods: {
        ...mapMutations({
            setCallbackCar: 'modal/modal-callback/SET_CALLBACK_CAR',
            setCreditCar: 'modal/modal-credit/SET_CREDIT_CAR'
        }),
        ...mapActions({
            getCatalogCars: 'catalog/catalog-cars/getCatalogCars'
        })
    }
}