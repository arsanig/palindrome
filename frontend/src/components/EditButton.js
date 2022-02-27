import { updateMessage } from '../api'

export default function EditButton(messageId, message) {
    return (
        <button
            id="update-button"
            onClick={() => updateMessage(messageId, message)}
        >
            Edit
        </button>
    )
}
