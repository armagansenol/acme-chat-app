import { StyledImage, StyledImageContainer, StyledMessage, StyledText, StyledTime } from "./styles"

import { MessageProps } from "@/types"

const ChatMessage = (props: MessageProps) => {
  const { createdAt, imageSource, incoming, text, type } = props

  const messageContent = {
    image: (
      <StyledImageContainer>
        <StyledImage alt="Placeholder Image" src={imageSource} />
      </StyledImageContainer>
    ),
    text: <StyledText>{text}</StyledText>,
  }

  return (
    <StyledMessage incoming={incoming}>
      {messageContent[type]}
      <StyledTime>{createdAt}</StyledTime>
    </StyledMessage>
  )
}

export default ChatMessage
