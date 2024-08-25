import { useMemo } from "react"
import { MessageType } from "@/types"
import { getCurrentTime } from "@/lib/utils/misc"

interface UseMessagePayloadArgs {
  type: "ADD_MESSAGE"
  incoming: boolean
}

const useMessagePayload = ({ type, incoming }: UseMessagePayloadArgs) => {
  const createPayload = useMemo(
    () => ({
      createTextMessage(text: string) {
        return {
          type,
          payload: {
            type: MessageType.text,
            text,
            createdAt: getCurrentTime(),
            incoming,
          },
        }
      },

      createImageMessage(imageSource: string) {
        return {
          type,
          payload: {
            type: MessageType.image,
            imageSource,
            createdAt: getCurrentTime(),
            incoming,
          },
        }
      },
    }),
    [type, incoming]
  )

  return createPayload
}

export default useMessagePayload
