import EasyEdit from 'react-easy-edit'
import DeleteButton from '../../DeleteButton'
import { updateMessage } from '../../../api'

export default function Message({ message, setFetchedData }) {
    const handleSave = (updatedMessage) => {
        if (!(updatedMessage === message.message)) {
            updateMessage(message._id, { message: updatedMessage })
            setFetchedData(false)
        }
    }
    const handleCancel = () => {}
    return (
        <tr>
            <td id="table-data-first">{message.palindrome ? 'Yes' : 'Nope'}</td>
            <td>
                <EasyEdit
                    type="text"
                    value={''||message.message}
                    onSave={handleSave}
                    onCancel={handleCancel}
                    saveButtonLabel="Save"
                    cancelButtonLabel="Cancel"
                />
            </td>
            <td id="table-data-last">
                <DeleteButton
                    messageId={message._id}
                    setFetchedData={setFetchedData}
                />
            </td>
        </tr>
    )
}
