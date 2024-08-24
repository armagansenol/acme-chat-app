import { useState, useCallback } from "react"

export const useAutocomplete = (phrases: string[], minCharacters: number = 1) => {
  const [suggestions, setSuggestions] = useState<string[]>([])

  const autocomplete = useCallback(
    (value: string) => {
      if (value.length >= minCharacters) {
        const regex = new RegExp(value, "i")

        const filteredSuggestions = phrases.filter((phrase) => regex.test(phrase.slice(0, 10)))

        if (filteredSuggestions.length > 0) {
          setSuggestions(filteredSuggestions)
        } else {
          setSuggestions([])
        }
      } else {
        setSuggestions([])
      }
    },
    [phrases, minCharacters]
  )

  return {
    suggestions,
    setSuggestions,
    autocomplete,
  }
}
