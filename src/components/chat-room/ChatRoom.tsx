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
import { isImageCommand } from "@/lib/utils/misc"
import { useChat } from "@/store/chat/hooks/use-chat"
import { useMessagePayload } from "@/store/chat/hooks/use-message-payload"

import { useEffect, useRef } from "react"

export default function ChatRoom() {
  const { state, dispatch } = useChat()
  const { createTextMessage, createImageMessage } = useMessagePayload({
    type: "ADD_MESSAGE",
  })

  // initial message
  const initialized = useRef(false)
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true

      dispatch(createTextMessage("Welcome to Acme Chat!", true))
    }
  }, [createTextMessage, dispatch])

  useEffect(() => {
    const lastMessage = state.messages.at(-1)

    if (typeof lastMessage?.text !== "string") return

    if (isImageCommand(lastMessage.text) && !lastMessage.incoming) {
      dispatch(createImageMessage("https://picsum.photos/200", true))
    }
  }, [state.messages, createImageMessage, dispatch])

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
