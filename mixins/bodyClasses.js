import {mapGetters} from "vuex";

export default {
    head() {
        return {
            bodyAttrs: {
                class: this.isModal ? 'body--modal' : ''
            }
        }
    },
    computed: {
        ...mapGetters({
            storiesModal: 'stories/stories/storiesModal',
            benefitModal: 'benefits/benefitModal',
            modalMenu: 'modal/modal-menu/modalMenu',
            modalMarks: 'modal/modal-marks/modalMarks',
            modal: 'modal/modal-main/modal'
        }),
        isModal() {
            return this.storiesModal ||
                this.benefitModal ||
                this.modalMenu ||
                this.modalMarks ||
                this.modal
        }
    }
}