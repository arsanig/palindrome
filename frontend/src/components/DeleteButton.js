import { deleteMessage } from '../api'

export default function DeleteButton({ messageId, setFetchedData }) {
    const handleClick = () => {
        deleteMessage(messageId)
        setFetchedData(false)
    }

    return (
        <button id="delete-button" onClick={() => handleClick()}>
            Delete
        </button>
    )
}
