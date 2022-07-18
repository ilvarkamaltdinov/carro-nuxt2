import {mapActions} from "vuex";

export default {
    method: {
        ...mapActions({
            getSetting: 'settings/settings/getSetting'
        })
    }
}