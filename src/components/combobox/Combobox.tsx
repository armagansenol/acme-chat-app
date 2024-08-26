import { useChat } from "@/store/context/chat/hooks/use-chat"
import { StyledCombobox, StyledOption, StyledOptionsContainer } from "./styles"

import { Option } from "@/types"
import { useMessagePayload } from "@/store/context/chat/hooks/use-message-payload"

export interface ComboboxProps {
  options: Option[]
}

export default function Combobox(props: ComboboxProps) {
  const { options } = props
  const { dispatch } = useChat()

  const { createTextMessage } = useMessagePayload({
    type: "ADD_MESSAGE",
  })

  function handleSelect(value: Option["value"]) {
    dispatch(createTextMessage(value, false))
  }

  return (
    <StyledCombobox>
      <StyledOptionsContainer>
        {options.map((item, i) => (
          <StyledOption key={i} onClick={() => handleSelect(item.value)}>
            {item.label}
          </StyledOption>
        ))}
      </StyledOptionsContainer>
    </StyledCombobox>
  )
}
