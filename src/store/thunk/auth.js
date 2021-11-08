import * as api from '../../apis'
import { fetchUserSuccess } from '../actions'


export const getCurrentUser = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('request_token')

        const { session_id } = await api.getSessionId(token)
        console.log('thunk' + session_id)
        localStorage.setItem('session_id', session_id)

        const user = await api.getAccount(session_id)
        dispatch(fetchUserSuccess(user))
    }
}