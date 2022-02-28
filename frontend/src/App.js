import Form from './components/Form'
import Messages from './components/Messages/Messages'
import { MessagesProvider } from './contexts/MessagesContext'

export default function App() {
    return (
        <MessagesProvider>
            <Form />
            <Messages />
        </MessagesProvider>
    )
}
