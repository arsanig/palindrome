import Message from './Message/Message'
import { useState, useEffect } from 'react'
import { getMessages } from '../../api'

export default function Messages() {
    const [messagesData, setMessagesData] = useState([])

    useEffect(() => {
        getMessages().then((data) => setMessagesData(data))
    }, [messagesData])

    return (
        <>
            <table id="table">
                <thead>
                    <tr>
                        <th id="table-first-column">Is palindrome?</th>
                        <th>Message</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {messagesData.map((message, index) => (
                        <Message key={index} message={message} />
                    ))}
                </tbody>
            </table>
        </>
    )
}
