import { getCurrentTime } from "@/lib/utils/misc"
import { selectOptions } from "@/mock-data"
import { MessageType } from "@/types"
import { useMemo } from "react"

interface UseMessagePayloadArgs {
  type: "ADD_MESSAGE"
}

export function useMessagePayload({ type }: UseMessagePayloadArgs) {
  const createPayload = useMemo(
    () => ({
      createTextMessage(text: string, incoming: boolean) {
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

      createImageMessage(imageSource: string, incoming: boolean) {
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

      createOptionsMessage(incoming: boolean) {
        return {
          type,
          payload: {
            type: MessageType.options,
            createdAt: getCurrentTime(),
            incoming,
            options: selectOptions,
          },
        }
      },
    }),
    [type]
  )

  return createPayload
}
