import DeleteButton from '../../DeleteButton'
import EditButton from '../../EditButton'

export default function Message({ message }) {
    return (
        <tr>
            <td id="table-data-first">{message.palindrome ? 'Yes' : 'Nope'}</td>
            <td id="table-data-message">{message.message}</td>
            <td id="table-data-last">
                <EditButton messageId={message._id} />
                <DeleteButton messageId={message._id} />
            </td>
        </tr>
    )
}
