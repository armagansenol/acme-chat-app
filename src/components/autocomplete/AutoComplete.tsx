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

  return (
    <StyledAutoCompleteContainer>
      <AnimatePresence>
        {suggestions.length !== 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <StyledItemsContainer>
              {suggestions.map((item, i) => (
                <StyledItem
                  key={i}
                  onClick={() => {
                    setText(item)
                    inputEl?.focus()
                  }}
                >
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
