export const state = () => ({
    storiesModal: false
})
export const getters = {
    storiesModal: (state) => {
        return state.storiesModal
    }
}

export const mutations = {
    SET_STORIES_MODAL(state, data) {
        state.storiesModal = data
    },
}
