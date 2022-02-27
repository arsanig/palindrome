import { useState } from 'react'
import Form from './components/Form'
import Messages from './components/Messages/Messages'

export default function App() {
    const [fetchedData, setFetchedData] = useState(true)

    return (
        <>
            <Form setFetchedData={setFetchedData} />
            <Messages
                fetchedData={fetchedData}
                setFetchedData={setFetchedData}
            />
        </>
    )
}
