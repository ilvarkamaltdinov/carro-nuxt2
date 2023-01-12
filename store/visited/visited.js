export const state = () => ({
    visited: '',
})
export const getters = {
    visited: (state) => {
        return state.visited
    }
}
export const mutations = {
    SET_VISITED(state, data) {
        if (localStorage.getItem('visited')) {
            let visitedArray = localStorage.getItem('visited')
            visitedArray += `,${data}`
            localStorage.setItem('visited', visitedArray)
            state.visited = visitedArray
        } else {
            localStorage.setItem('visited', data)
        }
    }
}
