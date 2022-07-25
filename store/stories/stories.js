import story from "@/apollo/queries/stories/story";

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
    async openStories({commit, dispatch, rootState}, payload) {
        let variables = {
            site_id: rootState.site_id,
            story_id: payload.id
        }
        let client = this.app.apolloProvider.defaultClient
        let response = await client.query(
            {
                query: story,
                variables: Object.assign(variables)
            })
        await commit('SET_STORIES', response.data.storyContents)
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
