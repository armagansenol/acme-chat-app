import {
  StyledChatInputContainer,
  StyledChatRoom,
  StyledChatWindowContainer,
  StyledMessagesContainer,
  StyledOverflowMask,
} from "./styles"

import { useReducer } from "react"

import { ChatInput } from "@/components/chat-input"
import { ChatWindow } from "@/components/chat-window"
import { ScrollArea } from "@/components/ui/scroll-area"
import { chatReducer, initialState } from "@/store/reducers/chat-reducer"

export default function ChatRoom() {
  const [state, dispatch] = useReducer(chatReducer, initialState)

  return (
    <StyledChatRoom>
      <StyledChatWindowContainer>
        <StyledOverflowMask>
          <ScrollArea>
            <StyledMessagesContainer>
              <ChatWindow messages={state.messages} />
            </StyledMessagesContainer>
          </ScrollArea>
        </StyledOverflowMask>
      </StyledChatWindowContainer>
      <StyledChatInputContainer>
        <ChatInput dispatch={dispatch} />
      </StyledChatInputContainer>
    </StyledChatRoom>
  )
}
