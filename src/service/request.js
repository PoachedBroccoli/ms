import axios from 'axios'

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    token && (config.headers.Authorzation = token)
    return config
  },
  (error) => Promise.reject(error)
)

axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export default function(
  url,
  {
    method = 'get',
    // baseURL = '',
    timeout = 10000,
    data = {},
    params = {},
    headers = { 'Content-Type': 'application/json;charset=UTF-8' },
    responseType = 'json'
  }
) {
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
