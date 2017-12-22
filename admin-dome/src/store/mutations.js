import {
  LOADING_SHOW,
  LOADING_HIDE
} from "./type"

const state = {
  loading: true
}

const mutations = {
  [LOADING_SHOW](state) {
    state.loading = true
  },
  [LOADING_HIDE](state) {
    state.loading = false
  }
}

const getters = {
  loadingshow: state => {
    return state.loading
  }
}

export default {
  state,
  mutations,
  getters
}
