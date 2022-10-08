import service from '../utils/request.jsx';

export function getData(data) {
    return service.request({
        url: 'get/urls',
        method: 'get',
        data
    })
}

export function postData(data) {
    return service.request({
        url: 'post/urls',
        method: 'post',
        data
    })
}