import { StyledChatInputContainer, StyledChatRoom, StyledChatWindowContainer, StyledMessagesContainer } from "./styles"

import { ChatInput } from "@/components/chat-input"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ChatRoom() {
  return (
    <StyledChatRoom>
      <StyledChatWindowContainer>
        <ScrollArea>
          <StyledMessagesContainer>CHAT WINDOW</StyledMessagesContainer>
        </ScrollArea>
      </StyledChatWindowContainer>
      <StyledChatInputContainer>
        <ChatInput />
      </StyledChatInputContainer>
    </StyledChatRoom>
  )
}
