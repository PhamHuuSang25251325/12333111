import AsyncStorage from '@react-native-community/async-storage';


export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const authenticate = (data) => {
   
    const { user, token } = data;
    saveDataToStorage(user.id, token)
    return dispatch => {
        dispatch({
            type: AUTHENTICATE,
            payload: {
                userId: user.id,
                token
            }
        })
    }
}

export const logout = () => {
    return dispatch => {
        AsyncStorage.removeItem('user');
        dispatch({
            type: LOGOUT
        })
    }
}

const saveDataToStorage = (userId, token) => {
    AsyncStorage.setItem(
        'user',
        JSON.stringify({
            token,
            userId
        })
    )
}
