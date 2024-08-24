import { StyledChatWindow, StyledMessageContainer } from "./styles"

import { AnimatePresence } from "framer-motion"

import { ChatMessage } from "@/components/chat-message"
import { MessageProps } from "@/types"

export interface ChatWindowProps {
  messages: MessageProps[]
}

export default function ChatWindow(props: ChatWindowProps) {
  const { messages } = props

  return (
    <>
      {
        <StyledChatWindow>
          <AnimatePresence>
            {messages.map((message, i) => {
              return (
                <StyledMessageContainer key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <ChatMessage {...message} />
                </StyledMessageContainer>
              )
            })}
          </AnimatePresence>
        </StyledChatWindow>
      }
    </>
  )
}
