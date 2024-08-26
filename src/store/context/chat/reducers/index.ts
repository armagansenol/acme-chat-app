import { MessageProps } from "@/types"

export interface ChatState {
  messages: MessageProps[]
}

export type ChatAction = {
  type: "ADD_MESSAGE"
  payload: MessageProps
}

export const initialState: ChatState = {
  messages: [],
}

export const reducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }
    default:
      return state
  }
}
