import { useMessages } from '../contexts/MessagesContext'
import { deleteMessage } from '../actions/MessagesActions'

export default function DeleteButton({ messageId }) {
    const [messagesState, messagesDispatch] = useMessages()
    return (
        <button
            id="delete-button"
            onClick={() => deleteMessage(messagesDispatch, messageId)}
        >
            Delete
        </button>
    )
}
