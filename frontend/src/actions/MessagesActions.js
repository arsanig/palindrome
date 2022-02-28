import * as api from '../api/index'

const getMessages = async (dispatch) => {
    try {
        const { data } = await api.getMessages()
        dispatch({
            type: 'FETCH',
            payload: data,
        })
    } catch (err) {
        console.log(err)
    }
}

const addMessage = async (dispatch, messageObj) => {
    try {
        const { data } = await api.addMessage(messageObj)
        dispatch({
            type: 'ADD',
            payload: data,
        })
    } catch (err) {
        console.log(err)
    }
}

const updateMessage = async (dispatch, messageObj) => {
    try {
        const { data } = await api.updateMessage(messageObj._id, {
            message: messageObj.message,
        })
        dispatch({
            type: 'UPDATE',
            payload: {
                _id: data._id,
                message: data.message,
            },
        })
        console.log(messageObj.message)
    } catch (err) {
        console.log(err)
    }
}

const deleteMessage = async (dispatch, messageId) => {
    try {
        const { data } = await api.deleteMessage(messageId)
        dispatch({
            type: 'DELETE',
            payload: data._id,
        })
    } catch (err) {
        console.log(err)
    }
}

const clear = (dispatch) => dispatch({ type: 'CLEAR' })

const edit = (dispatch, message) =>
    dispatch({
        type: 'EDIT',
        payload: message,
    })

const inputChange = (dispatch, field, text) => {
    dispatch({
        type: 'INPUT_CHANGE',
        payload: { field, text },
    })
}

export {
    getMessages,
    addMessage,
    updateMessage,
    deleteMessage,
    edit,
    clear,
    inputChange,
}
