import {
  StyledButton,
  StyledChatInputContainer,
  StyledForm,
  StyledFormContainer,
  StyledFormField,
  StyledInput,
} from "./styles"

import * as FormPrimitive from "@radix-ui/react-form"
import { ArrowRight } from "lucide-react"
import { ChangeEvent, useEffect, useRef, useState } from "react"

import { AutoComplete } from "@/components/autocomplete"
import { Combobox } from "@/components/combobox"
import { Dialog } from "@/components/ui/dialog"
import { useAutocomplete } from "@/hooks/useAutoComplete"
import useMessagePayload from "@/hooks/useMessagePayload"
import { isImageCommand } from "@/lib/utils/misc"
import { chatPhrases, selectOptions } from "@/mock-data"
import { ChatAction } from "@/store/reducers/chat-reducer"

export interface ChatInputProps {
  dispatch: React.Dispatch<ChatAction>
}

export default function ChatInput(props: ChatInputProps) {
  const { dispatch } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState("")
  const { suggestions, setSuggestions, autocomplete } = useAutocomplete(chatPhrases, 3)
  const [isSelectScreenActive, setIsSelectScreenActive] = useState(false)
  const { createTextMessage, createImageMessage } = useMessagePayload({
    type: "ADD_MESSAGE",
    incoming: false,
  })

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleValueChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setValue(value)
    autocomplete(value)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!value.trim()) return

    if (value === "/select") {
      return setIsSelectScreenActive(true)
    }

    const messagePayload = isImageCommand(value)
      ? createImageMessage("https://picsum.photos/200")
      : createTextMessage(value)

    dispatch(messagePayload)

    setValue("")
    setSuggestions([])
  }

  return (
    <StyledChatInputContainer>
      <Dialog title="Select an Option Below" active={isSelectScreenActive} setActive={setIsSelectScreenActive}>
        <Combobox
          inputEl={inputRef.current}
          setIsSelectScreenActive={setIsSelectScreenActive}
          setSelect={setValue}
          options={selectOptions}
        />
      </Dialog>
      <AutoComplete inputEl={inputRef.current} setText={setValue} suggestions={suggestions} />
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormContainer>
          <StyledFormField name="prompt">
            <FormPrimitive.Control asChild value={value} onChange={handleValueChange}>
              <StyledInput type="text" required placeholder="Message Acme Chat" ref={inputRef} />
            </FormPrimitive.Control>
          </StyledFormField>
          <FormPrimitive.Submit asChild>
            <StyledButton $active={value !== ""}>
              <ArrowRight />
            </StyledButton>
          </FormPrimitive.Submit>
        </StyledFormContainer>
      </StyledForm>
    </StyledChatInputContainer>
  )
}
