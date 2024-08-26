import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { AutoComplete } from "../autocomplete"

describe("AutoComplete Component", () => {
  const mockSetText = jest.fn()

  const suggestions = ["apple", "banana", "orange"]

  it("should render the suggestions when provided", () => {
    render(<AutoComplete suggestions={suggestions} setText={mockSetText} />)

    suggestions.forEach((suggestion) => {
      expect(screen.getByText(suggestion)).toBeInTheDocument()
    })
  })

  it("should call setText and focus the input when a suggestion is clicked", () => {
    const mockInputEl = document.createElement("input")
    mockInputEl.focus = jest.fn()

    render(<AutoComplete suggestions={suggestions} setText={mockSetText} inputEl={mockInputEl} />)

    fireEvent.click(screen.getByText("banana"))

    expect(mockSetText).toHaveBeenCalledWith("banana")
    expect(mockInputEl.focus).toHaveBeenCalled()
  })

  it("should not render suggestions when the list is empty", () => {
    render(<AutoComplete suggestions={[]} setText={mockSetText} />)

    expect(screen.queryByText(suggestions[0])).not.toBeInTheDocument()
  })
})
