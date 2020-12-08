import serve from '../service/api'

const yt = {
    namespaced: true,
    state: () => ({
        I: {
            baseUrl: 'https://www.googleapis.com/youtube/v3/search?',
            part: 'snippet',
            type: 'video',
            order: 'relevance',
            maxResults: 5,
            q: '',
            key: 'AIzaSyC0AqCboW7YUppdS7Kgw107YKv-cQaugg4',
        },
        apiUrlI: '',
        V: {
            baseUrl: 'https://www.googleapis.com/youtube/v3/videos?',
            part: 'player',
            id: '',
            key: 'AIzaSyC0AqCboW7YUppdS7Kgw107YKv-cQaugg4',
        },
        apiUrlV: '',
        videoBg: '',
        player: ''
    }),
    mutations: {
        m_q (state, songartist) {
            state.I.q = songartist
        },
        m_urli (state) {
            let { baseUrl, part, type, order, maxResults, q, key } = state.I
            state.apiUrlI = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}`
        },
        m_i (state, id) {
            state.V.id = id
        },
        m_bg (state, videoBg) {
            state.videoBg = videoBg
        },
        m_urlv (state) {
            let { baseUrl, part, id, key } = state.V
            state.apiUrlV = `${baseUrl}part=${part}&id=${id}&key=${key}`
        },
        m_player (state, player) {
            state.player = player
        },
    },
    actions: {
        async a_yt ({ state, commit }, { songartist }) {
            console.log(songartist)
            await commit('m_q', songartist)
            await commit('m_urli')
            let dataI = await serve.getIV(state.apiUrlI)
            await commit('m_i', dataI.items[0].id.videoId)
            await commit('m_bg', dataI.items[0].snippet.thumbnails.high.url)
            await commit('m_urlv')

            let dataV = await serve.getIV(state.apiUrlV)
            commit('m_player', dataV.items[0].player.embedHtml.replace('height="360"', 'height="270"'))

            return Promise.resolve()
        }
    }
}

export default yt