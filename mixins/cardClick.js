import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
    computed: {
        ...mapGetters({
            componentCatalog: 'filters/filters/componentCatalog'
        }),
        currentCategory() {
            return this.offer.category_enum
        },
        currentMark() {
            return this.offer.mark.slug
        },
        currentFolder() {
            return this.offer.folder.slug
        },
        currentId() {
            return this.offer.external_id
        },
        currentUrl() {
            return `/${this.currentCategory}/${this.currentMark}/${this.currentFolder}/${this.currentId}`
        }
    },
    methods: {
        ...mapActions({
            openModal: 'modal/modal-main/openModal',
            closeModal: 'modal/modal-main/closeModal'
        }),
        ...mapMutations({
            setIsOfferClick: 'filters/filters/SET_IS_OFFER_CLICK'
        }),
        async linkClick() {
            if (this.isForm) {
                if (this.choose) {
                    this.$emit('choseClick')
                }
            } else {
                if (this.componentCatalog !== 'car') {
                    await this.closeModal()
                    await this.setIsOfferClick(true)
                    await this.$router.push(this.currentUrl)
                }
            }
        },
        async ratingClick() {
            let payload = {
                modal_data: this.offer,
                modal_component: 'modal-rating',
                modal_title: ' Состояние автомобиля',
                modal_sub_title: this.offer.name
            }
            await this.openModal(payload)
        },
    }
}