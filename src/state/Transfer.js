import axios from 'axios';
import queryString from 'query-string';

const start = {
    base_Url: 'https://api.themoviedb.org/3/',
    api_Key: 'e32f13651196ec17089277883e4ebede',
}

const Transfer = axios.create({
    baseURL: start.base_Url,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({ ...params, api_key: start.api_Key })
});

Transfer.interceptors.request.use(async (config) => config);

Transfer.interceptors.response.use((request) => {
    if (request && request.data) {
        return request.data;
    }

    return request;
}, (error) => {
    throw error;
});

export default Transfer;