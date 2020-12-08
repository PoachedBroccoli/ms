import axios from 'axios'

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    token && (config.headers.Authorzation = token)
    return config
}, function (error) {
    return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    const { response } = error
    if (response) {
        // switch (respnse.status) {
        //     case 401:
        //         break
        //     case 403:
        //         break
        // }
    } else {
        if (!window.navigator.online) {
            return
        }
    }
    return Promise.reject(error)
})

export default function (url, {
    method = 'get',
    // baseURL = '',
    timeout = 10000,
    data = {},
    params = {},
    headers = { 'Content-Type': 'application/json;charset=UTF-8' },
    responseType = 'json'
}) {
    const config = {
        method: method,
        url: url,
        timeout: timeout,
        data: data,
        params: params,
        headers: headers,
        // withCredentials: true,
        responseType: responseType
    }
    return axios(config)
}
