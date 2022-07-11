export const state = () => ({
    modal: false,
    openModalCount: 0,
    oldModalData: null,
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
    },
    oldModalData: (state) => {
        return state.oldModalData
    },
}
export const actions = {
    async openModal({state, commit}, payload) {
        commit('SET_OPEN_MODAL_COUNT', state.openModalCount += 1)
        if (state.openModalCount > 1) {
            await commit('SET_OPEN_MODAL_DATA', {
                modalTitle: state.modalTitle,
                modalSubTitle: state.modalSubTitle,
                modalData: state.modalData,
                modalComponent: state.modalComponent
            })
            commit('SET_MODAL_TITLE', payload.modal_title)
            commit('SET_MODAL_SUB_TITLE', payload.modal_sub_title)
            commit('SET_MODAL_DATA', payload.modal_data)
            commit('SET_MODAL_COMPONENT', payload.modal_component)
            commit('SET_MODAL', true)
        } else {
            commit('SET_MODAL_TITLE', payload.modal_title)
            commit('SET_MODAL_SUB_TITLE', payload.modal_sub_title)
            commit('SET_MODAL_DATA', payload.modal_data)
            commit('SET_MODAL_COMPONENT', payload.modal_component)
            commit('SET_MODAL', true)

        }

    },
    async closeModal({state, commit}) {
        if(state.openModalCount > 1){
            commit('SET_MODAL_COMPONENT', state.oldModalData.modalComponent)
            commit('SET_MODAL_TITLE', state.oldModalData.modalTitle)
            commit('SET_MODAL_SUB_TITLE', state.oldModalData.modalSubTitle)
            commit('SET_MODAL_DATA', state.oldModalData.modalData)
        }
        else{
            commit('SET_MODAL', false)
        }
        commit('SET_OPEN_MODAL_COUNT', state.openModalCount -= 1)
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
    },
    SET_OPEN_MODAL_COUNT(state, data) {
        state.openModalCount = data
    },
    SET_OPEN_MODAL_DATA(state, data) {
        state.oldModalData = data
    },
}
