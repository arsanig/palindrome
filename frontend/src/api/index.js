import axios from 'axios'

const url = 'http://localhost:5000/api/messages'

const getMessages = () => axios.get(url)
const addMessage = (messageObj) => axios.post(url, messageObj)
const updateMessage = (messageId, messageObj) =>
    axios.patch(`${url}/${messageId}`, messageObj)
const deleteMessage = (messageId) => axios.delete(`${url}/${messageId}`)

export { getMessages, addMessage, updateMessage, deleteMessage }
