import { StyledAutoCompleteContainer, StyledItem, StyledItemsContainer } from "./styles"

import { AnimatePresence, motion } from "framer-motion"
import { memo } from "react"

interface AutoCompleteProps {
  inputEl?: HTMLInputElement | null
  suggestions: string[]
  setText: (val: string) => void
}

const AutoComplete = memo((props: AutoCompleteProps) => {
  const { suggestions, setText, inputEl } = props

  function handleSelect(val: string) {
    setText(val)
    inputEl?.focus()
  }

  return (
    <StyledAutoCompleteContainer>
      <AnimatePresence>
        {suggestions.length !== 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <StyledItemsContainer>
              {suggestions.map((item, i) => (
                <StyledItem key={i} onClick={() => handleSelect(item)}>
                  {item}
                </StyledItem>
              ))}
            </StyledItemsContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledAutoCompleteContainer>
  )
})

export default AutoComplete
