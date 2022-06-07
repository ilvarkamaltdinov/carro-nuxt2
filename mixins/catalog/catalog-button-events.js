import {mapActions, mapGetters} from "vuex";

export default {
    computed:{
      ...mapGetters({
          likesArray: 'favorite/favorite/likesArray'
      })
    },
    methods: {
        ...mapActions({
            liked: 'favorite/favorite/liked',
            openModal: 'modal/modal-main/openModal'
        }),
        favoriteClick(item) {
            this.liked(item)
        },
        callClick(carInfo) {
            let payload = {
                modal_data: carInfo,
                modal_component: 'modal-callback',
                modal_title: 'Закажите звонок по автомобилю',
                modal_sub_title: carInfo.name
            }
            this.openModal(payload)
        },
        creditClick(carInfo) {
            let payload = {
                modal_data: carInfo,
                modal_component: 'modal-credit',
                modal_title: 'Заявка на автокредит',
                modal_sub_title: carInfo.name
            }
            this.openModal(payload)
        },
        toCatalog() {
            this.$router.push('/used')
        }
    }
}