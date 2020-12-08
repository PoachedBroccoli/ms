import serve from '../service/api'

const music = {
    namespaced: true,
    state: () => ({
        src: '',
        currentPlay: -1,
        // onPlay: false,
        collectionViewUrl: '',
        artistViewUrl: '',
        artworkUrl100: '',
    }),
    mutations: {
        m_audio (state, { previewUrl, rank }) {
            state.src = previewUrl
            state.currentPlay = rank
        },
        m_collectionViewUrl (state, collectionViewUrl) {
            state.collectionViewUrl = collectionViewUrl
        },
        m_qrcode (state, { artistViewUrl, artworkUrl100 }) {
            state.artistViewUrl = artistViewUrl
            state.artworkUrl100 = artworkUrl100
        }
    },
    actions: {
        async a_play ({ commit }, { rank, songartist }) {
            let { previewUrl } = await serve.getRecordInfo(songartist)
            commit('m_audio', { previewUrl, rank })
            return Promise.resolve()
        },
        async a_link ({ commit }, { songartist }) {
            let { collectionViewUrl } = await serve.getRecordInfo(songartist)
            commit('m_collectionViewUrl', collectionViewUrl)
            return Promise.resolve()
        },
        async a_qrcode ({ commit }, { songartist }) {
            let { artistViewUrl, artworkUrl100 } = await serve.getRecordInfo(songartist)
            commit('m_qrcode', { artistViewUrl, artworkUrl100 })
            return Promise.resolve()
        }
    }
}

export default music