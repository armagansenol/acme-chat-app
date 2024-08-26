import { ChatRoom } from "@/components/chat-room"
import { ChatProvider } from "./store/context/chat"
import { GlobalStyle } from "./styles"

function App() {
  return (
    <>
      <GlobalStyle />
      <ChatProvider>
        <ChatRoom />
      </ChatProvider>
    </>
  )
}

export default App
