export const state = () => ({
    modal: false,
    modalTitle: '',
    modalSubTitle: '',
    modalData: {},
    modalComponent: ''
})
export const getters = {
    modal: (state) => {
        return state.modal
    },
    modalTitle: (state) => {
        return state.modalTitle
    },
    modalSubTitle: (state) => {
        return state.modalSubTitle
    },
    modalData: (state) => {
        return state.modalData
    },
    modalComponent: (state) => {
        return state.modalComponent
    }
}
export const actions = {
    async openModal({commit}, payload) {
        commit('SET_MODAL_TITLE', payload.modal_title)
        commit('SET_MODAL_SUB_TITLE', payload.modal_sub_title)
        commit('SET_MODAL_DATA', payload.modal_data)
        commit('SET_MODAL_COMPONENT', payload.modal_component)
        commit('SET_MODAL', true)
    },
    async closeModal({commit}) {
        await commit('SET_MODAL', false)
    },
}

export const mutations = {
    SET_MODAL(state, data) {
        state.modal = data
    },
    SET_MODAL_TITLE(state, data) {
        state.modalTitle = data
    },
    SET_MODAL_SUB_TITLE(state, data) {
        state.modalSubTitle = data
    },
    SET_MODAL_DATA(state, data) {
        state.modalData = data
    },
    SET_MODAL_COMPONENT(state, data) {
        state.modalComponent = data
    }
}
