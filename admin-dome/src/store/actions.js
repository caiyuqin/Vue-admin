import * as types from "./type"

export default {
  LOADING_SHOW: ({commit}) => {
    commit(types.LOADING_SHOW)
  },
  LOADING_HIDE: ({
    commit
  }) => {
    commit(types.LOADING_HIDE)
  }

}



