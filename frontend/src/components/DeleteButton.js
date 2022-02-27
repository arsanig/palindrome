import { deleteMessage } from '../api'

export default function DeleteButton({ messageId }) {
    return (
        <button id="delete-button" onClick={() => deleteMessage(messageId)}>
            Delete
        </button>
    )
}
