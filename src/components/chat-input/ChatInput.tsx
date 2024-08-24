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

import { getCurrentTime } from "@/lib/utils/misc"
import { ChatAction } from "@/store/reducers/chat-reducer"
import { MessageType } from "@/types"
import { AutoComplete } from "@/components/autocomplete"
import { chatPhrases } from "@/mockData"
import { useAutocomplete } from "@/hooks/useAutoComplete"

export interface ChatInputProps {
  dispatch: React.Dispatch<ChatAction>
}

export default function ChatInput(props: ChatInputProps) {
  const { dispatch } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState("")
  const { suggestions, setSuggestions, autocomplete } = useAutocomplete(chatPhrases, 3)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    setValue(value)
    autocomplete(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("form submit")

    if (!value.trim()) return
    dispatch({
      type: "ADD_MESSAGE",
      payload: { type: MessageType.text, text: value, createdAt: getCurrentTime(), incoming: false },
    })

    setValue("")
    setSuggestions([])
  }

  return (
    <StyledChatInputContainer>
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
