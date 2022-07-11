export const state = () => ({
    storiesModal: false,
    stories: {}
})
export const getters = {
    storiesModal: (state) => {
        return state.storiesModal
    },
    stories: (state) => {
        return state.stories
    }
}
export const actions = {
    async openStories({commit}, payload) {
        await commit('SET_STORIES', payload)
        await commit('SET_STORIES_MODAL', true)
    },
    async closeStories({commit}) {
        await commit('SET_STORIES', {})
        await commit('SET_STORIES_MODAL', false)
    }
}
export const mutations = {
    SET_STORIES(state, data) {
        state.stories = data
    },
    SET_STORIES_MODAL(state, data) {
        state.storiesModal = data
    },
}
