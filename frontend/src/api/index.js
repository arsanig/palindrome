import axios from 'axios'

const url = 'http://localhost:5000/api/messages'

export const getMessages = async () => {
    try {
        const { data } = await axios.get(url)
        return data
    } catch (err) {
        console.log(err.message)
    }
}
export const getMessage = () => {}
export const addMessage = async (message) => {
    try {
        const { data } = await axios.post(url, { message: message })
        console.log(data)
    } catch (err) {
        console.log(err.message)
    }
}
export const updateMessage = () => {}
export const deleteMessage = () => {}
