export default function MessagesReducer(state, action) {
    switch (action.type) {
        case 'FETCH':
            return {
                ...state,
                messages: action.payload,
            }
        case 'ADD':
            return {
                ...state,
                messages: [...state.messages, action.payload],
            }
        case 'UPDATE':
            return {
                ...state,
                messages: state.messages.map((message) =>
                    message._id === action.payload._id
                        ? action.payload.message
                        : message
                ),
            }
        case 'DELETE':
            return {
                ...state,
                messages: state.messages.filter(
                    (message) => message._id !== action.payload
                ),
            }
        case 'EDIT':
            return {
                ...state,
                textarea: action.payload.message,
                selectedForEdit: action.payload,
                edit: true,
            }
        case 'INPUT_CHANGE':
            return {
                ...state,
                [action.payload.field]: action.payload.text,
            }
        case 'CLEAR':
            return {
                ...state,
                textarea: '',
                selectedForEdit: {},
                edit: false,
            }
        default:
            return state
    }
}
