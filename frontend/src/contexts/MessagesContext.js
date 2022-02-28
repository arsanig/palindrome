import { createContext, useContext, useReducer } from 'react'
import MessagesReducer from '../reducers/MessagesReducer'

const MessagesContext = createContext()

const useMessages = () => {
    const { state, dispatch } = useContext(MessagesContext)
    return [state, dispatch]
}

const MessagesProvider = ({ children }) => {
    const initialState = {
        messages: [],
        error: null,
        edit: false,
        loading: false,
    }
    const [state, dispatch] = useReducer(MessagesReducer, initialState)

    return (
        <MessagesContext.Provider value={{ state, dispatch }}>
            {children}
        </MessagesContext.Provider>
    )
}

export { MessagesProvider, useMessages }
