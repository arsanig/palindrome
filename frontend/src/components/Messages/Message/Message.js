import DeleteButton from '../../DeleteButton'
import EditButton from '../../EditButton'

export default function Message({ message }) {
    return (
        <tr>
            <td id="table-data-first">{message.palindrome ? 'Yes' : 'Nope'}</td>
            <td>{message.message}</td>
            <td id="table-data-last">
                <EditButton messageId={message._id} message={message.message} />
                <DeleteButton messageId={message._id} />
            </td>
        </tr>
    )
}
