import { useMessages } from '../contexts/MessagesContext'
import { deleteMessage } from '../actions/MessagesActions'

export default function DeleteButton({ messageId }) {
    const [messagesState, messagesDispatch] = useMessages()
    return (
        <button
            id="delete-button"
            onClick={(e) => deleteMessage(messagesDispatch, messageId)}
        >
            Delete
        </button>
    )
}
