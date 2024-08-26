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
import useMessagePayload from "@/hooks/useMessagePayload"
import { useChatReducer } from "@/store/reducers/chat-reducer"
import { useEffect, useRef } from "react"

export default function ChatRoom() {
  const [state, dispatch] = useChatReducer()

  const initialized = useRef(false)
  const { createTextMessage } = useMessagePayload({
    type: "ADD_MESSAGE",
    incoming: true,
  })

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true

      const messagePayload = createTextMessage("Welcome to Acme Chat!")
      dispatch(messagePayload)
    }
  }, [createTextMessage, dispatch])

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
