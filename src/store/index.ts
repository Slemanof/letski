import { Commit, createStore } from 'vuex'

export default createStore({
  state: {
    authenticated: false
  },
  mutations: {
    SET_AUTH: (state: {authenticated: boolean}, auth: boolean) => state.authenticated = auth 
  },
  // To handle Typscript
  actions: {
      setAuth: ({commit}: {commit: Commit }, auth: boolean) => commit('SET_AUTH', auth) 
  },
  modules: {
  }
})
