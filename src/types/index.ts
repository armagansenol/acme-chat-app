export enum MessageType {
  image = "image",
  text = "text",
}

export interface MessageProps {
  type: MessageType
  text?: string
  imageSource?: string
  createdAt: string
  incoming: boolean
}
