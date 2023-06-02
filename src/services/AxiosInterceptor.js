import axios from 'axios';

export const axiosInterceptor = () => axios.interceptors.request.use(function (config) {
    if (process.env.NODE_ENV === 'development') {

        return config;
    }
    return config;
}, function (error) {
    if (error.response.status === 403) {
        console.log(error.response);
    }
    return Promise.reject(error);
});