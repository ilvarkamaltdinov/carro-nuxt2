import {mapGetters, mapMutations} from 'vuex'
export default {
    methods: {
        ...mapMutations({
            setIsMobile: 'SET_IS_MOBILE'
        })
    },
    mounted() {
        window.innerWidth < 737 ?
            this.setIsMobile(true) :
            this.setIsMobile(false)
    },
    computed: {
        ...mapGetters({
            isMobile: 'isMobile'
        })
    }
}