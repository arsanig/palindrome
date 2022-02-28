import Message from './Message/Message'
import {
    useMessages
} from '../../contexts/MessagesContext'
import { getMessages } from '../../actions/MessagesActions'
import { useEffect } from 'react'

export default function Messages() {
    const [messagesState, messagesDispatch] = useMessages()
    const {
        messages,
    } = messagesState

    useEffect(() => {
        getMessages(messagesDispatch)
    }, [messagesDispatch])
    return (
        <>
            <table id="table">
                <thead>
                    <tr>
                        <th id="table-heading-first">Is palindrome?</th>
                        <th>Message</th>
                        <th id="table-heading-last">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((message, index) => (
                        <Message key={index} message={message} />
                    ))}
                </tbody>
            </table>
        </>
    )
}
