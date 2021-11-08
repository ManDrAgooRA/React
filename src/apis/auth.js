import axios from 'axios'
const API = 'https://api.themoviedb.org/3/';
// const API_KEY = '?api_key=d1bbcca95aed0d94460fae514cdf6bc3';


export const authAxios = axios.create({
    baseURL: API,
    params: {
        api_key: 'd1bbcca95aed0d94460fae514cdf6bc3',
        // api_key: process.env.REACT_APP_API_KEY,
    }
})

export const getToken = async () => {
    const { data: { request_token }, } = await authAxios.get('/authentication/token/new')
    localStorage.setItem('request_token', request_token)
    return request_token
}

export const getSessionId = async (requestToken) => {
    const { data: session_id } = await authAxios.post('/authentication/session/new', {
        request_token: requestToken
    })
    console.log(session_id)
    localStorage.setItem('session_id', session_id.session_id)
    return session_id
}

export const getAccount = async (sessionId) => {
    const { data } = await authAxios.get('/account', {
        params: {
            session_id: sessionId,
        },
    });

    localStorage.setItem('user', JSON.stringify(data));

    return data;
};