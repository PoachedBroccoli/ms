import { push, close } from '@/service/websocket.js'

const chat = {
    namespaced: true,
    state: () => ({
        room: 'enjoy',
        userList: [],
        chatData: [],
        flag: false,
        ee: '',
        doing: ''
    }),
    mutations: {
        m_room (state, room) {
            state.room = room
        },
        m_user_list (state, userList) {
            state.userList = userList
        },
        m_user_flag (state, user_flag) {
            state.flag = user_flag
        },
        m_user_ee (state, { userList, flag, ee, doing }) {
            state.userList = userList
            state.flag = flag
            state.ee = ee
            state.doing = doing
        },
        m_chat_data (state, chatData) {
            state.chatData = [...state.chatData, chatData]
        }
    },
    actions: {
        async a_data ({ commit, state, rootState, dispatch }, data) {
            const receive = JSON.parse(data.detail.data)
            switch (receive.type) {
                case 'chat':
                    commit('m_chat_data', receive)
                    break
                case 'handshake':
                    dispatch('a_push', { 'type': 'enter', 'content': rootState.auth.nickname, 'group': state.room })
                    return
                case 'enter':
                    commit('m_user_ee', { ee: receive.user, userList: receive.user_list, flag: true, doing: 'enter' })
                    setTimeout(() => { commit('m_user_flag', false) }, 2300)
                    break
                case 'exit':
                    commit('m_user_ee', { ee: receive.user, userList: receive.user_list, flag: true, doing: 'leave' })
                    setTimeout(() => { commit('m_user_flag', false) }, 2300)
                    break
            }
        },
        a_push (context, data) {
            push(data)
        },
        a_close () {
            close()
        }
    },
    getters: {
        count (state) {
            return state.userList.length
        }
    }
}

export default chat