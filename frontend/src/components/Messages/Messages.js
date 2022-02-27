import Message from './Message/Message'
import { useState, useEffect } from 'react'
import { getMessages } from '../../api'

export default function Messages({ fetchedData, setFetchedData }) {
    const [messagesData, setMessagesData] = useState([])

    useEffect(() => {
        getMessages().then((data) => setMessagesData(data))
        setFetchedData(true)
    }, [fetchedData, setFetchedData])

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
                    {messagesData.map((message, index) => (
                        <Message
                            key={index}
                            message={message}
                            setFetchedData={setFetchedData}
                        />
                    ))}
                </tbody>
            </table>
        </>
    )
}
