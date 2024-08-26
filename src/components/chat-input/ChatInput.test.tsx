import { ChatInput } from "../chat-input"
import { chatPhrases } from "../../mock-data"
import "@testing-library/jest-dom/extend-expect"
import { fireEvent, render, screen } from "@testing-library/react"

const mockDispatch = jest.fn()

const setup = () => {
  render(<ChatInput dispatch={mockDispatch} />)

  const input = screen.getByPlaceholderText("Message Acme Chat") as HTMLInputElement
  return { input }
}

describe("ChatInput and AutoComplete Integration", () => {
  afterEach(() => {
    mockDispatch.mockClear()
  })

  test("shows autocomplete suggestions when typing", () => {
    const { input } = setup()

    fireEvent.change(input, { target: { value: "Hello" } })

    // Expect the autocomplete suggestions to be displayed
    const suggestionItems = screen.getAllByRole("button")
    expect(suggestionItems.length).toBeGreaterThan(0)
    expect(suggestionItems[0]).toBe(chatPhrases[0])
  })

  test("selecting an autocomplete suggestion updates the input value", () => {
    const { input } = setup()

    fireEvent.change(input, { target: { value: "Hello" } })

    // Select the first suggestion
    const suggestionItems = screen.getAllByRole("button")
    fireEvent.click(suggestionItems[0])

    // Expect the input value to be updated with the selected suggestion
    expect(input.value).toBe(chatPhrases[0])
  })
})
