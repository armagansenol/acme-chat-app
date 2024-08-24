import { StyledChatInputContainer, StyledChatRoom, StyledChatWindowContainer, StyledMessagesContainer } from "./styles"

import { useReducer } from "react"

import { ChatInput } from "@/components/chat-input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChatWindow } from "@/components/chat-window"
import { chatReducer, initialState } from "@/store/reducers/chat-reducer"

export default function ChatRoom() {
  const [state, dispatch] = useReducer(chatReducer, initialState)

  return (
    <StyledChatRoom>
      <StyledChatWindowContainer>
        <ScrollArea>
          <StyledMessagesContainer>
            <ChatWindow messages={state.messages} />
          </StyledMessagesContainer>
        </ScrollArea>
      </StyledChatWindowContainer>
      <StyledChatInputContainer>
        <ChatInput dispatch={dispatch} />
      </StyledChatInputContainer>
    </StyledChatRoom>
  )
}
