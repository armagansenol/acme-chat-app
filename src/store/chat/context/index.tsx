import { createContext, ReactNode, useReducer } from "react"
import { ChatAction, ChatState, initialState, reducer } from "../reducers"

export interface ChatContextType {
  state: ChatState
  dispatch: React.Dispatch<ChatAction>
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined)

interface ChatProviderProps {
  children: ReactNode
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <ChatContext.Provider value={{ state, dispatch }}>{children}</ChatContext.Provider>
}
