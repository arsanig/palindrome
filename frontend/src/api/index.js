import axios from 'axios'

const url = 'http://localhost:5000/api/messages'

const getMessages = async () => {
    try {
        const { data } = await axios.get(url)
        return data
    } catch (err) {
        console.log(err)
    }
}

const addMessage = async (messageData) => {
    try {
        await axios.post(url, messageData)
    } catch (err) {
        console.log(err)
    }
}
const updateMessage = async (messageId, messageData) => {
    try {
        const { data } = await axios.patch(`${url}/${messageId}`, messageData)
        return data
    } catch (err) {
        console.log(err)
    }
}

const deleteMessage = async (messageId) => {
    try {
        await axios.delete(`${url}/${messageId}`)
    } catch (err) {
        console.log(err)
    }
}

export { getMessages, addMessage, updateMessage, deleteMessage }
