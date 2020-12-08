import serve from '../service/api'

const auth = {
    namespaced: true,
    state: () => ({
        nickname: ''
    }),
    mutations: {
        m_auth (state, nickname) {
            state.nickname = nickname
        }
    },
    actions: {
        async a_enter ({ commit }, { status, nickname, number, room = 'Unknown' }) {
            console.log(status)
            console.log(nickname)
            console.log(number)
            let data = await serve.getUser({ status, nickname, number })
            if (status) {
                if (data.empty) {
                    await serve.regUser({ nickname, number })
                    commit('m_auth', nickname)
                    // localStorage.setItem('nn', nickname)
                    return Promise.resolve(200)
                } else {
                    return Promise.resolve(402)
                }
            } else {
                if (data.empty) {
                    return Promise.resolve(401)
                } else {
                    commit('m_auth', nickname)
                    // localStorage.setItem('nn', nickname)
                    commit('chat/m_room', room, { root: true })
                    return Promise.resolve(200)
                }
            }
        },
    },
    getters: {
        isSignin (state) {
            return !!state.nickname
        }
    }
}

export default auth