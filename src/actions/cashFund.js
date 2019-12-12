const PREFIX = 'CASHFUND_';

export const list = (data) => {
    return dispatch => {
        dispatch({
            type: PREFIX + 'LIST',
            payload: data
        })
    }
}

export const obj = (data) => {
    return dispatch => {
        dispatch({
            type: PREFIX + 'OBJECT',
            payload: data
        })
    }

}

export const update = (id, data) => {
    return dispatch => {
        dispatch({
            type: PREFIX + 'UPDATE',
            payload: {
                data,
                id
            }
        })
    }
}

export const create = (data) => {
    return dispatch => {
        dispatch({
            type: PREFIX + 'CREATE',
            payload: data
        })
    }
}

export const remove = (id) => {
    return dispatch => {
        dispatch({
            type: PREFIX + 'REMOVE',
            payload: id
        })
    }
}

