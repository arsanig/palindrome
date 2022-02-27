import EditButton from '../../EditButton'
import DeleteButton from '../../DeleteButton'

export default function Message({ message }) {
    return (
        <tr>
            <td>{message.palindrome ? 'Yes' : 'Nope'}</td>
            <td>{message.message}</td>
            <td>
                <EditButton messageId={message._id} />
                <DeleteButton messageId={message._id} />
            </td>
        </tr>
    )
}
