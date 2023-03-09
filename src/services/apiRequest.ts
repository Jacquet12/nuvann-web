import axios from 'axios'
import Urls from '../utils/getUrls'

const handleError = (error: any ) => {

    const errorMessage = {message: '', fieldError:{}};

    const {response} = error;

    if(response?.status && response?.status === 401) {
        console.log("[401] Sem Permissão");
        localStorage.removeItem('@nuvann:token')
        localStorage.removeItem('@nuvann:user')

        const {protocol, host } = window.location;
        window.location.replace(`${protocol}//${host}`);
    }

    return Promise.reject({ ...error, errorMessage});
};

const handleResponse = (response: any) => {
    return response
}

const apiUrl = {
    nuvannApi: Urls.NUVANN_API
};

export const nuvannApi = axios.create({
    baseURL: apiUrl.nuvannApi
});

nuvannApi.interceptors.response.use(handleResponse, handleError);

nuvannApi.interceptors.request.use(
    async (config: any) => {
        const TOKEN = localStorage.getItem('@nuvann:token');
        config.headers = {
            ...config.headers,
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        };

        return config;
    },
    (error) => {
        Promise.reject(error);
    },
)
