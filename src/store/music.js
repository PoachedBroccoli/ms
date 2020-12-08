import serve from '../service/api'
import { htmlDecodeByRegExp } from '../utils/decode'

const music = {
    namespaced: true,
    state: () => ({
        carousel: [],
        music: [],
        musicImg: [],
        standBy: false
    }),
    mutations: {
        m_carousel (state, carousel) {
            state.carousel = carousel
        },
        m_music (state, music) {
            state.music = music
        },
        m_musicImg (state, musicImg) {
            state.musicImg = musicImg
        },
        m_standby (state, standBy) {
            state.standBy = standBy
        }
    },
    actions: {
        async a_carousel ({ commit }) {
            const temp = await serve.getCarousel()
            temp.forEach(v => {
                v.song = htmlDecodeByRegExp(v.song)
                v.artist = htmlDecodeByRegExp(v.artist)
                v.songartist = htmlDecodeByRegExp(v.songartist)
            })
            commit('m_music', temp)

            let tempCarousel = []
            const getCarousel = async () => {
                for (let i = 0; i < 12; i++) {
                    let carouselImg = await serve.getRecordInfo(temp[i].songartist)
                    tempCarousel.push(carouselImg)
                }
            }
            await getCarousel()
            commit('m_carousel', tempCarousel)
            commit('m_musicImg', tempCarousel)
            commit('m_standby', true)
        }
    }
}

export default music