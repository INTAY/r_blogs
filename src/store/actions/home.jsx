import { message } from 'ant'
message.config({
    top: 100,
    duration: 2,
    maxCount: 3,
});

import {
    postData,
    getData
} from '@api/api.jsx';

export const getPostData = async () => {
    const res = await postData();
    if (res && res.message) {
        message.warning(res.message)
    } else {
        return res
    }
}

export const getGetData = async () => {
    const res = await getData();
    if (res && res.message) {
        message.warning(res.message)
    } else {
        return res
    }
}