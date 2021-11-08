import axios from 'axios'
const API = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=d1bbcca95aed0d94460fae514cdf6bc3';


export const authAxios = axios.create({
    baseURL: API,
    params: {
        api_key: 'd1bbcca95aed0d94460fae514cdf6bc3',
    }
})

export const getToken = async () => {
    const { data } = await authAxios.get('/authentication/token/new')
    return data
}

export const getSessionId = async (request_token) => {
    const data = await authAxios.post('/authentication/session/new', {
        request_token
    })

    return data
}