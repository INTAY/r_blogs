import axios from 'axios'

const { VITE_APP_API } = import.meta.env;

const service = axios.create({
    baseURL: VITE_APP_API,
    timeout: 50000,
});

// 请求拦截
service.interceptors.request.use((config) => {
    config.headers['token'] = localStorage.getItem('token')
    return config;
}, error => {
    return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(res => {
    if (res.data.code === '000000') {
        return res.data.data
    } else {
        return res.data
    }
}, error => {
    return Promise.reject(error)
})

return service