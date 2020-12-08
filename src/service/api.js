import axios from './request'
import jsonp from 'jsonp'
import { db } from '../firebase'


const serve = {
    // getCarousel: () => axios('http://localhost:3001/api/spider', {}),
    getCarousel: () => axios('http://www.pipiic.com:3001/api/spider', {}),
    getRecordInfo: (key) => {
        return new Promise((resolve) => {
            jsonp(`https://itunes.apple.com/search?entry=music&media=music&term=${key}&limit=1`, null, (err, data) => {
                resolve(data.results[0])
            })
        })
    },
    getIV: (url) => {
        return axios(url, {})
    },
    getUser: ({ status, nickname, number }) => {
        let query = db.collection('chat')
        query = query.where('nickname', '==', nickname)
        if (!status) {
            query = query.where('number', '==', number)
        }
        return query.get()
    },
    regUser: ({ nickname, number }) => {
        return db.collection('chat').add({ nickname, number })
    }
}

export default serve