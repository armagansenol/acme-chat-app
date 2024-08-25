import {
  StyledChatInputContainer,
  StyledChatRoom,
  StyledChatWindowContainer,
  StyledMessagesContainer,
  StyledOverflowMask,
} from "./styles"

import { ChatInput } from "@/components/chat-input"
import { ChatWindow } from "@/components/chat-window"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useChatReducer } from "@/store/reducers/chat-reducer"

export default function ChatRoom() {
  const [state, dispatch] = useChatReducer()

  return (
    <StyledChatRoom>
      <StyledChatWindowContainer>
        <StyledOverflowMask>
          <ScrollArea type="always">
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
