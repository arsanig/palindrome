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
        const { data } = await api.updateMessage(
            messageObj._id,
            messageObj.message
        )
        dispatch({
            type: 'UPDATE',
            payload: {
                _id: data._id,
                message: data.message,
            },
        })
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
    } catch (err) {}
}

const clear = (dispatch) => dispatch({ type: 'CLEAR' })

const editing = (dispatch, message) =>
    dispatch({
        type: 'EDIT',
        payload: message,
    })

export { getMessages, addMessage, updateMessage, deleteMessage, editing, clear }
