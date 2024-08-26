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
import { chatPhrases } from "@/mock-data"
import { ChatAction } from "@/store/context/chat/reducers"
import { useMessagePayload } from "@/store/context/chat/hooks/use-message-payload"
import { useAutocomplete } from "@/hooks/use-auto-complete"

export interface ChatInputProps {
  dispatch: React.Dispatch<ChatAction>
}

export default function ChatInput(props: ChatInputProps) {
  const { dispatch } = props
  const [inputValue, setInputValue] = useState("")

  const inputRef = useRef<HTMLInputElement>(null)
  const { suggestions, setSuggestions, autocomplete } = useAutocomplete(chatPhrases, 3)

  const { createTextMessage, createOptionsMessage } = useMessagePayload({
    type: "ADD_MESSAGE",
  })

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleValueChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setInputValue(value)
    autocomplete(value)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!inputValue.trim()) return

    if (inputValue === "/select") {
      const messagePayload = createOptionsMessage(true)
      dispatch(messagePayload)
      setInputValue("")
      return
    }

    const messagePayload = createTextMessage(inputValue, false)
    dispatch(messagePayload)

    setInputValue("")
    setSuggestions([])
  }

  return (
    <StyledChatInputContainer>
      <AutoComplete inputEl={inputRef.current} setText={setInputValue} suggestions={suggestions} />
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormContainer>
          <StyledFormField name="prompt">
            <FormPrimitive.Control asChild value={inputValue} onChange={handleValueChange}>
              <StyledInput type="text" required placeholder="Message Acme Chat" ref={inputRef} />
            </FormPrimitive.Control>
          </StyledFormField>
          <FormPrimitive.Submit asChild>
            <StyledButton $active={inputValue !== ""}>
              <ArrowRight />
            </StyledButton>
          </FormPrimitive.Submit>
        </StyledFormContainer>
      </StyledForm>
    </StyledChatInputContainer>
  )
}
