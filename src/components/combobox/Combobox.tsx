import { StyledCombobox, StyledOption, StyledOptionsContainer } from "./styles"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Option } from "@/types"

export interface ComboboxProps {
  inputEl?: HTMLInputElement | null
  options: Option[]
  setSelect: (val: string) => void
  setIsSelectScreenActive: (val: boolean) => void
}

export default function Combobox(props: ComboboxProps) {
  const { inputEl, setIsSelectScreenActive, setSelect, options } = props

  function handleSelect(value: Option["value"]) {
    setSelect(value)
    setIsSelectScreenActive(false)
    inputEl?.focus()
  }

  return (
    <StyledCombobox>
      <ScrollArea type="always">
        <StyledOptionsContainer>
          {options.map((item, i) => (
            <StyledOption key={i} onClick={() => handleSelect(item.value)}>
              {item.label}
            </StyledOption>
          ))}
        </StyledOptionsContainer>
      </ScrollArea>
    </StyledCombobox>
  )
}
